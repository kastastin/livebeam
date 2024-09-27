import Image from "next/image";

import Carousel from "@/components/Carousel";

const slidesData = [
  {
    icon: "/assets/chatFree.svg",
    alt: "Free chat",
    title: "Only verified users",
    description:
      "It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!",
  },
  {
    icon: "/assets/verifiedUsers.svg",
    alt: "Verified users",
    title: "Chat with attractive streamers for free",
    description:
      "We care about the privacy and security of our customers. All accounts are checked so look for an attractive stranger confidently!",
  },
  {
    icon: "/assets/customizedSearch.svg",
    alt: "Customized search",
    title: "Customized search",
    description:
      "Match alluring partners for your own preferences. Maybe you will be interested in a hot slender European or shy beautiful Asian? Make your choice…",
  },
  {
    icon: "/assets/easy.svg",
    alt: "Easy to use",
    title: "Easy to use",
    description:
      "Forget about hundreds of annoying notifications and inconvenient use. We have created the platform as easy to use and search as possible. Don’t waste your time studying functionality. Just enjoy!",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="relative overflow-hidden py-[60px]">
      <h3 className="title text-center">Why join us?</h3>

      {/* Card + photo carousel */}
      <Carousel delay={4000}>
        {slidesData.map((slide, index) => (
          <div key={slide.alt} className="embla__slide pt-[30px]">
            <div className="mx-auto flex w-[280px] flex-col gap-y-[15px] rounded-card bg-white px-[25px] py-[30px] shadow-card">
              {/* Icon + Title */}
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src={slide.icon}
                  alt={slide.alt}
                  width={24}
                  height={24}
                />

                <h3 className="text-lg font-bold">{slide.title}</h3>
              </div>

              {/* Description */}
              <p>
                It’s an excellent web platform for streaming. Write messages to
                the b eautiful streamers for free and explore this magical
                universe of communication!
              </p>
            </div>

            <Image
              src={`/assets/women/join/${index || slidesData.length}.jpg`}
              alt="Woman"
              height={305}
              width={280}
              className="mx-auto mt-[60px] rounded-card"
            />
          </div>
        ))}
      </Carousel>

      <Image
        src="/assets/circle.svg"
        alt="Circle"
        fill
        className="-z-10 translate-y-[60px] scale-105"
      />
    </section>
  );
};

export default WhyJoinUs;
