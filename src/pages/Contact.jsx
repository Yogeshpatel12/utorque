const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('images/bgimg.jpg')` }}
      />

      {/* Overlay Content */}
      <div className="relative min-h-screen bg-gray-900 bg-opacity-60 flex justify-center items-center">
        <div className="bg-transparent shadow-lg rounded-lg p-10 w-full mx-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side - Contact Info */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-white text-2xl hover:text-red-600 duration-300 transition-all font-bold mb-4">
                CONTACT US
              </h2>
              <h4 className="text-white text-2xl hover:text-red-600 duration-300 transition-all font-bold mb-4">
                Leave Your Message
              </h4>
              <p className="text-white mb-4 font-semibold hover:text-red-600 duration-300 transition-all">
                If you have any questions about the services we provide simply
                use the form below. We try and respond to all queries and
                comments within 24 hours.
              </p>

              {/* Social Media */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-2 hover:text-red-600 duration-300 transition-all">
                  Stay Connected
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/c6nzSj9v37N4vnya/?mibextid=qi2Omg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <i className="fa-brands fa-facebook hover:text-red-600 duration-300 transition-all"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <i className="fa-brands fa-twitter hover:text-red-600 duration-300 transition-all"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/uniquedcmotor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <i className="fa-brands fa-instagram hover:text-red-600 duration-300 transition-all"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/unique-dc-motor-brake-236860229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDq3oOrLvTEuHt6v3SxM6jA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <i className="fa-brands fa-linkedin hover:text-red-600 duration-300 transition-all"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="flex flex-col space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-white block text-sm font-medium"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-transparent hover:bg-[#0D1028] hover:text-white duration-300 transition-all mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-white block text-sm font-medium"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-transparent hover:bg-[#0D1028] hover:text-white duration-300 transition-all mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="text-black">
                  <label
                    htmlFor="phone"
                    className="text-white block text-sm font-medium"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className=" bg-transparent hover:bg-[#0D1028] hover:text-white duration-300 transition-all mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="text-black">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm font-medium"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="bg-transparent hover:bg-[#0D1028] hover:text-white duration-300 transition-all mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-white font-semibold text-black duration-300 transition-all py-3 rounded-md hover:bg-[#0D1028] hover:text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
