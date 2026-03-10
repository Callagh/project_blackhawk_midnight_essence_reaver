import  "server-only";
import  { dbLogin } from "@/db/dbconfig";

interface newUser{
    email: string;
    password: string;
}

export async function createUser(user: newUser){
    const {email, password} = user;
    const result = await dbLogin.query("INSERT INTO users (email, password) VALUES (?, ?);", [email, password]);
    return result;
}