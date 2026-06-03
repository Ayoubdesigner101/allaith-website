import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

const solutions = [
  {
    number: "01",
    title: "Smart City Solutions",
    description:
      "Comprehensive solutions for building secure and intelligent cities, integrating advanced surveillance, traffic management, and public safety systems to enhance urban living.",
  },
  {
    number: "02",
    title: "Data Center Development",
    description:
      "Design and implementation of state-of-the-art data centers, delivering secure, scalable, and energy-efficient infrastructure to support critical operations.",
  },
  {
    number: "03",
    title: "AI-Powered Surveillance Systems",
    description:
      "Advanced surveillance systems with AI capabilities for facial recognition, license plate detection, and anomaly tracking — ensuring real-time security and efficiency.",
  },
  {
    number: "04",
    title: "Integrated Access Control",
    description:
      "Seamlessly integrated access control systems with biometric and facial recognition technologies to safeguard facilities and manage entry points effectively.",
  },
  {
    number: "05",
    title: "Command and Control Centers",
    description:
      "Customized command and control centers equipped with video walls, real-time data visualization, and centralized monitoring for mission-critical operations.",
  },
  {
    number: "06",
    title: "Perimeter & Critical Infrastructure Security",
    description:
      "Robust security solutions for critical infrastructure, including perimeter monitoring, intrusion detection, and thermal imaging for enhanced protection.",
  },
  {
    number: "07",
    title: "Smart Building Automation",
    description:
      "Integrated smart building systems featuring IoT-based automation for lighting, energy management, and security to enhance operational efficiency.",
  },
  {
    number: "08",
    title: "Cybersecurity & IT Infrastructure Protection",
    description:
      "Comprehensive cybersecurity solutions to safeguard sensitive data, IT networks, and systems against evolving digital threats.",
  },
  {
    number: "09",
    title: "Airport Security & Operations",
    description:
      "Specialized solutions for airports, offering advanced surveillance, access control, baggage screening, and traveler safety systems.",
  },
  {
    number: "10",
    title: "Renewable Energy & Power Solutions",
    description:
      "Innovative power solutions, including renewable energy integration and UPS systems, to ensure uninterrupted operations and energy efficiency.",
  },
  {
    number: "11",
    title: "Network Solutions",
    description:
      "Comprehensive networking solutions, including structured cabling, wireless systems, and high-performance infrastructure for seamless connectivity.",
  },
];

export default function Solutions() {
  return (
    <>
      <PageHero
        title="Innovative solutions for a rapidly evolving world."
        subtitle="Discover cutting-edge solutions tailored to meet the demands of modern enterprises. From smart cities to secure infrastructures, we provide the technology that drives success."
      />

      <Container className="pb-20">
        <section className="mb-12 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              End-to-end solutions, engineered for impact.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-lg leading-9 text-slate-300">
              We design, build, and operate technology systems that solve real
              problems — from city-scale public safety to private enterprise
              security and infrastructure. Every solution is tailored,
              integrated, and built to last.
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-black text-cyan-300/30">
                    {solution.number}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Solution
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-8 text-white group-hover:text-cyan-200">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400 to-blue-700 p-8 text-slate-950 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_0.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-slate-900/70">
                Build with AL-LAITH LTD
              </p>

              <h3 className="mt-4 text-3xl font-black md:text-5xl">
                Secure, connect, and transform your operations.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-900/80">
                Our solutions are designed to help organizations improve safety,
                increase efficiency, and build reliable infrastructure for the
                future.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="/contact-us"
                className="rounded-full bg-slate-950 px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-slate-900"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}