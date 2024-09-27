const Button = ({ text, otherStyles }) => {
  return (
    <button
      type="button"
      className={`mx-auto flex h-[60px] items-center justify-center rounded-btn bg-btn-gradient text-xl font-bold text-white shadow-btn transition-all duration-300 ease-out hover:brightness-110 ${otherStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
