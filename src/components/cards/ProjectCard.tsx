export default function ProjectCard({ title, excerpt, date, tag }: { title: string; excerpt: string; date: string; tag: string }) {
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">{tag}</span>
        <span className="text-xs text-slate-500">{date}</span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Visible</span>
      </div>
      <h3 className="text-xl font-bold leading-8 group-hover:text-cyan-200">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{excerpt}</p>
      <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
        Select Page <span>›</span>
      </button>
    </div>
  );
}