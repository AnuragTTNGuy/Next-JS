"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost } from "./interfaces";

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/blogposts");
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        } else {
          throw new Error("Failed to fetch blog data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogData();
  }, []);

  if (blogData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-gray-700 text-xl font-bold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-2">Author: {post.author}</p>
              <p className="text-gray-500 text-sm mb-2">
                Published: {post.date_published}
              </p>
              <p className="text-gray-700 mb-4">
                {post.content.slice(0, 20)}
                {post.content.length > 20 ? "..." : ""}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
