"use client";

import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

export default function LikeButton() {
  
  const [like, setLike] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded flex flex-row items-center hover:bg-blue-600 cursor-pointer"
        onClick={() => setLike(!like)}
      >
        <span className="mr-2">{like ? <FaHeart /> : <FaRegHeart />}</span>
        <span>{like ? "Curtido" : "Curtir"}</span>
        salve
      </button>
    </div>
  );
}
