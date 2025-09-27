// import React from 'react'
// import Card from '@/components/common/Card'
// const home = () => {
//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       <Card 
//         title="Welcome to Our Platform" 
//         content="This platform helps you manage tasks efficiently." 
//       />
//       <Card 
//         title="About Us" 
//         content="We are a team dedicated to building scalable applications." 
//       />
//       <Card 
//         title="Contact" 
//         content="Reach out via email at support@example.com." 
//       />
//     </div>
//   )
// }

// export default home



// pages/home.tsx
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Welcome to Our Platform", content: "This platform helps you manage tasks efficiently." },
    { title: "About Us", content: "We are a team dedicated to building scalable applications." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <main className="p-6">
      {/* Button to open modal */}
      <div className="mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          + Add Post
        </button>
      </div>

      {/* Posts list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </main>
  );
};

export default Home;
