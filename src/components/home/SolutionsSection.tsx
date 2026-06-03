const solutions = [
  {
    title: "CCTV",
    label: "Smart Surveillance",
    description:
      "Advanced surveillance systems, smart cameras, monitoring platforms, and video analytics for reliable security coverage.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8.5h10.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H4v-7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17.5 12H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 16.5 5.5 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Access Control",
    label: "Secure Entry",
    description:
      "Secure entry management, attendance systems, biometric devices, gates, barriers, and access permissions.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="10"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 10V7a4 4 0 0 1 8 0v3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 14v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Fire Alarm",
    label: "Life Safety",
    description:
      "Fire detection, alarm systems, control panels, sensors, and safety solutions for commercial and critical environments.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C9.5 6.5 7 9.5 7 13a5 5 0 0 0 10 0c0-3.5-2.5-6.5-5-10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 17v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Application",
    label: "Digital Systems",
    description:
      "Custom software, mobile applications, dashboards, monitoring systems, and digital tools tailored for your workflow.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 17h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Solution",
    label: "Integrated Delivery",
    description:
      "Complete technology solutions combining infrastructure, security, software, networking, and long-term technical support.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20V10M6 20V14M18 20V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 20h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-modern-section scroll-reveal">
      <div className="solutions-modern-bg"></div>

      <div className="solutions-modern-inner">
        <div className="solutions-modern-header">
          <p className="kicker">Unified platform</p>

          <h2 className="solutions-modern-title">
            Integrated systems for modern organizations.
          </h2>

          <p className="solutions-modern-copy">
            From surveillance and access control to fire alarm systems,
            applications, and complete infrastructure solutions, AL-LAITH
            delivers technology that supports safer and smarter operations.
          </p>
        </div>

        <div className="solutions-modern-grid">
          {solutions.map((solution, index) => (
            <article
              className={`solution-modern-card ${
                index === 0 ? "solution-modern-card-featured" : ""
              }`}
              key={solution.title}
            >
              <div className="solution-modern-card-glow"></div>

              <div className="solution-modern-top">
                <div className="solution-modern-icon">{solution.icon}</div>

                <span className="solution-modern-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="solution-modern-label">{solution.label}</p>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <button className="solution-modern-link" type="button">
                Learn more
                <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}