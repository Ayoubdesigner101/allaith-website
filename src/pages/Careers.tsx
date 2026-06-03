import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";

export default function Careers() {
  return (
    <>
      <PageHero title="Careers" subtitle="Join our team and help shape the future of technology and security in Iraq." />
      <Container className="pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black">Join our team</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            We are always looking for talented people in security systems, networking, sales, technical support, and project implementation. Send your CV to our contact email and our team will review your application.
          </p>
          <p className="mt-6 text-cyan-300">info@laithgroup.com</p>
        </div>
      </Container>
    </>
  );
}