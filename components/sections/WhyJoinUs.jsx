import Image from "next/image";

import Carousel from "@/components/Carousel";

const slidesData = [
  {
    icon: "/assets/chatFree.svg",
    alt: "Free chat",
    title: "Chat with attractive streamers for free",
    description:
      "It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!",
  },
  {
    icon: "/assets/verifiedUsers.svg",
    alt: "Verified users",
    title: "Only verified users",
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
    <>
      {/* >=1280 */}
      <section className="relative my-[150px] max-xl:hidden">
        <div className="container px-[100px]">
          <h3 className="title mb-[50px] text-center">Why join us?</h3>

          <div className="grid grid-cols-3 grid-rows-[repeat(2,300px)] gap-[50px]">
            <div className="flex flex-col items-center justify-center gap-y-[10px] rounded-[60px] bg-white shadow-card">
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src={slidesData[0].icon}
                  alt={slidesData[0].alt}
                  width={24}
                  height={24}
                  className="md:size-[40px]"
                />

                <span className="text-2xl font-bold">
                  {slidesData[0].title}
                </span>
              </div>

              <p className="w-4/5 text-base">{slidesData[0].description}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-[10px] rounded-[60px] bg-white shadow-card">
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src={slidesData[1].icon}
                  alt={slidesData[1].alt}
                  width={24}
                  height={24}
                  className="md:size-[40px]"
                />

                <span className="text-2xl font-bold">
                  {slidesData[1].title}
                </span>
              </div>

              <p className="w-4/5 text-base">{slidesData[1].description}</p>
            </div>

            <div className="col-start-2 row-start-2 flex flex-col items-center justify-center gap-y-[10px] rounded-[60px] bg-white shadow-card">
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src={slidesData[2].icon}
                  alt={slidesData[2].alt}
                  width={24}
                  height={24}
                  className="md:size-[40px]"
                />

                <span className="text-2xl font-bold">
                  {slidesData[2].title}
                </span>
              </div>

              <p className="w-4/5 text-base">{slidesData[2].description}</p>
            </div>

            <div className="col-start-3 row-start-2 flex flex-col items-center justify-center gap-y-[10px] rounded-[60px] bg-white shadow-card">
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src={slidesData[3].icon}
                  alt={slidesData[3].alt}
                  width={24}
                  height={24}
                  className="md:size-[40px]"
                />

                <span className="text-2xl font-bold">
                  {slidesData[3].title}
                </span>
              </div>

              <p className="w-4/5 text-base">{slidesData[3].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <1280 */}
      <section className="relative overflow-hidden py-[60px] md:py-[90px] xl:hidden">
        <div className="container xs:px-12 md:px-[64px] lg:px-[80px] xl:px-[100px]">
          <h3 className="title text-center md:mb-[40px]">Why join us?</h3>

          {/* Card + photo carousel */}
          <Carousel delay={4000} className="w-full">
            {slidesData.map((slide, index) => (
              <div key={slide.alt} className="embla__slide pt-[30px]">
                <div className="mx-auto flex flex-col gap-y-[15px] rounded-[20px] bg-white px-[25px] py-[30px] shadow-card xs:px-[35px] sm:px-[50px] md:gap-y-[30px] md:px-[80px]">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-x-[10px] md:gap-x-[40]">
                    <Image
                      src={slide.icon}
                      alt={slide.alt}
                      width={24}
                      height={24}
                      className="md:size-[40px]"
                    />

                    <span className="text-lg font-bold xs:text-xl md:text-3xl">
                      {slide.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p>{slide.description}</p>
                </div>

                <Image
                  src={`/assets/women/join/${index || slidesData.length}.jpg`}
                  alt="Woman"
                  height={305}
                  width={280}
                  className="mx-auto mt-[60px] !h-auto !w-full rounded-[20px]"
                />
              </div>
            ))}
          </Carousel>

          <Image
            src="/assets/circle.svg"
            alt="Circle"
            fill
            className="-z-10 translate-y-[10px] scale-105"
          />
        </div>
      </section>
    </>
  );
};

export default WhyJoinUs;
