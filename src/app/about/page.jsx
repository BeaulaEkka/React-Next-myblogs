import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="-z-10 w-[80%] mx-auto min-h-screen mb-20 mt-[11rem]">
      <div className="w-full h-[30rem] p-3  ">
        <div className="relative h-full bg-no-repeat">
          <Image
            src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
            width={1000}
            height={500}
            alt="author"
            className="w-full h-full object-cover object-bottom "
            style={{
              WebkitMaskImage: "url(/images/paintbrush.png)",
              maskImage: "url(/images/paintbrush.png)",
              objectFit: "cover",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              maskPosition: "top",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="mt-12  mx-auto md:w-[80%] ">
        <h1 className="text-6xl font-normal font-freehand text-gray-400">
          {" "}
          Hi ! I am Anna, and I write about travelling !
        </h1>
        <h3 className="text-2xl  mt-5 mx-auto font-light">
          &quot;If there&apos;s one thing that defines the essence of my
          wanderlust, it&apos;s the incredible journey I&apos;ve embarked on as
          a modern-day explorer. My passport reads like a thrilling novel of
          global adventures. With a heart that beats for adventure and an
          insatiable curiosity for new horizons, I&apos;ve had the privilege of
          traveling the world and chronicling my experiences one blog post at a
          time. &quot;
        </h3>
        <div className=" mt-5">
          <p className="mt-3">
            But my story is not just about visiting famous landmarks and
            snapping enviable Instagram photos (though there&apos;s plenty of
            that). It&apos;s about the transformative power of travel, the deep
            connections I&aposve formed with people from all walks of life, and
            the profound impact of exploring the world&apos;s diverse cultures
            and landscapes.
          </p>

          <p className="mt-3">
            From the bustling streets of Tokyo to the serene temples of Bhutan,
            from the mystical deserts of Morocco to the lush rainforests of
            Costa Rica, I&apos;ve left no stone unturned in my quest to uncover
            the hidden gems of our planet. With each new destination, I&apos;ve
            absorbed the local flavors, delved into the history, and captured
            the beauty of the world through my unique lens.
          </p>

          <p className="mt-3">
            But my storytelling prowess goes beyond the visuals. Through my
            words, I paint vivid narratives of encounters with locals, share
            tips for fellow travelers, and delve into the universal themes of
            human connection, personal growth, and the transformative power of
            stepping outside one&apos;s comfort zone.
          </p>

          <p className="mt-3">
            Join me as we embark on a virtual journey, exploring the
            world&apos;s wonders, unraveling its mysteries, and finding
            inspiration in the tales of a modern-day nomad. Whether you&apos;re
            a seasoned traveler seeking new destinations to add to your bucket
            list or an armchair explorer looking for a captivating escape, my
            blog is your portal to a world of adventure and discovery.
          </p>

          <p className="mt-3">
            So, fasten your seatbelts, dear readers, and get ready to traverse
            the globe through my eyes. Adventure awaits, and I am your trusted
            guide to the extraordinary stories that lie beyond the horizon.
          </p>
        </div>
      </div>
    </div>
  );
}
