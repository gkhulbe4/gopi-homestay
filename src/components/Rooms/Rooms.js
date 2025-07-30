import React from "react";
import ImagesCarousel from "./ImagesCarousel";
import RoomInfo from "./RoomInfo";

function Rooms() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-20 bg-gray-50">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl text-black font-extrabold">
          Comfortable Stays
        </h1>
        <p className="text-lg text-gray-500">
          Choose from our thoughtfully designed rooms, each offering stunning
          views and modern amenities
        </p>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
          <RoomInfo
            title="Suite"
            size="2 Beds"
            price="500"
            description="A luxurious suite with a private balcony, stunning views, and modern amenities"
            amenities={[
              "Private balcony",
              "Stunning views",
              "Modern amenities",
              "Spacious living area",
            ]}
          />
          <ImagesCarousel />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
          <ImagesCarousel />
          <RoomInfo
            title="Suite"
            size="2 Beds"
            price="500"
            description="A luxurious suite with a private balcony, stunning views, and modern amenities"
            amenities={[
              "Private balcony",
              "Stunning views",
              "Modern amenities",
              "Spacious living area",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
          <RoomInfo
            title="Suite"
            size="2 Beds"
            price="500"
            description="A luxurious suite with a private balcony, stunning views, and modern amenities"
            amenities={[
              "Private balcony",
              "Stunning views",
              "Modern amenities",
              "Spacious living area",
            ]}
          />
          <ImagesCarousel />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
