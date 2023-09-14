import { ObjectId } from "mongoose";
import React from "react";

type props = {
  posts: {
    _id: string;
    id: number;
    title: string;
    username: string;
    date: string;
    post: string;
  }[];
};

const Posts = (props: props) => {
  const { posts } = props;

  return (
    <>
      {posts.map((post) => (
        <div className="card my-2.5" key={post._id}>
          <p className="title-text break-all">{post.title}</p>
          <p className="subtitle-text break-all">
            Posted by {post.username} on {post.date}
          </p>
          <p className="post-text break-all">{post.post}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
