import React from "react";

function Header() {
  return (
    // <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-lg translate-y-0">
    <div className="flex items-center justify-between py-5 px-10 md:px-20 bg-gray-100">
      <div>
        <h1>Gopi Homestay</h1>
      </div>
      <div className="flex items-center w-max gap-6">
        <h2>Home</h2>
        <h2>Rooms</h2>
        <h2>Gallery</h2>
        <h2>Reviews</h2>
        <h2>Contact</h2>
      </div>
    </div>
    // </div>
  );
}

export default Header;
