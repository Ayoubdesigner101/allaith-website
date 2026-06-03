import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import { faqs } from "../data/faqs";

export default function FAQs() {
  return (
    <>
      <PageHero title="FAQs" subtitle="Common questions about AL-LAITH LTD services and solutions." />
      <Container className="grid gap-4 pb-20">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold">{item.question}</h3>
            <p className="mt-3 leading-7 text-slate-400">{item.answer}</p>
          </div>
        ))}
      </Container>
    </>
  );
}