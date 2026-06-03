import { useEffect } from "react";
import { initLogoScene } from "../../assets/js/three/logoScene";

export default function LogoShowcaseSection() {
  useEffect(() => {
    const cleanup = initLogoScene();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="logo-showcase-section scroll-reveal">
      <div className="logo-showcase-bg"></div>

      <div className="logo-showcase-inner">
        <div className="logo-showcase-content">
          <p className="kicker">AL-LAITH Identity</p>

          <h2 className="logo-showcase-title">
            A symbol of engineering, security, and future-ready technology.
          </h2>

          <p className="logo-showcase-copy">
            Inspired by AL-LAITH’s architectural identity, this interactive
            three-dimensional mark represents precision, trust, and the
            company’s role in building smarter infrastructure across Iraq.
          </p>

          <div className="logo-showcase-points">
            <span>3D visual identity</span>
            <span>Smart infrastructure</span>
            <span>Security technology</span>
          </div>
        </div>

        <div className="logo-showcase-visual">
          <div id="logo-canvas"></div>
        </div>
      </div>
    </section>
  );
}