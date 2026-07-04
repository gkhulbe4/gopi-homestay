import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SceneryTab from "./SceneryTab";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

// Image pool (placeholders for now — swap for real photos later)
const P = {
  m1: "/images/gallery/mornings/mountain1.jpeg",
  m2: "/images/gallery/mornings/mountain2.jpeg",
  main: "/images/main.jpeg",
  mmt: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202302191314306552-9580801d-f5b0-4153-b27e-b38f78817778.jpg",
  nomad:
    "https://www.nomadicweekends.com/wp-content/uploads/2024/09/Jhandi-Homestay-Hill-Top-Luxurious-19-1228x800.jpeg",
  cnt: "https://assets.cntraveller.in/photos/63a53dc3d7caa4e531854e77/master/pass/ROOM%20WITH%20A%20VIEW%20LEAD.jpg",
};

// Same 7-tile bento pattern in every tab; only the images change.
const GALLERY = {
  Mornings: [
    { img: P.m2, caption: "First light over the Kumaon ridges" },
    { img: P.m1, caption: "Chai on the porch" },
    { img: P.mmt, caption: "Mist on the pines" },
    { img: P.cnt, caption: "A room open to the hills" },
    { img: P.main, caption: "The house at dawn" },
    { img: P.nomad, caption: "Valley views for miles" },
    { img: P.m1, caption: "Slow mountain mornings" },
  ],
  Bonfires: [
    { img: P.nomad, caption: "Evenings around the fire" },
    { img: P.mmt, caption: "Stories after dark" },
    { img: P.cnt, caption: "Warmth against the cold" },
    { img: P.main, caption: "Gathered under the stars" },
    { img: P.m2, caption: "Embers and quiet" },
    { img: P.m1, caption: "A sky full of stars" },
    { img: P.mmt, caption: "The last glow of the night" },
  ],
  Trails: [
    { img: P.nomad, caption: "Paths from the doorstep" },
    { img: P.m2, caption: "Through the chir pines" },
    { img: P.cnt, caption: "Ridgelines and long views" },
    { img: P.mmt, caption: "A hidden local waterfall" },
    { img: P.main, caption: "Where the trail begins" },
    { img: P.m1, caption: "Forest quiet" },
    { img: P.nomad, caption: "Walks that wander" },
  ],
  "Local Life": [
    { img: P.cnt, caption: "Home-cooked daal & chawal" },
    { img: P.mmt, caption: "Terraced fields" },
    { img: P.m1, caption: "The rhythm of the village" },
    { img: P.nomad, caption: "Orchards on the slopes" },
    { img: P.main, caption: "A home in the hills" },
    { img: P.m2, caption: "Generations of farming" },
    { img: P.cnt, caption: "Everyday mountain life" },
  ],
};

const TABS = ["Mornings", "Bonfires", "Trails", "Local Life"];

function Scenery() {
  return (
    <section id="gallery" className="border-t border-line bg-paper py-16 md:py-24">
      <div className="shell flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="A glimpse of the days"
          title="Wake up to nature, unhurried"
        >
          Dense pine forests, misty mornings and riverside trails. Here is what
          your days at Gopi Homestay tend to look like.
        </SectionHeading>

        <Reveal className="w-full">
          <Tabs defaultValue="Mornings" className="w-full items-center gap-9">
            <TabsList className="flex h-auto w-full max-w-2xl flex-wrap justify-center gap-6 rounded-none border-b border-line bg-transparent p-0 sm:gap-10">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="flex-none cursor-pointer rounded-none border-0 bg-transparent px-1 pb-3.5 pt-0 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none data-[state=active]:[box-shadow:inset_0_-1px_0_var(--ink),0_1px_0_var(--ink)]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {TABS.map((tab) => (
              <TabsContent
                key={tab}
                value={tab}
                className="mt-2 w-full data-[state=active]:animate-in data-[state=active]:fade-in-50"
              >
                <SceneryTab items={GALLERY[tab]} />
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="font-display text-xl text-ink md:text-2xl">
            Want to wake up here yourself?
          </p>
          <a
            href="#contact"
            className="btn-caps text-ink hover:bg-ink hover:text-paper"
          >
            Plan your stay
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Scenery;
