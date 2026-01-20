import { NextResponse } from "next/server";

// GET /api/customers - Get all customers
export async function GET() {
  try {
    // For now, return empty array
    // In real implementation, fetch from database
    const customers = [];
    
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/customers - Create new customer
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: "Nama pelanggan wajib diisi" },
        { status: 400 }
      );
    }

    // For now, return mock success
    // In real implementation, save to database
    const newCustomer = {
      id: Date.now().toString(),
      name,
      email: email || "",
      phone: phone || "",
      address: address || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}