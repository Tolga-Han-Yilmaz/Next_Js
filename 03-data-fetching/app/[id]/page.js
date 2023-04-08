import React from "react";

export const getAllPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

async function BlogPage({ params }) {
  console.log("Inside the page: ", params.id);
  const data = await getSinglePost(params.id);
  return (
    <div>
      <h1>Title: {data.title} </h1>
    </div>
  );
}

export default BlogPage;
