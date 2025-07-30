import React from "react";

function RoomInfo({ title, size, price, description, amenities = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 max-w-full mx-auto flex flex-col justify-between h-full p-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
          {amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-end justify-between mt-auto">
        <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
          {size}
        </span>
        <span className="text-2xl font-bold text-green-700">
          ₹{price} per night
        </span>
      </div>
    </div>
  );
}

export default RoomInfo;
