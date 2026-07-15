import { prisma } from "../../config/prisma.js";
import { Prisma } from "@prisma/client";

export const authRepository = {
    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    },

    async createUser(data: Prisma.UserCreateInput) {
        return prisma.user.create({
            data,
        });
    }
}