"use server"
import prisma from "@/db/prisma"

export const getUsers = async() => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            status: true,
            last_login: true
        }
    })
    await prisma.$disconnect()
    return users
}