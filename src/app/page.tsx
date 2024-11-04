
import { AtractionsList } from "@/components/AtractionsList/AtractionsList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <AtractionsList />
      </main>
    </div>
  );
}
