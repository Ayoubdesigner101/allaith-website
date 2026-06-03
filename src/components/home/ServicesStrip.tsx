const serviceItems = [
  "CCTV",
  "Access Control",
  "Fire Alarm",
  "Application",
  "Solution",
  "Networking",
  "Data Center",
  "Smart City",
  "AI Surveillance",
  "Command Center",
  "Maintenance",
  "Infrastructure",
];

export default function ServicesStrip() {
  return (
    <section className="service-strip scroll-reveal">
      <div className="service-strip-track">
        {[...serviceItems, ...serviceItems, ...serviceItems].map(
          (item, index) => (
            <div className="service-strip-item" key={`${item}-${index}`}>
              <span className="service-dot"></span>
              <span>{item}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}