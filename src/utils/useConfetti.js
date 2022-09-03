import { useEffect } from "react";
import useWindowWidth from "src/utils/useWindowWidth";
import confetti from "canvas-confetti";

const tailwindBreakpointMd = 768;

const useConfetti = ({ autoFire = false } = {}) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < tailwindBreakpointMd;
  const confettiConfig = {
    particleCount: 300,
    angle: 90,
    spread: isMobile ? 90 : 120,
    gravity: 1.4,
    colors: ["#1a4970", "#ffc71e"],
    scalar: 1,
    disableForReducedMotion: true,
    drift: 0,
    origin: { x: 0.5, y: 0.3 },
    ticks: 250,
  };
  const fireConfetti = () => {
    confetti(confettiConfig);
  };

  useEffect(() => {
    autoFire && fireConfetti();
  }, []);

  return fireConfetti;
};

export default useConfetti;
