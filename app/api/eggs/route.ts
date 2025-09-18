import { NextResponse } from 'next/server';

export async function GET() {
    throw new Error('Failed to fetch eggs');
    return NextResponse.json(
        { error: 'Failed to fetch eggs' },
        { status: 500 }
      );
  try {
    // Mock data for now - replace with actual database call
    const eggs = [
      'scrambled egg',
      'fried egg',
      'boiled egg',
      'poached egg'
    ];

    return NextResponse.json(eggs);
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
