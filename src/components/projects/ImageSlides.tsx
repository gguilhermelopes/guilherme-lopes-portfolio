"use client";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import DotButton from "./DotButton";

type ImageSlidesProps = {
  imageUrls: string[];
};

const ImageSlides = ({ imageUrls }: ImageSlidesProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div>
      <div className="embla mt-8" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {imageUrls?.map((url) => (
            <div className="embla__slide" key={url}>
              <Image
                className="rounded-md"
                src={`/projects/${url}`}
                alt={url}
                width={1280}
                height={863}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlides;
