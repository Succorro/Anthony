import { Link } from "react-router-dom";
import QuoteCard from "./QuoteCard";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* subtle background image, desktop only, right side */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center opacity-20 lg:block lg:right-0 lg:w-1/2 lg:left-auto"
        style={{ backgroundImage: "url('/RentABinBinLogo 2.jpg')" }}
        aria-hidden="true"
      />
      {/* mobile background image, full width, faded */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 lg:hidden"
        style={{ backgroundImage: "url('/RentABinBinLogo 2.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-green-900/40" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        {/* Left: attention-grabber copy */}
        <div className="text-center text-white lg:pt-4 lg:text-left">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/30 sm:text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 text-yellow-300"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            5.0 Rating · 223 Google Reviews
          </span>

          <h1 className="mt-3 break-words text-3xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Fast &amp; Affordable{" "}
            <span className="text-green-300">Junk Removal</span>
          </h1>

          <p className="mt-3 text-base text-white/90 sm:text-lg">
            Same-Day Service Available Throughout the Central Valley.
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-2.5 gap-y-1.5 text-xs font-semibold text-white sm:text-sm lg:justify-start">
            {[
              "★★★★★ 5.0 Rating",
              "223+ Google Reviews",
              "Family-Owned & Operated",
              "Licensed & Insured",
              "Same-Day Service",
              "Free Estimates",
            ].map((label) => (
              <li
                key={label}
                className="rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/25 backdrop-blur"
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-xl"
            >
              Book Now
            </Link>
            
              
            <a href="tel:+12094479020"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10" >
              Call (209) 447-9020
            </a>
          </div>
        </div>

        {/* Right: quote card slot (second section) */}
        <div id="quick-quote" className="scroll-mt-24 lg:row-span-2">
          <QuoteCard/>
        </div>
      </div>
    </section>
  );
}

export default Hero;