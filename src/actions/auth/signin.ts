"use server"

import { HOME } from "@/constants/paths"
import { encrypt } from "@/lib/utils"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import prisma from "@/db/prisma"

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string
  const passsword = formData.get("password") as string

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })
  if(user){
    const isMatch = await bcrypt.compare(passsword, user.password)
    if(isMatch){
        const expires = new Date(Date.now() + 86400 * 1000);
        const session = await encrypt({ name: user.name as string, email: user.email, expires: expires });
        cookies().set("token", session, { expires, httpOnly: true });
        await prisma.$disconnect()
        redirect(HOME)
    }else{
        return {
            error: "Invalid Credentials",
            success: ""
        }
    }
  }
  return {
    error: "User not found please Singup",
    success: ""
  }
  
}
