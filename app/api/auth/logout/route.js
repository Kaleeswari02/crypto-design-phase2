import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // In a real application, you might want to blacklist the token
    // or store it in a database for validation
    return NextResponse.json({
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
