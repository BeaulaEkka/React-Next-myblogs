"use client";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    // const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`api/topics?id=${id}`, {
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
