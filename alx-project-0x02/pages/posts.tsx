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
import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;

// ✅ Next.js data fetching (SSG)
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
