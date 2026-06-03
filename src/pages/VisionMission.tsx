import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

export default function VisionMission() {
  return (
    <>
      <PageHero title="Vision & Mission" subtitle="Our direction is built on innovation, reliability, and long-term client success." />
      <Container className="grid gap-6 pb-20 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Vision</p>
          <h2 className="mt-4 text-3xl font-black">To lead technology innovation in Iraq.</h2>
          <p className="mt-5 leading-8 text-slate-300">
            To be the leading provider of innovative and reliable technology solutions in Iraq, empowering businesses and communities with advanced security systems, smart networks, and integrated services.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Mission</p>
          <h2 className="mt-4 text-3xl font-black">To deliver secure and reliable solutions.</h2>
          <p className="mt-5 leading-8 text-slate-300">
            To deliver high-quality, innovative technology and security solutions that meet the evolving needs of businesses and communities in Iraq.
          </p>
        </div>
      </Container>
    </>
  );
}