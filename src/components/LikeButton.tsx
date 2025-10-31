"use client";

import { useState } from "react";
import Image from "next/image";

interface LikeProps {
  Like: number;
}

export default function Like(props: LikeProps) {
  const [likeCount, setLikeCount] = useState(props.Like);

  return (
    <div className="flex h-screen justify-center bg-orange-300 border-2-black">
      <div className="flex flex-row gap-5 self-center cursor-pointer items-center border-3 bg-white p-7 pt-2 pb-2 rounded-2xl">
        <h1 className="flex  items-center text-5xl">{likeCount}</h1>
        <button
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130 active:scale-90"
          onClick={() => setLikeCount(likeCount + 1)}
        >
          <Image src="/logoIconeCoraLike.png" alt="" width={50} height={50} />
        </button>
      </div>
    </div>
  );
}
