import { NextResponse } from "next/server";

// GET /api/suppliers - Get all suppliers
export async function GET() {
  try {
    // For now, return empty array
    // In real implementation, fetch from database
    const suppliers = [];
    
    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/suppliers - Create new supplier
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: "Nama supplier wajib diisi" },
        { status: 400 }
      );
    }

    // For now, return mock success
    // In real implementation, save to database
    const newSupplier = {
      id: Date.now().toString(),
      name,
      email: email || "",
      phone: phone || "",
      address: address || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newSupplier, { status: 201 });
  } catch (error) {
    console.error("Error creating supplier:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}