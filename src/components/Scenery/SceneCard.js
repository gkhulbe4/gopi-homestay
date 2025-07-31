import Image from "next/image";
import React from "react";

function SceneCard({ img }) {
  return (
    <a className="group relative block bg-black">
      <Image
        alt="Spacious double bed room with mountain view at Gopi Homestay"
        src={img}
        fill
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        sizes="100vw"
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores quibusdam quidem voluptates doloremque
              reiciendis nostrum harum. Repudiandae?
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default SceneCard;
