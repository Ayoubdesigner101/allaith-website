export default function CompanySection() {
  return (
    <section id="company" className="dark-section">
      <div className="dark-inner scroll-reveal">
        <div>
          <p className="kicker">About company</p>

          <h2 className="dark-title">
            Engineering trust through smart technology.
          </h2>
        </div>

        <div className="about-box">
          <p>
            AL-LAITH delivers end-to-end technology solutions across security,
            networking, infrastructure, AI surveillance, and control room
            environments. We combine global partnerships with local engineering
            experience to build systems that last.
          </p>

          <div className="about-grid">
            <div className="about-item">✦ Certified global partners</div>
            <div className="about-item">✦ Enterprise-grade delivery</div>
            <div className="about-item">✦ Project design and consultation</div>
            <div className="about-item">✦ Maintenance and technical support</div>
          </div>
        </div>
      </div>
    </section>
  );
}