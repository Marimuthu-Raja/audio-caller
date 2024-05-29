"use server"

import { HOME } from "@/constants/paths";
import { encrypt } from "@/lib/utils";
import bcrypt from 'bcrypt'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/db/prisma";

export const signupWithEmailAndPassword = async (formData: FormData) => {
    const email = formData.get('email') as string
    const passsword = formData.get('password') as string
    const fullName = formData.get('fullName') as string
    const hash = await bcrypt.hash(passsword,10)
    try{
        const user = await prisma.user.create({
            data: {
                id: crypto.randomUUID(),
                email,
                password: hash,
                name: fullName,
                last_login: new Date(),
                status: 'online',
            }
        })
        const expires = new Date(Date.now() + 86400 * 1000);
        const session = await encrypt({ name: user.name as string, email: user.email, expires: expires });
        cookies().set("token", session, { expires, httpOnly: true });
        await prisma.$disconnect()
    }catch (err) {
        console.log(err)
    }
    redirect(HOME)
}