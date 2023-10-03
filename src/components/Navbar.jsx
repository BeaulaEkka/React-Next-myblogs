"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiMenu } from "react-icons/hi";
import { MobileNav } from "./MobileNav";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { session } = useSession();
  console.log(session);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("/");

  const handleAddStoryClick = () => {
    if (!session) {
      signIn();
    }
  };

  const handleMobileMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <div className="fixed  w-full bg-cyan-500  h-[4rem] shadow-md ">
      <div className="w-[80%] mx-auto  h-[4rem] flex flex-rows z-10 justify-center items-center">
        {" "}
        <div className="">
          {" "}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={163}
              height={27.5}
            />
          </Link>
        </div>
        <ul className="w-full mx-auto flex flex-row  font-semibold text-white items-center justify-end">
          <li
            className={`hidden md:flex hover:bg-pink-400 h-[4rem] px-8 items-center justify-center ${
              activeLink === "/" ? "bg-pink-600" : ""
            }`}
          >
            {" "}
            <Link href="/" onClick={() => setActiveLink("/")}>
              Home{" "}
            </Link>
          </li>{" "}
          <li
            className={` ${
              activeLink === "/about" ? "bg-pink-600" : ""
            } hidden md:flex hover:bg-pink-400 h-[4rem]  px-5  justify-center items-center`}
          >
            {" "}
            <Link href="/about" onClick={() => setActiveLink("/about")}>
              About{" "}
            </Link>
          </li>{" "}
          <li
            className={`${
              activeLink === "/travel" ? "bg-pink-600" : ""
            } hidden md:flex hover:bg-pink-400 h-[4rem]   px-5  items-center`}
          >
            {" "}
            <Link href="/travel" onClick={() => setActiveLink("/travel")}>
              Travel Resources
            </Link>
          </li>
          <Link href="/addstory" onClick={() => setActiveLink("/addstory")}>
            <li
              onClick={() => {
                handleAddStoryClick;
              }}
              className={`${
                activeLink === "/addstory" ? "bg-pink-600" : ""
              } hidden md:flex hover:bg-pink-400 h-[4rem] justify-center  px-5  items-center`}
            >
              Add Story
            </li>
          </Link>
          <li className="hidden md:flex flex-col hover:bg-pink-400  h-[4rem] w-fit line px-5  justify-center items-center leading-4">
            {session ? (
              <>
                <p className="text-sm font-normal italic">Hi,admin </p>
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}
          </li>
          <li className="md:hidden text-3xl " onClick={handleMobileMenuClick}>
            <HiMenu />
          </li>
        </ul>
      </div>
      <div
        className={
          menuOpen
            ? "z-50 md:hidden fixed right-0 top-[4rem] w-[40%] h-screen bg-black bg-opacity-80 p-10 ease-in duration-500 text-right"
            : "fixed right-[-100%] p-10 ease-in duration-500"
        }
      >
        {MobileNav && (
          <MobileNav
            handleAddStoryClick={handleAddStoryClick}
            session={session}
            signIn={signIn}
            signOut={signOut}
            handleMobileMenuClick={handleMobileMenuClick}
          />
        )}
      </div>
    </div>
  );
}
