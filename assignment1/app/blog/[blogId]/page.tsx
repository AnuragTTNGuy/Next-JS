"use client"
// pages/[blogId].tsx

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BlogPost } from '../interfaces';

const BlogDetailPage: React.FC = () => {
  const pathname = usePathname();
  const blogId = pathname.split('/')[2];
  
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog/${blogId}`);
        if (response.ok) {
          const data = await response.json();
          setBlogPost(data.blog);
        } else {
          throw new Error('Failed to fetch blog post');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-gray-700 font-bold mb-4">{blogPost.title}</h1>
          <p className="text-gray-700 mb-2">Author: {blogPost.author}</p>
          <p className="text-gray-500 text-sm mb-2">
            Published: {blogPost.date_published}
          </p>
          <p className="text-gray-700">{blogPost.content}</p>
        </div>
      </div>
  );
};

export default BlogDetailPage;
