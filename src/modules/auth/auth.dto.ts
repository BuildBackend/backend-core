import { Role, UserStatus } from "@prisma/client";

export interface RegisterRequestDto {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface RegisterResponseDto {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  role: Role;
  status: UserStatus;
  emailVerified: boolean;
  createdAt: Date;
}