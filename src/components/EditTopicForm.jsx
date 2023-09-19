"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Freehand } from "next/font/google";

export default function EditTopicForm({ title, description, picture, id }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPicture, setNewPicture] = useState(picture);

  const handleSubmit = async (e) => {
    const apiUrl = process.env.API_URL || "http://localhost:3000";
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newPicture }),
      });

      if (!res.ok) {
        throw new Error("failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center justify-center w-1/2 mt-5 mx-auto"
      >
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Topic Title"
          className="border border-slate-300 mt-5 p-4 w-full mx-auto flex flex-center"
        />
        <div className="w-full h-96">
          {" "}
          <ReactQuill
            theme="snow"
            value={newDescription}
            onChange={setNewDescription}
            placeholder="Topic Description"
            className="h-80"
            modules={{
              toolbar: {
                container: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image", "video"],
                  ["clean"],
                ],
              },
            }}
            formats={[
              "header",
              "font",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "link",
              "image",
              "video",
            ]}
          />
        </div>
        <input
          onChange={(e) => setNewPicture(e.target.value)}
          value={newPicture}
          type="text"
          placeholder="Image Link"
          className="w-full  border border-slate-300  p-4  mx-auto flex flex-center"
        />
        <button className="font-bold bg-cyan-500 w-fit text-white px-6 py-3 rounded-md mt-5">
          Update Topic
        </button>
      </form>
    </div>
  );
}
