"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!title || !description || !picture) {
      alert("Title, Picture and description are required.");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          picture,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("RES:", res);
        throw new Error("Failed to create a topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-3 mt-[8rem] mb-[8rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-[60%] mx-auto"
      >
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-gray-300 px-8 py-2 w-full "
            type="text"
            placeholder="Topic Title"
          />
        </div>

        <div className="w-full">
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md w-full h-80"
          />
        </div>

        <div className="mt-12">
          <input
            onChange={(e) => setPicture(e.target.value)}
            value={picture}
            className="border border-gray-300 px-8 py-2  w-full "
            type="text"
            placeholder="Image Url"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 font-bold text-white py-3 px-6 w-fit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}