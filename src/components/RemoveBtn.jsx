"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    const apiUrl = process.env.API_URL || "http://localhost:3000";

    if (confirmed) {
      const res = await fetch(`${apiUrl}/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="bg-red-500 hover:bg-red-600 py-2 px-5  rounded-md font-semibold text-white"
    >
      Delete
    </button>
  );
}
