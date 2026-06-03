import { Link } from "react-router-dom";
import Container from "../components/common/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-black">404</h1>
      <p className="mt-4 text-xl text-slate-300">Page not found</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
        Back to home
      </Link>
    </Container>
  );
}