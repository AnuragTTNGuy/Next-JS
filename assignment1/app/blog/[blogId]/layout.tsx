import React from "react";

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <h2>Blog Detail Layout</h2>
      <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
    </div>
  );
}
