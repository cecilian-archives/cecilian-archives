import { useState } from "react";
import { useInterval } from "../utils/useInterval";

const images = [
  "Pippin.jpg",
  "Popstars.jpg",
  "GuysandDolls2004.jpg",
  "Mikado.jpg",
  "ChildrenofEden.jpg",
  "Urinetown.jpg",
  "Orpheus.jpg",
  "GuysandDolls.jpg",
  "H2Dollar.jpg",
  "BatBoy.jpg",
  "WSS.jpg",
  "ASU.jpg",
  "Hugh.jpg",
];

const ImageFader = ({ switchTime = 5000 }) => {
  const [imageNum, setImageNum] = useState(0);
  useInterval(() => setImageNum((current) => (current + 1) % images.length), {
    interval: switchTime,
  });

  return (
    <div id="archive-image-fader">
      {images.map((image, idx) => {
        const isVisible = idx === imageNum;
        return (
          <div
            key={idx}
            className={`${
              isVisible ? "opacity-100" : "opacity-0"
            } absolute inset-0 bg-center bg-no-repeat bg-cover min-h-screen transition-opacity duration-1000`}
            style={{
              backgroundImage: `url(/images/${image})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageFader;
