import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import prisma from "@/lib/prisma";
import { lucia } from "@/lib/auth";

const userSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, username, password } = userSchema.parse(body);

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10);
  try {
    await prisma.user.create({
      data: {
        id: userId,
        username,
        email,
        password_hash: passwordHash,
      },
    });
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    return new NextResponse(null, {
      status: 302,
      headers: {
        Location: "/",
        "Set-Cookie": sessionCookie.serialize(),
      },
    });
  } catch (e) {
    return new NextResponse("Something is wrong", {
      status: 400,
    });
  }
}
