"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [isClient, setIsClient] = useState(false); // State to check if the code is running on the client-side

  const router = useRouter();
  useEffect(() => {
    setIsClient(true); // Set isClient to true when the component mounts (client-side)
  }, []);

  const handleSubmit = async (e) => {
    const apiUrl = process.env.API_URL || "http://localhost:3000";
    e.preventDefault();

    if (!title || !description.trim() || !picture) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, picture }),
      });

      if (res.ok) {
        router.push("/");
      } else {
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
        <div className="h-80">
          {isClient && (
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder="Topic Description"
              className="h-80 "
            />
          )}
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
