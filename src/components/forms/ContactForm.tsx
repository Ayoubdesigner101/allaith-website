export default function ContactForm() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
      <h3 className="text-2xl font-bold">Send a message</h3>
      <div className="mt-6 grid gap-4">
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Full name" />
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Email or phone" />
        <textarea className="min-h-32 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Message" />
        <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Submit</button>
      </div>
    </div>
  );
}