import React from "react";
import rooms from "@/lib/data/roomsData";
import { RoomCard } from "./RoomCard";

function Rooms() {
  return (
    <section
      id="rooms"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-20 bg-gray-50"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl text-black font-extrabold">
          Comfortable Stays
        </h1>
        <p className="text-lg text-center text-gray-500">
          Choose from our thoughtfully designed rooms, each offering stunning
          views and modern amenities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Rooms;
