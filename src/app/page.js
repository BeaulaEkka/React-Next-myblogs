import TopicsList from "@/components/TopicsList";
import { Video } from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <div className=" w-full h-[900px]">
        <Video />
      </div>
      <main className="flex min-h-screen flex-col-reverse items-center w-full mx-auto mb-5">
        <div className="bg-white  w-full z-50">
          <TopicsList />
        </div>
      </main>
    </div>
  );
}
