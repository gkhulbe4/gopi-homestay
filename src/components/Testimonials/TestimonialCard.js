import React from "react";
import { Star, User } from "lucide-react";

function TestimonialCard({ name, stars, review }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between text-left w-full hover:scale-105 transition-all">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 uppercase">
            <User />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <div className="flex gap-1">
              {Array.from({ length: stars }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-3 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{review}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
