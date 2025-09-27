import { Link } from "react-router-dom"
import serviceData from "./serviceData"

function Home() {

    const displayData = serviceData.map((service, index) => {
        const { image, title, text } = service
        return (
            <Link 
                to='/services' 
                key={index} 
                className="flex flex-col m-2 rounded sm:p-5 items-center p-2 hover:bg-gray-50 transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 transform"
            >
                <picture className="justify-center">
                    <img src={image} className="w-20" alt={`${title} service`} />
                </picture>
                <div>
                    <h3 className="py-3 font-bold text-2xl text-green-500">{title}</h3>
                    <p className="text-2xl text-slate-800">{text}</p>
                </div>
            </Link>
        )
    })

    return (
        <div id="home" className="bg-white mt-10">
            <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" 
              style={{backgroundImage: "url('/RentABinBinLogo 2.jpg')"}}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              
              <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                      Professional Junk Removal
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                      Fast, Reliable & Affordable Service
                  </p>
                  <Link 
                      to="/services" 
                      className="inline-block text-lg bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 hover:shadow-xl transform hover:scale-105 shadow-lg"
                  >
                      Book Now
                  </Link>
              </div>
            </div>

            <div className="bg-green-50 p-8 md:p-12 rounded-tr-[0px] rounded-br-[0px] max-w-3xl mx-auto my-12 transform -rotate-1 border-l-8 border-green-500 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-tight">
                    "No Stress<br/>
                    <span className="text-green-700 ml-4">If There's No Mess"</span>
                </h1>
            </div>

            <div className="flex flex-col">
                <h2 className="m-4 pt-4 text-green-500 text-4xl font-bold">About Us</h2>
                <p className="m-4 text-2xl text-slate-800">
                Rent A Bin offers a convenient and reliable dumpster rental service, providing customers with a hassle-free solution for their waste disposal needs. Our dumpster rental and trailer rental services allow individuals and businesses to efficiently manage their waste, whether it's for a home renovation project, construction site cleanup, or any other large-scale endeavor. 
                </p>
                <p className="m-4 pt-10 text-2xl text-slate-800">
                With Rent A Bin, you can easily dispose of debris, trash, and unwanted items, making cleanup a breeze. Our Affordable Junk Removal option ensures that you can tackle your project without breaking the bank or your back. Experience the convenience and affordability of Rent A Bin's dumpster rental service for all your waste management needs.
                </p>
            </div>

            <div id="services" className="text-gray-800 py-16">
                <div id="text" className="flex flex-col items-center">
                    <span className="text-xl font-semibold mb-5 text-green-500">Our Services</span>
                    <h2 className="text-4xl font-bold m-2 text-center mb-5">We Provide Hassle-free Junk Removal Services</h2>
                    <p className="m-4 text-2xl text-slate-800">Our services cover residential/commercial trailer and dumpster rentals. We also offer our Junk Removal Services for an additional fee. Home, office, warehouse and construction site cleanups to help you get rid of your unwanted items.</p>
                </div>
                <ul id="group" className="flex flex-col sm:grid sm:grid-cols-3">
                    {displayData}
                </ul>
            </div>

            <div id="about" className="m-5">
                <div className="w-full mb-10 lg:mb-0">
                    <h2 className="mb-4 text-3xl font-bold text-gray-700">
                        Our Business
                    </h2>
                    <ul className="mb-10">
                        <li className="flex items-center mb-4 font-bold text-base text-gray-600">
                            <span className="mr-3 text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Family Owned and Operated
                        </li>
                        <li className="flex items-center mb-4 font-bold text-base text-gray-600">
                            <span className="mr-3 text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Value for your money
                        </li>
                        <li className="flex items-center mb-4 font-bold text-base text-gray-600">
                            <span className="mr-3 text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.3 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            24/7 Services 
                        </li>
                        <li className="flex items-center mb-4 font-bold text-base text-gray-600">
                            <span className="mr-3 text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Servicing 209 and Surrounding Areas!
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px) rotate(-1deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) rotate(-1deg);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
            `}</style>
        </div>
    )
}

export default Home