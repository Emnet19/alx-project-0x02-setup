// // pages/posts.tsx
// import React from "react";
// import Header from "@/components/layout/Header";

// const Posts: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <main className="p-6">
//         <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
//         <p className="text-gray-700">Here you can see all the posts.</p>
//       </main>
//     </>
//   );
// };

// export default Posts;



// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;
