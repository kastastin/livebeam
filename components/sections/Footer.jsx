const Footer = () => {
  return (
    <footer className="py-[50px] pl-[35px] xl:py-[100px]">
      <div className="container md:px-[64px] xl:px-[100px]">
        <ul className="flex flex-col gap-y-[30px] xs:flex-row xs:flex-wrap md:gap-y-[50px] lg:justify-center xl:justify-between">
          <li>
            <div className="flex flex-col gap-y-[8px] md:gap-y-[15px]">
              <a
                href="mailto:support@gmail.com"
                className="xs:text-lg md:text-xl"
              >
                support@gmail.com
              </a>
              <span className="cursor-pointer md:text-xl">Unsubscribe</span>
            </div>
          </li>

          <li className="xl:order-4">
            <h4>Legal terms</h4>

            <div className="flex flex-col gap-y-[8px] md:gap-y-[15px]">
              <span className="cursor-pointer md:text-xl">Terms of Use</span>
              <span className="cursor-pointer md:text-xl">
                Diclosures&Disclaimers
              </span>
            </div>
          </li>

          <li className="xl:order-3">
            <h4>Privacy info</h4>

            <div className="flex flex-col gap-y-[8px] md:gap-y-[15px]">
              <span className="cursor-pointer md:text-xl">Privacy Policy</span>
              <span className="cursor-pointer md:text-xl">Cookie Policy</span>
            </div>
          </li>

          <li className="">
            <h4>About</h4>
            <span className="w-max cursor-pointer md:text-xl">About Us</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
