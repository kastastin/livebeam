import Image from "next/image";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import TitleWrapper from "@/components/TitleWrapper";
import SignupForm from "@/components/forms/SignupForm";

const Hero = () => {
  return (
    <>
      {/* >=1280 */}
      <section className="py-[75px] max-xl:hidden">
        <div className="container flex justify-between gap-20 px-[100px]">
          {/* Left part (text) */}
          <div className="mt-[20dvh]">
            <h1 className="mb-[40px] w-[535px] text-5xl font-bold">
              It’s a hot place for your streaming fantasy.
            </h1>

            <p className="w-[410px] text-2xl">
              It’s a free space for watching streams and chatting with alluring
              people.
            </p>
          </div>

          {/* Right part (form) */}
          <div className="w-[500px] rounded-[60px] bg-white px-[60px] py-[40px] shadow-card">
            <SignupForm />
          </div>
        </div>

        <Carousel containerStyles="mt-[75px]" delay={3000}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="embla__slide">
              <Image
                src={`/assets/women/main/${index}.png`}
                alt="Woman"
                width={280}
                height={280}
                className="h-auto w-full rounded-[20px] object-cover xl:rounded-[40px]"
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* <1280 */}
      <section className="overflow-hidden pt-[90px] xl:hidden">
        <div className="container xs:px-12 md:px-[64px] lg:px-[80px]">
          <h1 className="title text-center xs:mx-auto xs:w-[60vw]">
            It’s a hot place for your streaming fantasy.
          </h1>
          <p className="mt-[20px] text-center xs:mx-auto xs:w-[60vw] md:mt-[40px] lg:mt-[20px]">
            It’s a free space for watching streams and chatting with alluring
            people.
          </p>

          <div className="relative -mx-6 overflow-hidden xs:mx-[-96px]">
            <div className="h-[100vw] sm:h-[50vh]">
              <Image
                src="/assets/phone-hand.png"
                alt="Phone"
                fill
                className="translate-x-[30px] object-contain"
              />
            </div>

            <Image
              src="/assets/circle.svg"
              alt="Circle"
              fill
              className="-z-10 translate-y-[130px] scale-[1.35]"
            />
          </div>

          <Button
            text="Sign up now"
            isScrolled
            otherStyles="relative -translate-y-full w-full xs:w-[60%] md:h-[60px]"
          />

          <TitleWrapper
            title="It’s a dedicated space for your bold fantasies!"
            description="Hundreds of attractive admirers are already waiting for you here. Don’t delay – dive into the world of streaming, flirting and hot communication right now!"
            titleStyles="!mt-0"
            containerStyles="md:!mt-0"
          />

          {/* Form */}
          <div
            id="form"
            className="mx-auto mt-[40px] w-full rounded-[20px] bg-white px-[35px] py-[23px] shadow-card xs:px-[50px] sm:w-3/5 md:mt-[75px] md:w-[60vw] md:px-[80px] md:pt-[40px] lg:w-[50vw] lg:px-[60px]"
          >
            <SignupForm />
          </div>

          <Carousel containerStyles="mt-[60px] md:mt-[75px]" delay={3000}>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="embla__slide">
                <Image
                  src={`/assets/women/main/${index}.png`}
                  alt="Woman"
                  width={280}
                  height={280}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
