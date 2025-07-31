import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImagesCarousel from "./ImagesCarousel";
import * as Icons from "lucide-react";

export const RoomCard = ({
  title,
  description,
  price,
  images,
  amenities,
  index,
}) => {
  return (
    <Card
      key={index}
      className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <ImagesCarousel images={images} />
      <CardContent className="p-5 flex flex-col items-start justify-between gap-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-800">
          {amenities.map((amenity, idx) => {
            const Icon = Icons[amenity.icon];
            return (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-full border border-gray-200 px-2 py- bg-gray-50"
              >
                <Icon className="w-4 h-4 text-gray-700" />
                <span className="text-sm">{amenity.label}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
      <div className="absolute bottom-3 right-4">
        <p className="text-2xl font-bold text-gray-700">
          {price} <span className="text-sm text-gray-500">/ night</span>
        </p>
      </div>
    </Card>
  );
};
