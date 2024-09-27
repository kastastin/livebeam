import Image from "next/image";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import TitleWrapper from "@/components/TitleWrapper";

const data = [
  {
    icon: "/assets/findList/computer.svg",
    alt: "Computer",
    title: "Watching streams of everyone you really like;",
  },
  {
    icon: "/assets/findList/princess.svg",
    alt: "Princess",
    title: "Free communication with pretty streamers;",
  },
  {
    icon: "/assets/findList/connection.svg",
    alt: "Connection",
    title: "Sweet connection with people you match;",
  },
  {
    icon: "/assets/findList/similarInterests.svg",
    alt: "Similar interests",
    title: "New acquaintances with someone who has similar interests;",
  },
  {
    icon: "/assets/findList/hobbies.svg",
    alt: "Hobbies",
    title:
      "Fascinating hobbies and exciting occupations from people you fancy.",
  },
];

const FindHere = () => {
  return (
    <section className="relative overflow-hidden py-[60px]">
      <h3 className="title mb-[30px] text-center">Here you can find</h3>

      <ul className="mx-auto w-[280px] space-y-5">
        {data.map((item) => (
          <li
            key={item.alt}
            className="mx-auto flex w-full flex-col items-center gap-y-[15px] rounded-card bg-white px-[30px] py-[35px] shadow-card"
          >
            <Image src={item.icon} alt={item.alt} width={36} height={36} />
            <span className="text-center">{item.title}</span>
          </li>
        ))}
      </ul>

      <TitleWrapper
        title="It’s a universe of communication and streaming without borders!"
        description="Let yourself to be free – share your thoughts, delight, and fears with beautiful strangers!"
      />

      <Carousel containerStyles="mt-[30px]" delay={3000}>
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={index} className="embla__slide">
            <Image
              src={`/assets/women/universe/${index}.jpg`}
              alt="Woman"
              width={280}
              height={305}
              className="rounded-card object-contain"
            />
          </div>
        ))}
      </Carousel>

      <Button text="Join us for free" otherStyles="w-[280px] mt-[30px]" />

      <Image
        src="/assets/circle.svg"
        alt="Circle"
        fill
        className="absolute bottom-0 -z-10 translate-y-[800px] scale-105 opacity-50"
      />
    </section>
  );
};

export default FindHere;
