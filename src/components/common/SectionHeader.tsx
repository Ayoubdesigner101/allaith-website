export default function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">{title}</h2>
    </div>
  );
}