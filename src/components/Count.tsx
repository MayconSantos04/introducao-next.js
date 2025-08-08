"use client"

import { useState } from "react";

interface CountProps {
  initial: number
}

export default function Count(props: CountProps) {
  const [count, setCount] = useState(props.initial)

  return (
    <div>
      <h1>Contagem: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
      Incrementar
      </button>
    </div>
  )
}