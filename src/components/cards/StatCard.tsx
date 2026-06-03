export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 text-center shadow-xl shadow-black/10">
      <p className="text-4xl font-black text-cyan-300 md:text-5xl">{value}</p>
      <p className="mt-3 text-sm font-medium text-slate-400">{label}</p>
    </div>
  );
}