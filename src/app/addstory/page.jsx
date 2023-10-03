"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const QuillEditor =
  typeof window === "object" ? require("react-quill") : () => false;

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const router = useRouter();

  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  };

  const isValidURL = (url) => {
    try {
      const parsedUrl = new URL(url);
      const allowedDomains = ["pexels.com", "unsplash.com"]; // Add more allowed domains as needed

      // Check if the hostname is in the allowedDomains array or if it's pexels.com subdomain
      if (
        !allowedDomains.some((domain) => parsedUrl.hostname.endsWith(domain))
      ) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!title || !description) {
      alert("Title, Picture and description are required.");
      return;
    }

    if (picture && !isValidURL(picture)) {
      alert("Invalid Image URL. Please provide a valid URL or leave it blank.");
      return;
    }
    const pictureToSave = isValidURL(picture) ? picture : "";

    try {
      const res = await fetch(`${apiUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          picture: pictureToSave,
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
    <div className="bg-white z-0 w-[90%] md:w-[80%] mx-auto flex flex-col gap-3 mt-[8rem] mb-[8rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:w-[60%] mx-auto"
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
          <QuillEditor
            theme="snow"
            modules={modules}
            value={description}
            onChange={setDescription}
            className="h-96 mb-4 md:mb-2"
          />
        </div>

        <div className="mt-12">
          <div className="flex flex-row text-sm text-gray-400 mb-4 md:mb-2">
            <p className="select-none">Eg: </p>
            <p>
              https://images.pexels.com/photos/11387361/pexels-photo-11387361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            </p>
          </div>
          <input
            onChange={(e) => setPicture(e.target.value)}
            value={picture}
            className="border border-gray-300 px-8 py-2  w-full "
            type="text"
            placeholder="Image Url (Optional) "
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
