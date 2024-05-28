import connectMongoDB from "@/app/libs/mongodb";
import BlogPosts from "@/app/models/BlogPosts";
import { NextRequest, NextResponse } from "next/server";
import { Params } from '@/app/blog/interfaces';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    
    const { author, title, date_published, content } = await request.json();

    console.log('Data new', author, id);
    
    await connectMongoDB();

    const updatedPost = await BlogPosts.findByIdAndUpdate(id, { author, title, date_published, content }, { new: true });

    if (!updatedPost) {
      return NextResponse.json({ message: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated", updatedPost }, { status: 200 });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json({ message: "Failed to update blog post" }, { status: 500 });
  }
}


export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  await connectMongoDB();
  
  const blog = await BlogPosts.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await BlogPosts.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}