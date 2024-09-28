import Button from "@/components/Button";

const About = () => {
  return (
    <section className="relative mt-[60px] md:mt-[90px] xl:mt-0">
      <div className="container xs:px-12 md:px-[64px] lg:px-[80px] xl:px-[100px]">
        <div className="mx-auto flex w-full flex-col items-center rounded-[60px] bg-white px-[15px] py-[40px] shadow-card xs:px-[40px] md:px-[80px] xl:px-[300px] xl:py-[60px]">
          <h3 className="title md:mb-[20px] xl:mb-0">About</h3>

          <p className="mt-[15px] text-center xl:my-[40px]">
            It’s a global streaming platform for communication and meeting
            incredibly beautiful people. We created an excellent place where you
            can enjoy your time and find appropriate matches at first.
            <br />
            <br />
            Approximately 80% of our users have already found their lovelies.
            Watch streams without hindrance and meet someone who interests you.
          </p>

          <Button
            text="Join for free"
            isScrolled
            otherStyles="w-[250px] mt-[40px] xl:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
