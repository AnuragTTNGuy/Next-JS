import React from "react";
import Link from "next/link";
import { BlogPostType } from "../blog/interfaces";

interface BlogPostProps {
  post: BlogPostType;
  deleteBlogPost: (id: string) => Promise<void>;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, deleteBlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-gray-700 text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">Author: {post.author}</p>
      <p className="text-gray-500 text-sm mb-2">Published: {post.date_published}</p>
      <p className="text-gray-700 mb-4">
        {post.content.slice(0, 20)} {post.content.length > 20? "..." : ""}
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
  );
};

export default BlogPost;