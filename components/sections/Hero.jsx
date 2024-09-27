import Image from "next/image";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import TitleWrapper from "@/components/TitleWrapper";
import SignupForm from "@/components/forms/SignupForm";

const Hero = () => {
  return (
    <section className="overflow-hidden pt-[90px]">
      <TitleWrapper
        title="It’s a hot place for your streaming fantasy."
        description="It’s a free space for watching streams and chatting with alluring people."
      />

      {/* TODO: change after 768px */}
      <div className="relative overflow-hidden">
        <div className="h-[100vw]">
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
        otherStyles="relative -translate-y-full w-[280px]"
      />

      <TitleWrapper
        title="It’s a dedicated space for your bold fantasies!"
        description="Hundreds of attractive admirers are already waiting for you here. Don’t delay – dive into the world of streaming, flirting and hot communication right now!"
        titleStyles="mt-0"
      />

      {/* Form */}
      <div className="mx-auto mt-[40px] w-[280px] rounded-card bg-white px-[35px] py-[23px] shadow-card">
        <SignupForm />
      </div>

      <Carousel containerStyles="mt-[60px]" delay={3000}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="embla__slide">
            <Image
              src={`/assets/women/main/${index}.png`}
              alt="Woman"
              width={280}
              height={280}
              className="rounded-card object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
