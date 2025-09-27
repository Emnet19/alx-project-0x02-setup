// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p className="text-gray-700">Here you can see all the posts.</p>
      </main>
    </>
  );
};

export default Posts;
