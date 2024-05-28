"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost } from "./interfaces";

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);

  useEffect(() => {
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
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
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
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
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
                href={`/blog/${post._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </Link>
              <div className="flex space-x-2 my-4">
                  <Link
                    href={`/blog/edit/${post._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBlogPost(post._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
