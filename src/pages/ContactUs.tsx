import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import ContactForm from "../components/forms/ContactForm";

export default function ContactUs() {
  return (
    <>
      <PageHero title="Contact us" subtitle="Contact AL-LAITH LTD for consultation, support, or project inquiries." />
      <Container className="grid gap-6 pb-20 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-bold">Contact information</h3>
          <div className="mt-6 grid gap-4 text-slate-300">
            <p>✉️ info@laithgroup.com</p>
            <p>📞 +964 789 000 3601</p>
            <p>📍 Iraq</p>
          </div>
        </div>
        <ContactForm />
      </Container>
    </>
  );
}