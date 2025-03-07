import { BlogCard } from "@/components/BlogCard/BlogCard";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center px-5 ">
      <h1 className="text-4xl font-semibold text-white my-5 md:my-12">
        <br />
        <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
          My Blog Posts
        </span>
      </h1>
      <BlogCard />
      <br />
      {/* <BlogCard />
      <br />
      <BlogCard />
      <br />
      <BlogCard />
      <br />
      <BlogCard />
      <br /> */}
    </div>
  );
};

export default Blog;
