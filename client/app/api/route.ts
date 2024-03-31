import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
    session: {
      strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: {},
            password: {},
          },
          async authorize(credentials, req) {
            const response = await sql`
            SELECT * FROM USERS WHERE username=${credentials?.username}`;
            const user = response.rows[0];
            const passwordCorrect = await compare(
              credentials?.password || '',
              user.password
            );
            if (passwordCorrect){
              return {
                id: user.id,
                username: user.username,
              };
            }
            return null
          },
        }),
      ],
});
    export {handler as  GET, handler as POST};