import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Evaluation from "@/models/Evaluation";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const evaluation = await Evaluation.create(body);

    return NextResponse.json(
      { success: true, data: evaluation },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectDB();

    const evaluations = await Evaluation.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: evaluations },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID required" },
        { status: 400 }
      );
    }

    const deleted = await Evaluation.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}
