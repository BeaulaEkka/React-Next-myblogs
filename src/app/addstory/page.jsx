"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Quill, Toolbar } from "react-quill";
// import dynamic from "next/dynamic";

// const QuillEditor = dynamic(() => import("react-quill"), {
//   ssr: false,
// });

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const router = useRouter();

  // const modules = {
  //   toolbar: [
  //     [{ header: 1 }, { header: 2 }],
  //     ["bold", "italic", "underline", "strike"],
  //     [{ color: [] }, { background: [] }],
  //     [{ align: [] }],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link", "image"],
  //     [{ script: "sub" }, { script: "super" }],
  //     [{ indent: "-1" }, { indent: "+1" }],
  //     ["clean"],
  //   ],
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!title || !description) {
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

        {/* <div className="w-full">
          <QuillEditor
            theme="snow"
            modules={modules}
            value={description}
            onChange={setDescription}
            className="h-96"
          />
        </div> */}

        <div className="mt-12">
          <div className="flex flex-row text-sm text-gray-400 mb-2">
            <p className="select-none">Eg:</p>
            <p>
              https://images.pexels.com/photos/11387361/pexels-photo-11387361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            </p>
          </div>
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
