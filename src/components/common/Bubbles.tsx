"use client";
import React, { useEffect } from "react";

const Bubble: React.FC = () => {
  const createBubble = () => {
    const bubble = document.createElement("div");

    const size = Math.random() * 50 + 10;
    const lifetime = Math.random() * 6 + 8;
    const speed = Math.random() * 80 + 40;
    const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360);

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.position = "absolute";
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.bottom = "-20px";
    bubble.style.borderRadius = "50%";
    bubble.style.background = "rgba(255, 255, 255, 0.8)";
    bubble.style.pointerEvents = "none";
    bubble.style.opacity = "0";
    bubble.style.animation = "blobMorph 3s infinite ease-in-out alternate";

    const container = document.getElementById("background-container");
    if (!container) return;
    container.appendChild(bubble);

    const pageHeight = document.body.scrollHeight;
    const maxTravel = Math.min(pageHeight, speed * lifetime);

    bubble.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 0.3 },
        { transform: `translateY(-${maxTravel}px) rotate(${rotation}deg)`, opacity: 0.3 },
      ],
      {
        duration: lifetime * 1000, 
        iterations: 1,
        easing: "linear",
        fill: "forwards",
      }
    );

    setTimeout(() => {
      const fade = bubble.animate(
        [{ opacity: 0.3 }, { opacity: 0 }],
        { duration: lifetime * 200, fill: "forwards" } 
      );
      fade.onfinish = () => bubble.remove();
    }, lifetime * 800);
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      createBubble();
    }
    const bubbleInterval = setInterval(createBubble, 500);

    return () => clearInterval(bubbleInterval);
  }, []);

  return <div id="background-container" className="bubble"></div>;
};

export default Bubble;
