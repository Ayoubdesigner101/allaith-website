import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </motion.div>
  );
}