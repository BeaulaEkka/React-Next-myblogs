import TopicsList from "@/components/TopicsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col-reverse items-center w-[80%] mx-auto mb-5">
      <TopicsList />
    </main>
  );
}
