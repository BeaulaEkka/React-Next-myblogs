import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaBehanceSquare,
  FaDribbbleSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 w-full h-fit py-5 text-pink-200">
      <div className="w-[60%] mx-auto flex flex-col md:flex-row justify-between p-5">
        <div className="flex flex-col justify-center items-center">
          <p>© 2023 All Rights Reserved. Birdie. beaula.vercel.com</p>
          <div className="flex flex-row gap-5 mt-5">
            <div className="text-pink-200  hover:text-pink-400 text-2xl">
              <Link href="https://www.linkedin.com/in/beaula-ekka-favejee-97316558/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="text-pink-200  hover:text-pink-400 text-2xl">
              <Link href="https://github.com/BeaulaEkka">
                <FaGithub />
              </Link>
            </div>
            <div className="text-pink-200  hover:text-pink-400 text-2xl">
              <Link href="https://www.behance.net/beaula">
                <FaBehanceSquare />
              </Link>
            </div>
            <div className="text-pink-200  hover:text-pink-400 text-2xl">
              <Link href="https://dribbble.com/Beaulafavejee">
                <FaDribbbleSquare />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold  text-pink-300">TOP PLACES</h1> <p>Norway</p>{" "}
          <p>Iceland</p> <p>New York</p> <p>Spain</p>
        </div>
        <div>
          <h1 className="font-bold text-pink-300">ABOUT US</h1>{" "}
          <Link href="https://beaula.vercel.app/">
            <p className="hover:text-pink-400">beaula.vercel.com</p>
          </Link>{" "}
          <p>Travel</p> <p>Resources</p> <p>Privacy & Disclaimer</p>
        </div>
      </div>
    </div>
  );
}
