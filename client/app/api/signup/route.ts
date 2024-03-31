import { NextResponse } from "next/server";
import {hash} from 'bcrypt';
import {sql} from '@vercel/postgres';
export async function POST(request: Request){
    try{
        //For validation
        const {username, password} = await request.json();
        console.log({ username, password});
        //Hashing password with salt
        const hashedPassword = await hash(password, 10);
        const response = await sql`
            INSERT INTO USERS (username, password)
            VALUES (${username}, ${hashedPassword})
        `;
    }catch(e){
        console.log({e});
    }

    return NextResponse.json({message:'Success'});
}
