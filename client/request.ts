import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const userName = request.query.user as string;
    const userPassword = request.query.password as string;
    if (!userName || !userPassword) throw new Error('Username and password required');
    await sql`INSERT INTO USERS (Username, Password) VALUES (${userName}, ${userPassword});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const usersInfo = await sql`SELECT * FROM USERS;`;
  return response.status(200).json({ usersInfo });
}