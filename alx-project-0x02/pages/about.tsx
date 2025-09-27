// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="flex gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </main>
  );
};

export default About;
