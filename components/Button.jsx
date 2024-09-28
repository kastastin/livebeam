"use client";

import { scrollToForm } from "@/lib/utils";
import { useEffect, useState } from "react";

const Button = ({ text, otherStyles, isScrolled }) => {
  const [isScreenBig, setIsScreenBig] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScreenBig(window.innerWidth >= 1280);
    }
  }, []);

  return (
    <button
      type="button"
      className={`mx-auto flex h-[60px] items-center justify-center rounded-btn bg-btn-gradient text-xl font-bold text-white shadow-btn transition-all duration-300 ease-out hover:brightness-110 md:h-[70px] md:text-2xl ${otherStyles}`}
      onClick={
        isScrolled
          ? (e) => {
              scrollToForm(e, isScreenBig);
            }
          : () => {}
      }
    >
      {text}
    </button>
  );
};

export default Button;
