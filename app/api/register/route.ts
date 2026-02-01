import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body logic here if needed, but client did it mostly.

        // Simulate DB delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Registration received:", body);

        return NextResponse.json({ success: true, message: "Registered successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }
}
