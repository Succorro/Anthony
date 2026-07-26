import { useState } from "react";

const TRUST_ITEMS = [
  { icon: "badge", label: "223 Google Reviews" },
  { icon: "star", label: "5.0 Rating" },
  { icon: "clock", label: "Same-Day Service" },
  { icon: "shield", label: "Licensed & Insured" },
];

function TrustIcon({ type, className }) {
  const paths = {
    badge: (
      <>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    star: (
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    shield: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function QuoteCard() {
  // const [fileCount, setFileCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"
  const [legalModal, setLegalModal] = useState(null);

  const handleFileChange = (e) => {
    setFileCount(e.target.files?.length ?? 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.website?.value) return; // honeypot

    setSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.target);
    formData.append("access_key", "c5f0d14b-2ba9-475a-a15d-2fdb2e8c668e");
    formData.append("subject", "New Quote Request — Affordable Junk Removal");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset();
        // setFileCount(0);
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div><div className="rounded-xl bg-white p-4 text-gray-900 shadow-2xl ring-1 ring-gray-200 sm:p-6">
      {/* Fast-contact strip */}
      <div className="mb-4 rounded-lg bg-green-50 p-3 ring-1 ring-green-200 sm:p-4">
        <p className="text-center text-sm font-bold text-gray-900 lg:text-left">
          Need A Price Right Now?
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <a
          href="tel:+12094479020"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-green-700 px-3 py-2.5 text-sm font-bold text-white shadow transition hover:scale-[1.02] hover:bg-green-600"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          Call (209) 447-9020
        </a>
        <a
        href="sms:+12094479020?&body=Hi%20Affordable%20Junk%20Removal%2C%20I%27m%20sending%20photos%20for%20a%20quote."
        className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        </svg>
        Text Photos
      </a>
    </div>
      <p className="mt-1.5 text-center text-[11px] leading-relaxed text-gray-500 lg:text-left">
        Most estimates returned in under 15 minutes during business hours.
      </p>
    </div><div className="text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-green-700">
          Free Quote
        </span>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
          Get My Free Quote
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Tell us what you need hauled for a fast, no-obligation estimate.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="mt-4 rounded-lg bg-green-50 p-6 text-center ring-1 ring-green-200">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-bold text-gray-900">
            Thanks — we've got it!
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            A team member will reach out shortly with your estimate.
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus("idle")}
            className="mt-4 text-sm font-semibold text-green-700 underline hover:text-green-600"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <a
        href="https://www.google.com/maps/place/Affordable+Junk+Removal%2FRent+A+Bin/@37.6608549,-121.2173399,11z/data=!4m8!3m7!1s0x62645b500ef3af95:0xb29e95d30b5a425e!8m2!3d37.6609695!4d-121.052531!9m1!1b1!16s%2Fg%2F11tc8yjxhs?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full flex-wrap items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-xs font-medium underline-offset-4 hover:underline"
        aria-label="Read Rent a Bin's 223 Google reviews"
        >
        <span className="flex items-center gap-0.5 text-green-700" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <TrustIcon key={i} type="star" className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
        <span>
          <strong>5.0 Star Rating · 223 Google Reviews</strong>
        </span>
        </a>
        <ul
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-b border-gray-200 pb-3 text-xs font-semibold text-gray-900"
          aria-label="Service trust indicators"
        >
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              <TrustIcon type={item.icon} className="h-3.5 w-3.5 text-green-700" />
              {item.label}
            </li>
          ))}
        </ul>

        {/* Honeypot - hidden from real users */}
        <input
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          name="website"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Your Name"
            aria-label="Your Name"
            name="name"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            required
            type="tel"
            maxLength={30}
            autoComplete="tel"
            inputMode="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            name="phone"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            required
            type="email"
            maxLength={200}
            autoComplete="email"
            inputMode="email"
            placeholder="Email"
            aria-label="Email"
            name="email"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            required
            maxLength={120}
            autoComplete="address-level2"
            placeholder="City"
            aria-label="City"
            name="city"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <select
          name="service"
          required
          defaultValue=""
          aria-label="Service Needed"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="" disabled>
            Service Needed
          </option>
          <option value="Single Item Pickup">Single Item Pickup</option>
          <option value="Furniture Removal">Furniture Removal</option>
          <option value="Appliance Removal">Appliance Removal</option>
          <option value="Garage Cleanout">Garage Cleanout</option>
          <option value="Estate / Hoarder Cleanout">Estate / Hoarder Cleanout</option>
          <option value="Hot Tub Removal">Hot Tub Removal</option>
          <option value="Construction Debris">Construction Debris</option>
          <option value="Yard Waste">Yard Waste</option>
          <option value="Other">Other</option>
        </select>

        <div>
          {/* <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-green-700/40 bg-green-50 px-4 py-4 text-sm font-semibold text-green-700 hover:bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            {fileCount > 0
              ? `${fileCount} photo${fileCount > 1 ? "s" : ""} selected`
              : "Upload Photos — Optional"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              multiple
              className="sr-only"
              onChange={handleFileChange}
            />
          </label> */}
        </div>

        <p className="text-center text-sm font-semibold text-gray-900">
          Most estimates returned in under 15 minutes during business hours.
        </p>

          {submitStatus === "error" && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-center text-sm font-semibold text-red-700 ring-1 ring-red-200">
              Something went wrong sending your request. Please try calling
              or texting us directly instead.
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="flex h-auto w-full items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-4 font-semibold text-white shadow transition-colors hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Send For Fast Estimate"}
          </button>
          <p className="text-center text-xs text-gray-500">
          By submitting, you're requesting a callback or text from a Rent A Bin team member about your quote — no automated messages,
          just a real person following up. Message and data rates may apply
          if we text you back.{" "}
          <button
            type="button"
            onClick={() => setLegalModal("privacy")}
            className="underline hover:text-green-700"
          >
            Privacy Policy
          </button>{" "}
          and{" "}
          <button
            type="button"
            onClick={() => setLegalModal("terms")}
            className="underline hover:text-green-700"
          >
            Terms &amp; Conditions
          </button>
          .
        </p>
        </form>
      )}

      

      <figure className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-green-700" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <TrustIcon key={i} type="star" className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
            Google Review
          </span>
        </div>
        <blockquote className="mt-2 text-sm text-gray-800">
          "I recently used this junk removal service, and i had a great experience. From the initial booking to the final pickup, the process was super fast. Requested a container Tuesday evening and had it parked on my driveway the very next morning! Pricing was fair and transparent, with no surprise fees at the end. I would definitely recommend this service to anyone needing reliable junk removal. I’d use them again in the future without hesitation!"
        </blockquote>
        <figcaption className="mt-2 flex items-center justify-between gap-3 text-xs">
          <span className="font-semibold">— Abigail Vargas</span>
          
           <a href="https://www.google.com/search?q=Affordable+Junk+Removal/Rent+A+Bin+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-700 hover:underline"
          >
            Read More Reviews →
          </a>
        </figcaption>
      </figure>
    </div>
    </div>
    
  );
}

export default QuoteCard;