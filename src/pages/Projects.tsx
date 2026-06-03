import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

const industries = [
  {
    number: "01",
    title: "Government Sector",
    description:
      "We proudly serve government institutions with advanced technological solutions that enhance security, efficiency, and operational excellence. Our partnerships with ministries and public entities reflect our commitment to reliable and innovative services.",
  },
  {
    number: "02",
    title: "City Protection",
    description:
      "Ensuring the safety of cities through cutting-edge surveillance and security systems. Our city protection projects safeguard public spaces, infrastructure, and communities with state-of-the-art technology.",
  },
  {
    number: "03",
    title: "Governmental Security",
    description:
      "Specialized in securing government facilities with advanced surveillance, access control, and monitoring systems. These projects ensure the safety and integrity of critical government operations.",
  },
  {
    number: "04",
    title: "Oil Sector",
    description:
      "Delivering innovative security and technological solutions tailored to the unique needs of the oil sector. Our expertise ensures the protection of facilities, infrastructure, and sensitive data in this vital industry.",
  },
  {
    number: "05",
    title: "Airport Projects",
    description:
      "Providing comprehensive solutions for airport security and operations. From surveillance to access control, we help create secure and efficient environments for travelers and staff.",
  },
  {
    number: "06",
    title: "Banking Sector",
    description:
      "Enhancing security and operational efficiency for banks through advanced surveillance, alarm systems, and data protection solutions, designed to meet the highest industry standards.",
  },
  {
    number: "07",
    title: "Private Sector",
    description:
      "Empowering businesses with tailored technological solutions to meet their unique needs. From security systems to IT infrastructure, our private sector projects drive innovation and efficiency.",
  },
  {
    number: "08",
    title: "Education",
    description:
      "Modernizing educational institutions with smart campus technologies, secure access control, and reliable network infrastructure that supports learning and administration.",
  },
  {
    number: "09",
    title: "Healthcare",
    description:
      "Building secure, reliable technology environments for hospitals and clinics — from CCTV and access control to medical-grade IT infrastructure.",
  },
];

const impactStats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "9", label: "Key Industries" },
  { value: "24/7", label: "Support Commitment" },
];

export default function Projects() {
  return (
    <>
      <PageHero
        title="Shaping the future, one project at a time."
        subtitle="We take pride in delivering integrated technology projects that meet the highest standards and exceed client expectations. Discover how we are shaping a smarter and more efficient future through our exceptional solutions."
      />

      <Container className="pb-20">
        <section className="mb-14 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              AL-LAITH project portfolio
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              01 — Our Impact
            </h2>

            <p className="mt-5 text-xl font-semibold text-white">
              Trusted by Iraq&apos;s most critical sectors.
            </p>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-9 text-slate-300 backdrop-blur">
            <p>
              For nearly two decades, AL-LAITH has been the technology partner
              of choice for organizations operating in Iraq&apos;s most demanding
              industries — from government and oil to airports and banking.
            </p>

            <p>
              Our work spans the full lifecycle: from initial consultation and
              design through implementation, training, and long-term
              maintenance. Every project is a partnership built on trust and
              engineering excellence.
            </p>
          </div>
        </section>

        <section className="mb-14 grid gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 text-center shadow-xl shadow-black/10"
            >
              <p className="text-4xl font-black text-cyan-300 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-12 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Industries we serve
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Diverse sectors, consistent excellence.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 backdrop-blur">
            <p className="text-lg leading-9 text-slate-300">
              Our project portfolio reflects the breadth of our expertise across
              Iraq&apos;s most important industries.
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.number}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-black text-cyan-300/30">
                    {industry.number}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Industry
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-8 text-white group-hover:text-cyan-200">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400 to-blue-700 p-8 text-slate-950 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_0.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-slate-900/70">
                AL-LAITH Projects
              </p>

              <h3 className="mt-4 text-3xl font-black md:text-5xl">
                Engineering excellence for mission-critical sectors.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-900/80">
                From consultation to implementation and long-term support, we
                deliver integrated projects that help organizations operate
                securely, efficiently, and confidently.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="/contact-us"
                className="rounded-full bg-slate-950 px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-slate-900"
              >
                Start a project
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}