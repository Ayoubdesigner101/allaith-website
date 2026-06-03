import Container from "./Container";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Container className="py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">AL-LAITH LTD</p>
        <h1 className="text-4xl font-black md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p>
      </div>
    </Container>
  );
}