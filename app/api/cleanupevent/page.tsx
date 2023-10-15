import { prisma } from '@/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export default async function GET() {
    const cleanupevents = await prisma.cleanupevent.findMany();
    let cleanups = await cleanupevents;
    NextResponse.json(cleanups);
}