import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

const policies = ["Privacy policy", "Terms of service", "Contact information"];

export default function Policies() {
  return (
    <>
      <PageHero title="Policies" subtitle="Privacy policy, terms of service, and contact information." />
      <Container className="pb-20">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Visible</span>
            <span className="text-sm text-slate-500">May 6, 2025</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {policies.map((policy) => (
              <div key={policy} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="font-semibold">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}