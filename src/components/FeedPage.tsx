"use client";

import { useState } from "react";
import PostCard from "./PostCard";

type Post = {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, autor: "Jucão", conteudo: "Hoje é mais que do que amanhã!", likes: 0 },
    { id: 2, autor: "Bob", conteudo: "Hoje é um bom dia!", likes: 0 },
    { id: 3, autor: "Maykão", conteudo: "React e Next.js é incrível!", likes: 0 },
  ]);

  function curtirPost(id: number) {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          autor={post.autor}
          conteudo={post.conteudo}
          likes={post.likes}
          curtirPost={curtirPost}
        />
      ))}
    </div>
  );
}
