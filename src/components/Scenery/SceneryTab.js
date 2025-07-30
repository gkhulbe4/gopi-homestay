import React from "react";
import SceneCard from "./SceneCard";

function SceneryTab({ imgs = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {imgs.map((img, index) => (
        <SceneCard key={index} img={img} />
      ))}
    </div>
  );
}

export default SceneryTab;
