import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const phoneNumber = "+964 789 000 3601";
  const address = "Baghdad, Al-Sinaa, Dist. 906, St. 10";

  return (
    <footer className="relative z-10 overflow-hidden border-t border-slate-200 bg-white">
      {/* Background effects مثل ألوان الهيرو */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#238ABF]/10 blur-3xl" />
        <div className="absolute right-10 top-0 h-96 w-96 rounded-full bg-[#635BFF]/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-[#F1975D]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.25fr_0.7fr_0.9fr_1.25fr]">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-4">
            <div className="flex max-w-[190px] items-center">
              <img
                src={logo}
                alt="AL-LAITH LTD Logo"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">
            At AL-LAITH Co. LCC., we are committed to delivering innovative and
            reliable technology solutions that inspire success and create real
            impact across Iraq and beyond.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#238ABF]/10 px-4 py-2 text-xs font-bold text-[#238ABF]">
              Security
            </span>
            <span className="rounded-full bg-[#635BFF]/10 px-4 py-2 text-xs font-bold text-[#635BFF]">
              Network
            </span>
            <span className="rounded-full bg-[#F1975D]/14 px-4 py-2 text-xs font-bold text-[#C7652D]">
              Technology
            </span>
          </div>
        </div>

        {/* Pages */}
        <div>
          <p className="text-lg font-extrabold text-slate-950">Pages</p>

          <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-600">
            {navigationLinks.slice(0, 6).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="transition hover:translate-x-1 hover:text-[#635BFF]"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-extrabold text-slate-950">Contact</p>

          <div className="mt-5 grid gap-4 text-sm font-semibold text-slate-600">
            <a
              href="mailto:info@laithgroup.com"
              className="flex items-start gap-3 transition hover:text-[#635BFF]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#238ABF]/10 text-[#238ABF]">
                ✉️
              </span>
              <span className="pt-1">info@laithgroup.com</span>
            </a>

            <a
              href="tel:+9647890003601"
              className="flex items-start gap-3 transition hover:text-[#635BFF]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F1975D]/14 text-[#C7652D]">
                📞
              </span>
              <span className="pt-1" dir="ltr">
                {phoneNumber}
              </span>
            </a>

            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#635BFF]/10 text-[#635BFF]">
                📍
              </span>
              <span className="pt-1">{address}</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <p className="text-lg font-extrabold text-slate-950">Location</p>

          <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
            <iframe
              title="AL-LAITH SOLUTIONS Location"
              src="https://maps.google.com/maps?q=33.3117693,44.4420356&z=17&output=embed"
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/maps/place/AL+LAITH+SOLUTIONS/@33.3115492,44.4420429,19z/data=!4m15!1m8!3m7!1s0x1557817d52be0ad7:0x35be94c9a8324aa1!2z2LTYp9ix2Lkg2KfZhNi12YbYp9i52KksIEJhZ2hkYWQsIEJhZ2hkYWQgR292ZXJub3JhdGU!3b1!8m2!3d33.3103533!4d44.446207!16s%2Fg%2F1pwfw3plc!3m5!1s0x155781523ed0d92b:0xc22fe0faf973fcab!8m2!3d33.3117693!4d44.4420356!16s%2Fg%2F11nbh6wqw5?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      <div className="relative border-t border-slate-200 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs font-semibold text-slate-500 md:flex-row">
          <p>© 2026 AL-LAITH LTD. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <NavLink
              to="/policies"
              className="transition hover:text-[#635BFF]"
            >
              Privacy Policy
            </NavLink>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <NavLink
              to="/policies"
              className="transition hover:text-[#635BFF]"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}