const Footer = () => {
  return (
    <footer className="py-[50px] pl-[35px]">
      <ul className="space-y-[30px]">
        <li>
          <div className="flex flex-col gap-y-[8px]">
            <span>support@gmail.com</span>
            <span>Unsubscribe</span>
          </div>
        </li>

        <li>
          <h4 className="mb-[12px] font-bold">Legal terms</h4>

          <div className="flex flex-col gap-y-[8px]">
            <span>Terms of Use</span>
            <span>Diclosures&Disclaimers</span>
          </div>
        </li>

        <li>
          <h4 className="mb-[12px] font-bold">Privacy info</h4>

          <div className="flex flex-col gap-y-[8px]">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </li>

        <li>
          <h4 className="mb-[12px] font-bold">About</h4>
          <span>About Us</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
