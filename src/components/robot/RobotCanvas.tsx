import { useEffect, useRef } from "react";
import SceneManager from "../../three/SceneManager";

interface RobotCanvasProps {
  onReady?: (scene: SceneManager) => void;
}

export default function RobotCanvas({
  onReady,
}: RobotCanvasProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewportRef.current) return;

    const scene = new SceneManager(viewportRef.current);

    onReady?.(scene);

    return () => {
      scene.dispose();
    };
  }, [onReady]);

  return (
    <div
      ref={viewportRef}
      style={{
        width: "100%",
        height: "100%",
        background: "#181c22",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
}