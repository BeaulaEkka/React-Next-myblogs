import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-pink-300  h-[4rem] ">
      <div className="w-[65%] mx-auto h-[4rem] relative  ">
        <div className="absolute top-1 ">
          {" "}
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={120} height={120} />
          </Link>
        </div>

        <ul className="w-full mx-auto flex flex-row gap-5 font-semibold text-white  items-center justify-end ">
          <li className="hover:bg-pink-400 active:bg-pink-600 h-[4rem] px-5 flex items-center">
            {" "}
            <Link href="/">Home </Link>
          </li>{" "}
          <li className="hover:bg-pink-400  h-[4rem] px-5 flex items-center">
            {" "}
            <Link href="/about">About </Link>
          </li>{" "}
          <li className="hover:bg-pink-400  h-[4rem] px-5 flex items-center">
            {" "}
            <Link href="/travel">Travel Resources</Link>
          </li>
          <Link href="/addstory">
            <li className="hover:bg-pink-400  h-[4rem] px-5 flex items-center">
              Add Story
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
