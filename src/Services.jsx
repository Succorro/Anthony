function Services() {
  return (
    <div className="bg-white text-gray-800 p-4 py-16">
      <section className="overflow-hidden bg-white pt-10 pb-12 lg:pt-16 lg:pb-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <span className="mb-3 block text-lg font-semibold text-green-500 tracking-wide uppercase">
                  Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl leading-tight">
                  Pricing Options
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We offer Trailer and Dumpster rentals, with affordable rates shown below! Special rates and discounts available.
                </p>
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Have any questions? Give us a call:
                  </h3>
                  <a 
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300" 
                    href="tel:+12094479020"
                  >
                    (209) 447-9020
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 justify-center">
            {/* Trailer Rentals Card */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-2/5">
              <div className="mb-10 overflow-hidden rounded-2xl bg-white py-12 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-8">
                  <span className="mb-3 block text-xl font-semibold text-green-500 uppercase tracking-wide">
                    Trailer Rentals
                  </span>
                  <p className="text-gray-600 mb-4">Available for smaller loads</p>
                  {/* <div className="flex items-baseline justify-center">
                    <span className="text-gray-500 text-lg">Starting at</span>
                  </div>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-3xl font-bold text-gray-800">$</span>
                    <span className="text-5xl font-bold text-gray-800">299</span> */}
                    {/* <span className="text-xl text-gray-500">.00</span> */}
                  {/* </div> */}
                </div>

                <div className="mb-8">
                  <h5 className="mb-4 text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    What's Included:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Trailer Rental Included</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Dropoff, pickup and dump fees</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Optional Junk Removal Services</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h6 className="font-semibold text-gray-800 mb-2">Important Notes:</h6>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>No hazardous materials</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>No dirt or concrete</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>$20 fee per appliance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href="tel:+12094479020"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Get Quote
                  </button>
                </a>
              </div>
            </div>

            {/* Dumpster Rentals Card */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-2/5">
              <div className="mb-10 overflow-hidden rounded-2xl bg-white py-12 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
                {/* Popular Badge */}
                <div className="absolute top-0 right-6 bg-green-500 text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
                  Popular
                </div>

                <div className="text-center mb-8">
                  <span className="mb-3 block text-xl font-semibold text-green-500 uppercase tracking-wide">
                    Dumpster Rentals
                  </span>
                  <p className="text-gray-600 mb-4">Available for larger loads</p>
                  {/* <div className="flex items-baseline justify-center">
                    <span className="text-gray-500 text-lg">Starting at</span>
                  </div>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-3xl font-bold text-gray-800">$</span>
                    <span className="text-5xl font-bold text-gray-800">499</span>
                    {/* <span className="text-xl text-gray-500">.00</span> */}
                  {/* </div> */}
                </div>

                <div className="mb-8">
                  <h5 className="mb-4 text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    What's Included:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Size options: 10, 15, 20yd or 30yd</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Dumpster Rental Included</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Optional Junk Removal Services</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h6 className="font-semibold text-gray-800 mb-2">Important Notes:</h6>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>No hazardous materials</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>No dirt or concrete</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>$20 fee per appliance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href="tel:+12094479020"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Quote
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;