"use client";

import { useState, useEffect } from "react";

export default function Dog() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);

  return (
    <div>
      <h2>Cachorros</h2>
      {dogImage && (
        <>
          <img src={dogImage} alt="Random Dog" height={300} width={300} />
      {'botão para trocar Image'}
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setDogImage("")}>buscar outro cachorro</button>
        </>
      )}
    </div>
  );
}
