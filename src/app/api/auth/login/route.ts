import { lucia } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password } = loginSchema.parse(body);
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return;
  }

  const validPassword = await verify(user.password_hash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": sessionCookie.serialize(),
    },
  });
}
