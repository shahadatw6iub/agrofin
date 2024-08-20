import HeroText from "@/components/HeroText";
import { Services } from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-[50vh]"> {/* 50% of the viewport height */}
        <Image
          src="/images/hero.gif"
          className="object-cover"
          layout="fill"
          alt="Hero GIF"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <HeroText />
        </div>
      </div>


      {/* Services Section */}
      <div>
        <Services />
      </div>
    </main>
  );
}
