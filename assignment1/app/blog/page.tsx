"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogPost from "../components/BlogPost";
import { BlogPostType } from "./interfaces";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPostType[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/");
    }
    const fetchBlogData = async () => {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const data = await response.json();
          setBlogData(data.blogs);
        } else {
          throw new Error("Failed to fetch blog data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogData();
  }, []);

  const deleteBlogPost = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBlogData((prevData) => prevData.filter((post) => post._id !== id));
      } else {
        throw new Error("Failed to delete blog post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (blogData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl font-sans text-sm">
        <h1 className="text-3xl font-bold mb-8">
          Blogs
          <Link href="/blog/add">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded float-right">
              Add Blog
            </button>
          </Link>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogPost key={post._id} post={post} deleteBlogPost={deleteBlogPost} />
          ))}
        </div>
      </div>
    </main>
  );
}
