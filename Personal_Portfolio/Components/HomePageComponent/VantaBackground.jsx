// src/components/VantaBackground.jsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xaeaeae,
          midtoneColor: 0xaeaeae,
          lowlightColor: 0xaeaeae,
          blurFactor: 0.59,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
}
