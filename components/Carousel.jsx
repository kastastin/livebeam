"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

const Carousel = ({containerStyles, delay, children}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay }),
    ClassNames(),
  ]);

  return (
    <div className={`embla z-10 ${containerStyles}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
