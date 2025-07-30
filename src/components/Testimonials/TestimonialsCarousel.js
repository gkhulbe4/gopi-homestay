import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import testimonials from "@/lib/data/testimonials";
import TestimonialCard from "./TestimonialCard";

function TestimonialsCarousel() {
  return (
    <div className="relative w-full">
      <Carousel className="w-full bg-gray-50">
        <CarouselContent className="px-10 py-5">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 px-2"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 sm:-left-6" />
        <CarouselNext className="-right-4 sm:-right-6" />
      </Carousel>
    </div>
  );
}

export default TestimonialsCarousel;
