import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[35px] w-full rounded-[6px] bg-[#F5F7F9] px-3 py-[12px] text-sm xs:text-base xs:h-[40px] ring-offset-white placeholder:text-sm placeholder:text-[#8789A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-[7px] sm:text-lg sm:placeholder:text-lg md:placeholder:text-xl sm:h-[45px] md:text-xl",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
