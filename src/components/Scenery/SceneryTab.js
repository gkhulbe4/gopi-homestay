import React from "react";
import SceneCard from "./SceneCard";

// Fixed 7-tile bento pattern. Mobile: 2 cols. Desktop: 4 cols, 3 rows.
const SPANS = [
  "col-span-2 row-span-2", // 0 — feature
  "col-span-1 row-span-1", // 1
  "col-span-1 row-span-1", // 2
  "col-span-2 row-span-1 md:col-span-1 md:row-span-2", // 3 — tall on desktop
  "col-span-1 row-span-1", // 4
  "col-span-2 row-span-1", // 5 — wide
  "col-span-1 row-span-1", // 6
];

function SceneryTab({ items = [] }) {
  return (
    <div className="grid auto-rows-[120px] grid-flow-dense grid-cols-2 gap-2 sm:auto-rows-[150px] md:grid-cols-4 lg:auto-rows-[190px]">
      {items.slice(0, SPANS.length).map((item, index) => (
        <SceneCard
          key={index}
          img={item.img}
          caption={item.caption}
          className={SPANS[index]}
          priority={index === 0}
        />
      ))}
    </div>
  );
}

export default SceneryTab;
