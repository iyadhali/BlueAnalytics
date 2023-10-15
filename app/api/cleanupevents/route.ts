import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const cleanupevents = await prisma.cleanupevent.findMany();
  return NextResponse.json(cleanupevents);
}