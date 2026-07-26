import { Link } from "react-router-dom";
import serviceData from "./serviceData";
import Hero from "./Hero";

function CheckIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>
  );
}

const BUSINESS_POINTS = [
  "Family Owned and Operated",
  "Value for your money",
  "24/7 Services",
  "Servicing 209 and Surrounding Areas!",
];

function Home() {
  const displayData = serviceData.map((service, index) => {
    const { image, title, text } = service;
    return (
      <Link
        to="/services"
        key={index}
        className="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-green-700/30"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 transition-colors group-hover:bg-green-100">
          <img src={image} className="h-9 w-9" alt={`${title} service`} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-green-700 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-base text-slate-600 sm:text-lg">{text}</p>
      </Link>
    );
  });

  return (
    <div id="home" className="bg-white sm:my-0 my-10">
      <Hero />

      {/* About Us */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-green-700 sm:text-sm">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted Waste Removal, Done Right
          </h2>
        </div>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          <p>
            Rent A Bin offers a convenient and reliable dumpster rental
            service, providing customers with a hassle-free solution for
            their waste disposal needs. Our dumpster rental and trailer
            rental services allow individuals and businesses to efficiently
            manage their waste, whether it's for a home renovation project,
            construction site cleanup, or any other large-scale endeavor.
          </p>
          <p>
            With Rent A Bin, you can easily dispose of debris, trash, and
            unwanted items, making cleanup a breeze. Our Affordable Junk
            Removal option ensures that you can tackle your project without
            breaking the bank or your back. Experience the convenience and
            affordability of Rent A Bin's dumpster rental service for all
            your waste management needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 sm:text-sm">
              Our Services
            </span>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
              We Provide Hassle-Free Junk Removal Services
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Our services cover residential/commercial trailer and dumpster
              rentals. We also offer our Junk Removal Services for an
              additional fee. Home, office, warehouse and construction site
              cleanups to help you get rid of your unwanted items.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayData}
          </ul>
        </div>
      </section>

      {/* Our Business / trust points */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-xl bg-green-700 p-8 text-white shadow-lg sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Business</h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {BUSINESS_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-base font-semibold sm:text-lg">
                <CheckIcon className="h-5 w-5 shrink-0 text-green-300" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;