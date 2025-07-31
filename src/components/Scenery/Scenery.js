import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SceneryTab from "./SceneryTab";

function Scenery() {
  return (
    <section
      id="gallery"
      className="flex flex-col gap-10 items-center justify-center py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white w-full"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-extrabold">
          Wake Up to Nature – Explore the Scenic Beauty
        </h1>
        <p className="text-base sm:text-lg text-gray-500">
          Located amidst dense pine forests, misty mornings, and riverside
          trails, Gopi Homestay brings you face-to-face with the unspoiled
          beauty of Uttarakhand. Here's a glimpse of what your mornings might
          look like.
        </p>
      </div>

      <Tabs defaultValue="Mornings" className="w-full">
        <TabsList className="w-full flex flex-wrap flex-col sm:flex-row justify-center gap-2 shadow-xl rounded-md md:rounded-full bg-gray-100 h-max px-4 py-2">
          {["Mornings", "Bonfires", "Trials", "Local Life"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="p-2 text-sm md:text-base w-full sm:w-auto font-semibold rounded-full transition-colors duration-200 hover:bg-gray-200 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="Mornings" className="mt-4">
          <SceneryTab
            imgs={[
              "/images/gallery/mornings/mountain2.jpeg",
              "/images/gallery/mornings/mountain1.jpeg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
            ]}
          />
        </TabsContent>

        <TabsContent value="Bonfires" className="mt-4">
          <SceneryTab
            imgs={[
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
            ]}
          />
        </TabsContent>

        <TabsContent value="Trials" className="mt-4">
          <SceneryTab
            imgs={[
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://www.nomadicweekends.com/wp-content/uploads/2024/09/Jhandi-Homestay-Hill-Top-Luxurious-19-1228x800.jpeg",
              "https://assets.cntraveller.in/photos/63a53dc3d7caa4e531854e77/master/pass/ROOM%20WITH%20A%20VIEW%20LEAD.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
            ]}
          />
        </TabsContent>

        <TabsContent value="Local Life" className="mt-4">
          <SceneryTab
            imgs={[
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
              "https://www.nomadicweekends.com/wp-content/uploads/2024/09/Jhandi-Homestay-Hill-Top-Luxurious-19-1228x800.jpeg",
              "https://assets.cntraveller.in/photos/63a53dc3d7caa4e531854e77/master/pass/ROOM%20WITH%20A%20VIEW%20LEAD.jpg",
            ]}
          />
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-3 text-center">
        <p className="text-base sm:text-lg text-gray-500">
          Want to experience this for yourself?
        </p>
        <button className="rounded-full mx-auto px-8 sm:px-10 py-2.5 sm:py-3 bg-green-700 text-white font-semibold hover:bg-green-800">
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Scenery;
