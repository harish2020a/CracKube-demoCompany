import React from "react";
import PostItem from "./PostItem";
import education from "../../assets/thumbnails/education.png"
import lifestyle from "../../assets/thumbnails/lifestyle.png"
import sport from "../../assets/thumbnails/sport.png"
import technology from "../../assets/thumbnails/technology.png"

const posts = [
  {
    category: "LIFESTYLE",
    title: "Changing people's lifestyles for the better",
    image: lifestyle
  },
  {
    category: "TECHNOLOGY",
    title: "Simple Solutions for Complex Connections",
    image: technology
  },
  {
    category: "SPORT",
    title: "All things are difficult before they are easy",
    image: sport
  },
  {
    category: "EDUCATION",
    title: "How to Memorize everything you read?",
    image: education
  },
];

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.category} post={post} />
      ))}
      {posts.map((post) => (
        <PostItem key={post.category} post={post} />
      ))}
    </>
  );
};

export default Posts;
