import { traveldata } from "@/lib/traveldata";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-[80%] mx-auto mt-[8rem]">
      <div className="mb-5">
        <h1 className="font-bold text-5xl">Travel Essentials</h1>
        <p className="mt-5">
          There are some of the must-have items in your travel bag. You can buy
          them here by clicking on them. It will take you to an external site.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {traveldata.map((data) => (
          <div
            className="w-full mb-12 border border-gray-200 rounded-lg overflow-hidden flex flex-col"
            key={data.id}
          >
            <div>
              <Image
                src={data.image}
                alt={data.name}
                width={250}
                height={650}
                className="w-full h-[25rem] object-cover"
              />
            </div>
            <div className=" flex-grow">
              <h1 className="text-3xl font-bold py-5 px-5">{data.name}</h1>
              <div className="p-5 text-gray-400">{data.description}</div>
            </div>
            <div className="flex justify-center mb-8 ">
              <Link href="#"></Link>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 rounded-md">
                Buy it here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
