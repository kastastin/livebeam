const FormToggler = ({ type, onClickLogin, onClickSignup }) => {
  return (
    <div className="flex justify-center gap-x-[6px] md:gap-[10px]">
      <div
        className={`mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA] ${type === "signup" ? "opacity-100" : "opacity-20"} md:!h-[5px] md:!w-[30px]`}
        onClick={onClickSignup}
      />

      <div
        className={`mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA] ${type === "login" ? "opacity-100" : "opacity-20"} md:!h-[5px] md:!w-[30px]`}
        onClick={onClickLogin}
      />
    </div>
  );
};

export default FormToggler;
