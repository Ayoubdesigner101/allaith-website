import { useEffect } from "react";
import { initHorizontalEthernetScene } from "../../assets/js/three/horizontalEthernetScene";

export default function HorizontalSilkSection() {
  useEffect(() => {
    const cleanup = initHorizontalEthernetScene();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="horizontal-ethernet-section scroll-reveal">
      <div className="horizontal-ethernet-bg"></div>

      <div className="horizontal-ethernet-title-wrap">
        <p className="horizontal-ethernet-kicker">
          AL-LAITH TECHNOLOGY INTEGRATION
        </p>

        <h2 className="horizontal-ethernet-title">
          الليث تكامل للتكنولوجيا
        </h2>
      </div>

      <div className="horizontal-ethernet-visual">
        <div id="horizontal-ethernet-canvas"></div>
      </div>
    </section>
  );
}