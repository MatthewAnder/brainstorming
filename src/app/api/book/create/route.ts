import { validateRequest } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const createSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

export async function POST(req: NextRequest) {
  const { title, url } = await req.json();

  const { session, user } = await validateRequest();

  if (!session || !user) {
    return new NextResponse("Please Log In Before Continuing", { status: 400 });
  }

  const validation = createSchema.safeParse({ title, url });

  if (validation.success) {
    try {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          books: {
            create: {
              title,
              url,
            },
          },
        },
      });
      return new NextResponse(null, { status: 200 });
    } catch (e) {
      return new NextResponse("Prisma Bad Request", { status: 400 });
    }
  } else {
    return new NextResponse("Credentials Invalid", { status: 400 });
  }
}
