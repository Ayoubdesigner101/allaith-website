import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

const supportItems = [
  "Fast technical assistance",
  "Installation and configuration support",
  "Maintenance and troubleshooting",
  "Project consultation",
  "After-sales service",
  "Business client support",
];

export default function Support() {
  return (
    <>
      <PageHero title="Support" subtitle="Professional support before, during, and after project delivery." />
      <Container className="pb-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              ✓ {item}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}