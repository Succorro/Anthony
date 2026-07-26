import { useState } from "react";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://m.facebook.com/p/Affordable-Junk-Removal-100041038487400/?mibextid=LQQJ4d&wtsid=rdr_0xw4v2TQRNgBvrgj5&_rdr",
    icon: "/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/affordablejunkremoval247?igshid=MzMyNGUyNmU2YQ==",
    icon: "/instagram.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@anthonyrodriguez587338?_t=8h0YNxR8N83&_r=1",
    icon: "/tik-tok.png",
  },
];

const ICON_CREDITS = [
  { key: "air-mattress", href: "https://www.flaticon.com/free-icons/air-mattress", label: "Air mattress icons created by Freepik - Flaticon" },
  { key: "furniture", href: "https://www.flaticon.com/free-icons/furniture", label: "Furniture icons created by small.smiles - Flaticon" },
  { key: "appliances", href: "https://www.flaticon.com/free-icons/appliances", label: "Appliances icons created by Uniconlabs - Flaticon" },
  { key: "yard", href: "https://www.flaticon.com/free-icons/yard", label: "Yard icons created by Freepik - Flaticon" },
  { key: "screen", href: "https://www.flaticon.com/free-icons/screen", label: "Screen icons created by Freepik - Flaticon" },
  { key: "construction", href: "https://www.flaticon.com/free-icons/construction", label: "Construction icons created by Eucalyp - Flaticon" },
];

function Footer() {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <footer id="footer" className="bg-green-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Affordable Junk Removal
            </h2>
            <p className="mt-1 text-sm font-semibold text-green-200">
              Rent A Bin LLC
            </p>
            <p className="mt-3 text-sm leading-relaxed text-green-100">
              Family-owned junk removal, dumpster, and trailer rental service
              serving the 209 and surrounding areas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-200">
              Contact Us
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              <p>
                <a
                  href="mailto:rentabin24@gmail.com"
                  className="font-semibold transition-colors hover:text-green-200"
                >
                  rentabin24@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+12094479020"
                  className="font-semibold transition-colors hover:text-green-200"
                >
                  (209) 447-9020
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-200">
              Follow Us
            </h3>
            <div className="mt-3 flex justify-center gap-4 sm:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                >
                  <img src={social.icon} alt="" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/15 pt-6 text-xs text-green-200 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Rent A Bin LLC. All rights reserved.</p>

          <div className="relative">
            <button
              type="button"
              className="cursor-pointer underline-offset-2 transition-colors hover:text-white hover:underline"
              onClick={() => setShowPopover((prev) => !prev)}
              aria-expanded={showPopover}
            >
              Icons Provided By
            </button>

            {showPopover && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowPopover(false)}
                />
                <div className="absolute bottom-full right-0 z-20 mb-2 w-64 rounded-lg border border-gray-200 bg-white p-3 text-left shadow-lg sm:left-1/2 sm:right-auto sm:-translate-x-1/2">
                  <ul className="space-y-1.5 text-xs">
                    {ICON_CREDITS.map((credit) => (
                      <li key={credit.key} className="ml-4 list-disc">
                        <a
                          href={credit.href}
                          title={`${credit.key} icons`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:text-green-800 hover:underline"
                        >
                          {credit.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;