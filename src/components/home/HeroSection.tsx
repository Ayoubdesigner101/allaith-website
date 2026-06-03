export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-shape-one"></div>
      <div className="hero-shape-two"></div>
      <div className="hero-shape-three"></div>
      <div id="camera-canvas"></div>
      <div className="hero-fade"></div>

      <div className="hero-inner">
        <div className="hero-copy-block">
          <div className="eyebrow">
            <i className="status-dot" />
            <span>Smart systems engineered by AL-LAITH</span>
          </div>

          <h1 className="hero-title">
            Innovative Solutions for a{" "}
            <span className="gradient-word">Smarter Future</span>
          </h1>

          <p className="hero-copy">
            Empowering businesses across Iraq with advanced technology,
            integrated security systems, and tailored infrastructure built to
            transform how organizations operate.
          </p>

          <div className="hero-actions">
            <button className="btn btn-dark">Start your project →</button>
            <button className="btn btn-white">Contact sales →</button>
          </div>
        </div>
      </div>
    </section>
  );
}