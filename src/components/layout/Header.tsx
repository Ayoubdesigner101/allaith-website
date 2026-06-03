
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import logo from "../../assets/images/justIcon.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

 const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? scrolled
        ? "bg-slate-950 text-white"
        : "bg-white/80 text-slate-950 shadow-sm"
      : scrolled
        ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
        : "text-slate-950 hover:bg-white/50 hover:text-slate-950"
  }`;
  return (
 <header
  className={`fixed left-0 right-0 top-0 border-b transition-all duration-300 ${
    scrolled
      ? "z-[90] border-slate-200 bg-white/95 shadow-lg shadow-slate-950/5 backdrop-blur-xl"
     : "z-[90] border-slate-200/40 bg-transparent shadow-none backdrop-blur-0"
  }`}
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="AL-LAITH LTD Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p
              className={`text-lg font-bold tracking-wide transition ${
                scrolled ? "text-slate-950" : "text-slate-950/85"
              }`}
            >
              AL-LAITH LTD
            </p>

            <p
              className={`text-xs transition ${
                scrolled ? "text-slate-500" : "text-slate-700/70"
              }`}
            >
              Security • Network • Technology
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.slice(0, 7).map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact-us"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition md:block ${
  scrolled
    ? "bg-slate-950 text-white shadow-slate-950/15 hover:bg-slate-800"
    : "bg-white/85 text-slate-950 shadow-white/20 hover:bg-white"
}`}
        >
          Contact us
        </NavLink>

        <button
          onClick={() => setOpen((value) => !value)}
          className={`rounded-xl border p-2 text-xl shadow-sm lg:hidden ${
            scrolled
              ? "border-slate-200 bg-white text-slate-950"
              : "border-white/30 bg-white/40 text-slate-950"
          }`}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="grid gap-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "bg-slate-50 text-slate-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}