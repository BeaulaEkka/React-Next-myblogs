import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";
import styles from "../app/styles/topicslist.module.css";
import moment from "moment";
import { getServerSession } from "next-auth";
import ScrollToTop from "./ScrollToTop";

const getTopics = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    throw error;
  }
};

export default async function TopicsList() {
  const session = await getServerSession();
  try {
    const { topics } = await getTopics();

    return (
      <div className=" w-[90%] md:w-[60%]  flex-col  mx-auto " id="blogs">
        <h1 className=" first-line:tracking-widest font-bold uppercase text-5xl my-5 mx-auto text-center pt-12">
          Blogs
        </h1>
        <p
          className=" 
  first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
        >
          Embark on a Journey with my Travel Chronicles at Birdie-My Travel Blog
          Welcome to a world where every page turns into an adventure, every
          destination unfolds a story, and every experience becomes a cherished
          memory. At Birdie-My Travel Blog, I don&apos;t just write travel
          blogs; I craft gateways to inspiration, offering a kaleidoscope of
          narratives that beckon you to explore, learn, and immerse yourself in
          the beauty of the world. Inspiration at Every Turn My travel blogs are
          more than just accounts of places; they&apos;re a symphony of
          inspiration. Whether you&apos;re a seasoned traveler seeking your next
          escapade or someone contemplating their maiden voyage, my stories
          resonate with the wanderlust within you. Picture azure waters, ancient
          alleyways, bustling markets, and serene landscapes – my words paint
          vivid pictures, inviting you to dream and plan your next great
          adventure. Local Flavor Unveiled I don&apos;t just scratch the
          surface; I delve deep into the heart of each destination. My travel
          blogs are your personal tour guides, introducing you to the soul of a
          place through the eyes of a traveler.
        </p>{" "}
        <p
          className="mt-5  first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
        >
          {" "}
          I believe in empowering every traveler with practical tips and
          insights. From the must-try local delicacies to off-the-beaten-path
          adventures, my blogs provide a roadmap for your exploration. Discover
          the dos and don&apos;ts, the hidden trails, and the secrets that turn
          a good trip into an unforgettable one. Connect with me on the Road
          Less Traveled Join me on this odyssey of discovery. Let my travel
          blogs at Birdie-My Travel Blog be your compass, guiding you through
          the diverse landscapes, rich cultures, and untold stories that the
          world has to offer. Whether you&apos;re seeking adrenaline-pumping
          adventures or tranquil retreats, I&apos;ve got you covered. So, fasten
          your seatbelt and get ready for a journey where each blog at Birdie-My
          Travel Blog is a passport to a new adventure. Let the wanderlust
          begin!
        </p>
        <div className="flex flex-col-reverse">
          {topics &&
            topics.map((t) => (
              <div
                key={t._id}
                className="p-4 border border-gray-100 my-3 flex flex-col justify-between gap-5 items-start rounded-md"
              >
                <div className="w-full h-full relative  bg-white">
                  <Image
                    src={t.picture}
                    width={600}
                    height={500}
                    alt={t.title}
                    style={{
                      WebkitMaskImage: "url(/images/paintbrush.png)",
                      maskImage: "url(/images/paintbrush.png)",
                      objectFit: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "cover",
                      maskSize: "cover",
                      maskPosition: "bottom",
                    }}
                    className="w-full h-full object-cover object-bottom  bg-gray-300"
                  />
                  <h1 className="text-3xl md:text-8xl text-white mb-5 font-freehand absolute right-5 md:right-14 top-8 md:top-24">
                    {t.title}
                  </h1>

                  <div className="w-full md:w-[90%] mx-auto">
                    <div className="text-gray-500 py-2 flex flex-rows ">
                      <p className="capitalize">{t.title}&nbsp;&nbsp;</p>

                      <p>
                        {" "}
                        {moment(t.createdAt).format(" DD MMM YYYY")}
                        &nbsp;/&nbsp;Birdie&nbsp;-&nbsp;My Travel Blogspot
                      </p>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: t.description }}
                      className={styles.topiclist}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-8 justify-center mt-5 mb-5 ">
                  {session && (
                    <div className="flex flex-row gap-5 justify-center">
                      <RemoveBtn id={t._id} />
                      <Link href={`/editTopic/${t._id}`}>
                        <button className="px-8 py-2 bg-green-500 hover:bg-green-700 rounded text-white font-bold">
                          Edit
                        </button>
                      </Link>
                    </div>
                  )}{" "}
                  <ScrollToTop />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error in TopicsList: ", error);
    return <div>Error loading topics. Please try again later.</div>;
  }
}
