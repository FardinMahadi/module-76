"use client";

import { useEffect, useState } from "react";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const starsArray = [];
      for (let i = 0; i < 150; i++) {
        starsArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(starsArray);
    };

    createStars();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
