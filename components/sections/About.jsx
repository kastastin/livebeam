import Button from "@/components/Button";

const About = () => {
  return (
    <section className="mt-[60px]">
      <div className="mx-auto flex w-[280px] flex-col items-center rounded-card bg-white px-[15px] py-[40px] shadow-card">
        <h3 className="title">About</h3>

        <p className="mt-[15px] text-center">
          It’s a global streaming platform for communication and meeting
          incredibly beautiful people. We created an excellent place where you
          can enjoy your time and find appropriate matches at first.
          <br />
          <br />
          Approximately 80% of our users have already found their lovelies.
          Watch streams without hindrance and meet someone who interests you.
        </p>

        <Button text="Join for free" otherStyles="w-[250px] mt-[40px]" />
      </div>
    </section>
  );
};

export default About;
