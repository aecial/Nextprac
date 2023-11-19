import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";
export async function POST(request) {
  const res = await request.json();
  const { name, email, password, phone, address } = res.userData;

  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
      phone_number: phone,
      address: address,
      role: "CONSUMER",
    },
  });

  return NextResponse.redirect("/login");
}
