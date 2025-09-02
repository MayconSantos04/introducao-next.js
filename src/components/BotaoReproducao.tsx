"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function BotaoReproduzir() {
  const [pausarPlay, setPausarPlay] = useState(false);

  return (
    <div>
      <button onClick={() => setPausarPlay(!pausarPlay)}>
        <div className="bg-amber-400 text-white px-4 py-2 rounded flex flex-row items-center gap-5 hover:bg-blue-600 cursor-pointer">
          <span>{pausarPlay ? "Play" : "Pause"}</span>
          <div>
            <span>{pausarPlay ? <FaPlay />: <FaPause />}</span>
        </div>
        </div>
      </button>
    </div>
  );
}
