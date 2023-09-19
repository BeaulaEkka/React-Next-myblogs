import { traveldata } from "@/lib/traveldata";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-[80%] mx-auto mt-11">
      <div className="mb-5">
        <h1 className="font-freehand text-5xl">Travel Essentials</h1>
        <p className="mt-5">
          There are some of the must have items in your travel bag. You can buy
          it here by clicking on it. It will take you to an external site.
        </p>
      </div>
      <div className=" flex flex-col gap-5 rounded-md md:flex-row  mx-auto">
        {traveldata.map((data) => (
          <div
            className=" w-full  mb-12 border border-gray-200 rounded-lg overflow-hidden"
            key={data.id}
          >
            <div>
              <Image
                src={data.image}
                alt={data.name}
                width={250}
                height={350}
                className="w-full h-[25rem] object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold py-5 px-5">{data.name}</h1>
              <div className="p-5 text-gray-400 ">{data.description}</div>
            </div>{" "}
            <div className="flex justify-center mb-8">
              <Link href="#"></Link>
              <button className="bg-cyan-400 after: hover:bg-cyan-500 text-white px-5 py-2 rounded-md">
                Buy it here
              </button>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
