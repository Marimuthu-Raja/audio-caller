import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SignJWT, jwtVerify } from "jose";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const key = new TextEncoder().encode("randomsecretKey");

type JWTPayLoad = {
  name: string;
  email: string;
  expires: Date;
}

export async function encrypt(payload: JWTPayLoad) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export const capitalize = (s:string) => (s && s[0].toUpperCase() + s.slice(1)) || ""