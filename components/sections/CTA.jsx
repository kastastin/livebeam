import Image from "next/image";

import Button from "@/components/Button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden max-xl:hidden">
      <div className="container mx-[100px] flex justify-between gap-20 2xl:mx-auto">
        {/* Left text */}
        <div className="mt-[20dvh]">
          <h1 className="mb-[40px] w-[535px] text-5xl font-bold">
            It’s a dedicated space for your bold fantasies!
          </h1>

          <p className="w-[480px] text-xl">
            Hundreds of attractive admirers are already waiting for you here.
            Don’t delay – dive into the world of streaming, flirting and hot
            communication right now!
          </p>

          <Button text="Write to her" otherStyles="mt-[35px] w-[300px] mx-0" />
        </div>

        {/* Right image */}
        <div>
          <Image
            src="/assets/phone-hand.png"
            alt="Phone"
            width={750}
            height={800}
            className="object-cover"
          />

          <Image
            src="/assets/circle.svg"
            alt="Phone"
            fill
            className="absolute !left-[200px] !top-[100px] -z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
