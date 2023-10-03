"use client";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full ">
      <button
        className={`mx-auto flex justify-center  text-cyan-500 p-2  transition-opacity duration-200 hover:text-cyan-300 hover:underline`}
        onClick={scrollToTop}
      >
        Scroll To Top
      </button>
    </div>
  );
}
