import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6b/17/ae/mountain-river-homestay.jpg?w=700&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6b/17/ae/mountain-river-homestay.jpg?w=700&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6b/17/ae/mountain-river-homestay.jpg?w=700&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6b/17/ae/mountain-river-homestay.jpg?w=700&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6b/17/ae/mountain-river-homestay.jpg?w=700&h=-1&s=1",
];

function ImagesCarousel() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Carousel className="relative">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="basis-full">
              {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
              <img className="rounded-2xl" src={img} alt="img" />
              {/* </CardContent> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>
    </div>
  );
}

export default ImagesCarousel;
