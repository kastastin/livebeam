import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const scrollToForm = (e, isScreenBig) => {
  e.preventDefault();

  const targetElement = document.querySelector("#form");
  console.log(targetElement);
  const offset = 50;
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: isScreenBig ? 0 : offsetPosition,
    behavior: "smooth",
  });
};
