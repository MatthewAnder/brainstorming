import { validateRequest } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const { user } = await validateRequest();
  if (!user) {
    return new NextResponse(null, { status: 400 });
  }

  try {
    const books = await prisma.book.findMany({
      where: {
        userId: user.id,
      },
    });

    return NextResponse.json(books, { status: 200 });
  } catch (e) {
    return new NextResponse();
  }
}
