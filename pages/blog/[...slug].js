import React from "react";
import { useRouter } from "next/router";

// next.js catches anything after blog
// Anything after blog is caught by this page component
// and the data is available as an array

const BlogPostPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  );
};

export default BlogPostPage;
