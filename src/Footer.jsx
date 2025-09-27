import { useState } from "react"

function Footer() {
  const [showPopover, setShowPopover] = useState(false)

  return (
    <div id="footer" className="flex flex-col items-center justify-between text-white text-center py-10 bg-green-600" >
      
      <h2 className="text-3xl font-bold py-5">Contact Us</h2>
      <div className="flex sm:flex-row flex-col items-center justify-center">
        <div className="m-5 " >
            <p className="font-bold p-3">Email: <a className="font-bold hover:text-blue-600 transition-colors" href="mailto:rentabin24@gmail.com">rentabin24@gmail.com</a></p>
            <p className="font-bold p-3 text-start ">Phone: <a className="font-bold hover:text-blue-600 transition-colors" href="tel:+12094479020">(209) 447-9020</a></p>
        </div>

        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-white lg:my-8" />

        <div className="m-2 bg-white ">
            <img src="/log.png" className="w-32" alt="Rent A Bin LLC Logo" />
        </div>
        
        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-white lg:my-8" />

        <div className="m-4 text-end ">
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                
                <a 
                  className="w-16 p-3 hover:opacity-80 transition-opacity" 
                  href="https://m.facebook.com/p/Affordable-Junk-Removal-100041038487400/?mibextid=LQQJ4d&wtsid=rdr_0xw4v2TQRNgBvrgj5&_rdr" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img src="/facebook.png" alt="facebook" />
                </a>
                <a 
                  className="w-16 p-3 hover:opacity-80 transition-opacity" 
                  href="https://instagram.com/affordablejunkremoval247?igshid=MzMyNGUyNmU2YQ==" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img src="/instagram.png" alt="instagram" />
                </a>
                <a 
                  className="w-16 p-3 hover:opacity-80 transition-opacity" 
                  href="https://www.tiktok.com/@anthonyrodriguez587338?_t=8h0YNxR8N83&_r=1" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img src="/tik-tok.png" alt="tik tok" />
                </a>
            </div>
            <p className="p-3 text-md  sm:text-center">&copy; {new Date().getFullYear()} Rent A Bin LLC</p>
            
            <div className="relative inline-block">
              <button 
                className="text-green-600 hover:text-white transition-colors cursor-pointer"
                onClick={() => setShowPopover(!showPopover)}
              >
                Icons Provided By
              </button>
              
              {showPopover && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowPopover(false)}
                  ></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max">
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200"></div>
                    <ul className="text-left text-sm">
                      <li key="air-mattress" className="list-disc p-1 ml-4">
                       <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/air-mattress" title="air mattress icons" target="_blank" rel="noopener noreferrer">Air mattress icons created by Freepik - Flaticon</a>
                      </li>
                      <li key="furniture" className="list-disc p-1 ml-4">
                        <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/furniture" title="furniture icons" target="_blank" rel="noopener noreferrer">Furniture icons created by small.smiles - Flaticon</a>
                      </li>
                      <li key="appliances" className="list-disc p-1 ml-4">
                        <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/appliances" title="appliances icons" target="_blank" rel="noopener noreferrer">Appliances icons created by Uniconlabs - Flaticon</a>
                      </li>
                      <li key="yard" className="list-disc p-1 ml-4">
                        <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/yard" title="yard icons" target="_blank" rel="noopener noreferrer">Yard icons created by Freepik - Flaticon</a>
                      </li>
                      <li key="screen" className="list-disc p-1 ml-4">
                        <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/screen" title="screen icons" target="_blank" rel="noopener noreferrer">Screen icons created by Freepik - Flaticon</a>
                      </li>
                      <li key="construction" className="list-disc p-1 ml-4">
                        <a className="text-blue-600 hover:text-blue-800" href="https://www.flaticon.com/free-icons/construction" title="construction icons" target="_blank" rel="noopener noreferrer">Construction icons created by Eucalyp - Flaticon</a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer