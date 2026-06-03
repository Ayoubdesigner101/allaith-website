import { motion } from "framer-motion";
import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import StatCard from "../components/cards/StatCard";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "8", label: "Global Partners" },
  { value: "100%", label: "Client Commitment" },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="Engineering trust since 2005."
        subtitle="We are AL-LAITH Co. Ltd., providing innovative technological solutions that combine quality and expertise for nearly two decades. Our goal is to enhance security and efficiency for our clients through comprehensive services and leading partnerships."
      />

      <Container className="space-y-16 pb-20">
        <section className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              01 — Company Overview
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              A trusted name in technology and security across Iraq.
            </h3>
          </div>

          <div className="space-y-6 text-lg leading-9 text-slate-300">
            <p>
              AL-LAITH Co. Ltd. has been a trusted name in the technology and
              security solutions industry since its establishment in 2005. Over
              the years, we have evolved into a leader in delivering innovative,
              high-quality services tailored to the unique needs of businesses
              across Iraq.
            </p>

            <p>
              Our expertise spans multiple domains, including network
              infrastructure, integrated security systems, and advanced
              technological solutions designed to empower our clients and help
              them achieve their goals. With strong partnerships with global
              brands like Hikvision, we bring the latest innovations to the
              local market.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Our Vision
            </p>

            <h3 className="text-2xl font-bold">
              Leading innovation across Iraq.
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To be the leading provider of innovative and reliable technology
              solutions in Iraq, empowering businesses and communities with
              state-of-the-art security systems, smart networks, and integrated
              services. We envision a future where technology seamlessly
              enhances safety, efficiency, and productivity — making life
              smarter and more secure for everyone.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Our Mission
            </p>

            <h3 className="text-2xl font-bold">
              Delivering quality, security, and growth.
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To deliver high-quality, innovative technology and security
              solutions that meet the evolving needs of businesses and
              communities in Iraq. We are committed to excellence, customer
              satisfaction, and continuous improvement — providing tailored
              services that ensure safety, efficiency, and long-term growth.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Our Message
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Technology is the cornerstone of a better future.
              </h3>
            </div>

            <div className="space-y-5 text-lg leading-9 text-slate-300">
              <p>
                Since 2005, our mission has been to provide innovative and
                comprehensive technological solutions that meet the diverse
                needs of our clients, enhance efficiency, and ensure sustainable
                growth.
              </p>

              <p>
                At AL-LAITH Co. Ltd., we value long-term relationships with our
                clients, working to understand their challenges and develop
                tailored solutions executed with the highest standards of
                professionalism.
              </p>

              <p>
                Partnering with us is an investment in a smarter, safer future
                where your goals become a tangible reality.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              AL-LAITH Expert Team
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              02 — Our Team
            </h3>

            <p className="mt-4 text-xl font-semibold text-white">
              The pillars of our success.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <p className="text-lg leading-9 text-slate-300">
              We pride ourselves on the strength of our team — the cornerstone
              of our success and innovation. Our highly skilled professionals
              bring together years of experience in engineering, technology,
              project management, and customer service.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-300">
              Each member is dedicated to delivering excellence: designing
              advanced technological solutions, implementing large-scale
              projects, and providing ongoing support. Their passion for
              innovation ensures every project not only meets but exceeds
              expectations.
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400 to-blue-700 p-8 text-slate-950 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_0.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-slate-900/70">
                Join our team
              </p>

              <h3 className="mt-4 text-3xl font-black md:text-5xl">
                Let's shape your future with technology.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-900/80">
                Discover how our expertise can transform your operations, secure
                your infrastructure, and drive sustainable growth.
              </p>
            </div>

            <div className="flex md:justify-end">
              <button className="rounded-full bg-slate-950 px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-slate-900">
                Join our team
              </button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}