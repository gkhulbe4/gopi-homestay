import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ImagesCarousel({ images = [], alt = "Gopi Homestay room" }) {
  return (
    <Carousel className="group/carousel w-full" opts={{ loop: true }}>
      <CarouselContent className="ml-0">
        {images.map((img, index) => (
          <CarouselItem key={index} className="basis-full pl-0">
            <img
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/carousel:scale-[1.03]"
              src={img}
              alt={`${alt} — photo ${index + 1}`}
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-3 size-9 rounded-none border-none bg-paper/95 text-ink opacity-0 shadow-none transition-opacity hover:bg-paper group-hover/carousel:opacity-100" />
          <CarouselNext className="right-3 size-9 rounded-none border-none bg-paper/95 text-ink opacity-0 shadow-none transition-opacity hover:bg-paper group-hover/carousel:opacity-100" />
        </>
      )}
    </Carousel>
  );
}

export default ImagesCarousel;
