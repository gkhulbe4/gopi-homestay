import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms/Rooms";
import Scenery from "@/components/Scenery/Scenery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Rooms />
      <Scenery />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
