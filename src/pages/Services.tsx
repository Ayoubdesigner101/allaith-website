import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

const services = [
  {
    title: "Consultation & Design",
    description:
      "Expert consultation services to understand your needs and design tailored technology solutions for your business.",
  },
  {
    title: "Installation & Deployment",
    description:
      "Professional installation and deployment of advanced systems, ensuring seamless integration and optimal performance.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance plans and 24/7 technical support to keep your systems running efficiently and without interruption.",
  },
  {
    title: "Project Management",
    description:
      "Dedicated project management services to oversee every stage of your project, from planning to execution.",
  },
  {
    title: "Training & Education",
    description:
      "Customized training programs to empower your team with the knowledge to operate and manage installed systems effectively.",
  },
  {
    title: "System Integration",
    description:
      "Seamless integration of multiple systems to ensure interoperability and enhanced operational efficiency.",
  },
  {
    title: "IT Infrastructure Assessment",
    description:
      "Thorough assessments of your existing IT infrastructure to identify gaps and recommend solutions for improvement.",
  },
  {
    title: "Custom Software Development",
    description:
      "Development of bespoke software tailored to meet your unique business requirements and processes.",
  },
  {
    title: "Cybersecurity Audits",
    description:
      "Comprehensive cybersecurity audits to identify vulnerabilities and implement robust measures to protect your data.",
  },
  {
    title: "Remote Monitoring & Management",
    description:
      "24/7 remote monitoring services to ensure proactive issue resolution and optimal system performance.",
  },
  {
    title: "Cloud Migration & Management",
    description:
      "Seamless migration to cloud platforms with ongoing management to enhance flexibility and scalability.",
  },
  {
    title: "Network Optimization",
    description:
      "Expert services to optimize your network infrastructure for better speed, reliability, and security.",
  },
  {
    title: "Warranty & After-Sales",
    description:
      "Comprehensive after-sales support and warranty services to ensure your satisfaction and system longevity.",
  },
  {
    title: "Emergency Response",
    description:
      "Rapid response teams ready to address critical issues and minimize downtime in case of emergencies.",
  },
  {
    title: "Procurement & Supply",
    description:
      "High-quality equipment and devices from leading global brands to meet all your technology needs.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="End-to-end services that deliver lasting results."
        subtitle="From initial consultation to ongoing support, our comprehensive service portfolio is designed to support every phase of your technology journey."
      />

      <Container className="pb-20">
        <section className="mb-12 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              What We Offer
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Comprehensive technology services.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-lg leading-9 text-slate-300">
              A full spectrum of expert services that cover every aspect of your
              technology infrastructure — from planning to long-term support.
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-black text-cyan-300/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Service
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-8 text-white group-hover:text-cyan-200">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400 to-blue-700 p-8 text-slate-950 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_0.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-slate-900/70">
                AL-LAITH Services
              </p>

              <h3 className="mt-4 text-3xl font-black md:text-5xl">
                From planning to support, we handle every phase.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-900/80">
                Our services are designed to help organizations plan, implement,
                secure, operate, and continuously improve their technology
                infrastructure.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="/contact-us"
                className="rounded-full bg-slate-950 px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-slate-900"
              >
                Request service
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}