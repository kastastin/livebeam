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
    <section className="relative overflow-hidden pb-[60px] md:pb-[90px]">
      <div className="container lg:px-[80px] xl:px-[100px]">
        <h3 className="title mb-[30px] text-center md:mb-[50px]">
          Here you can find
        </h3>

        <ul className="mx-auto w-[280px] space-y-5 sm:w-[50vw] sm:space-y-10 md:space-y-14 lg:flex lg:w-full lg:flex-wrap lg:justify-center lg:gap-5 lg:space-y-0 xl:w-[800px] xl:flex-col xl:flex-nowrap xl:items-center">
          {data.map((item) => (
            <li
              key={item.alt}
              className="mx-auto flex w-full flex-col items-center gap-y-[15px] rounded-[20px] bg-white px-[30px] py-[35px] shadow-card md:gap-y-[25px] lg:mx-0 lg:w-[30vw] lg:items-center xl:w-full xl:flex-row xl:gap-x-5 xl:px-[100px]"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={36}
                height={36}
                className="md:size-[45px]"
              />
              <span className="text-center xl:text-left">{item.title}</span>
            </li>
          ))}
        </ul>

        <TitleWrapper
          title="It’s a universe of communication and streaming without borders!"
          description="Let yourself to be free – share your thoughts, delight, and fears with beautiful strangers!"
          titleStyles="xl:mt-[150px] xl:text-center"
          descriptionStyles="xl:w-[500px] xl:mx-auto"
        />

        <Carousel
          containerStyles="mt-[30px] md:mt-[50px] xl:mx-[-100px] 2xl:mx-[-300px]"
          delay={3000}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div key={index} className="embla__slide">
              <Image
                src={`/assets/women/universe/${index}.jpg`}
                alt="Woman"
                width={280}
                height={305}
                className="h-auto w-full rounded-[20px] object-contain"
              />
            </div>
          ))}
        </Carousel>

        <Button
          text="Join us for free"
          isScrolled
          otherStyles="w-[280px] mt-[30px] md:mt-[50px]"
        />

        <Image
          src="/assets/circle.svg"
          alt="Circle"
          fill
          className="absolute bottom-0 -z-10 translate-y-[800px] scale-105 opacity-50 xl:hidden"
        />
      </div>
    </section>
  );
};

export default FindHere;
