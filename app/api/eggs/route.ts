import { NextResponse } from 'next/server';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function GET() {
  try {
    // Query SQLite database for eggs

    const db = await open({
      filename: './eggs.db',
      driver: sqlite3.Database
    });

    await db.exec('CREATE TABLE IF NOT EXISTS eggs (name TEXT)');
    await db.run('INSERT INTO eggs (name) VALUES (?)', ['scrambled egg']);
    await db.run('INSERT INTO eggs (name) VALUES (?)', ['fried egg']);
    await db.run('INSERT INTO eggs (name) VALUES (?)', ['boiled egg']);
    await db.run('INSERT INTO eggs (name) VALUES (?)', ['poached egg']);

    const eggs = await db.all('SELECT name FROM eggs');

    const eggStrings = eggs.map((egg) => egg.name);

    return NextResponse.json(eggStrings);
  } catch (error) {
    console.error('Error fetching eggs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch eggs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { egg } = body;

    if (!egg) {
      return NextResponse.json(
        { error: 'Egg data is required' },
        { status: 400 }
      );
    }

    // Mock adding egg - replace with actual database operation
    console.log('Adding egg:', egg);

    return NextResponse.json(
      { message: 'Egg added successfully', egg },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding egg:', error);
    return NextResponse.json(
      { error: 'Failed to add egg' },
      { status: 500 }
    );
  }
}
