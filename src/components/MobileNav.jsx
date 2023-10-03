import Link from "next/link";
import React from "react";
import { HiMenu } from "react-icons/hi";

export const MobileNav = ({
  handleAddStoryClick,
  session,
  signIn,
  signOut,
  handleMobileMenuClick,
}) => {
  return (
    <div className="z-50 ">
      <ul className=" mx-auto flex flex-col gap-8 font-semibold text-white">
        <li className="  hover:text-pink-400 " onClick={handleMobileMenuClick}>
          {" "}
          <Link href="/">Home </Link>
        </li>{" "}
        <li className="hover:text-pink-400  " onClick={handleMobileMenuClick}>
          {" "}
          <Link href="/about">About </Link>
        </li>{" "}
        <li className=" hover:text-pink-400  " onClick={handleMobileMenuClick}>
          {" "}
          <Link href="/travel">Travel Resources</Link>
        </li>
        <li
          onClick={() => {
            handleAddStoryClick();
            handleMobileMenuClick();
          }}
          className=" hover:text-pink-400"
        >
          {" "}
          <Link href="/addstory">Add Story </Link>
        </li>
        <li className="flex-col hover:text-pink-400  leading-4">
          {session ? (
            <>
              <p className="text-sm font-normal italic">Hi,admin </p>
              <button
                onClick={() => {
                  signOut();
                  handleMobileMenuClick();
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                signIn();
                handleMobileMenuClick();
              }}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
