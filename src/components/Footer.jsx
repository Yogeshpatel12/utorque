const Footer = () => {
  return (
    <footer>
      <div
        style={{ backgroundColor: "#0D1028" }}
        className=" text-white py-8 px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Phone Section */}
          <div className="bg-white text-gray-900 p-4 rounded-md shadow-md hover:bg-[#0D1028] hover:text-white duration-300 transition-all">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-red-600">
                <i class="fa-solid fa-phone-volume"></i>
              </span>
              <span className="font-semibold">Phone</span>
            </div>
            <p className="mt-2">+91-8233268311</p>
            <p>+91-7976958311</p>
          </div>

          {/* Email Section */}
          <div className="bg-white text-gray-900 p-4 rounded-md shadow-md hover:bg-[#0D1028] hover:text-white duration-300 transition-all">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-red-600">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <span className="font-semibold">E-mail</span>
            </div>
            <p className="mt-2 ">unique.electro</p>
            <p>magneticbrake@gmail.com</p>
          </div>

          {/* Website Section */}
          <div className="bg-white text-gray-900 p-4 rounded-md shadow-md hover:bg-[#0D1028] hover:text-white duration-300 transition-all">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-red-600">
                <i class="fa-solid fa-globe"></i>
              </span>
              <span className="font-semibold">Website</span>
            </div>
            <a
              href="http://www.dcmotorbrake.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              www.dcmotorbrake.com
            </a>
          </div>
        </div>

        {/* Registered & Regional Offices */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registered Office */}
          <div>
            <h2 className="font-bold text-lg hover:text-red-600 duration-300 transition-all ">REGISTERED & HEAD OFFICE</h2>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">Unique DC Motor And Brakes.</p>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">+91-7976958311</p>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">+91-8233268311</p>
          </div>

          {/* Regional Office */}
          <div>
            <h2 className="font-bold text-lg hover:text-red-600 duration-300 transition-all">REGIONAL OFFICES</h2>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">Udaipur : Power House, Gudli (313024).</p>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">Mr. Durgesh Dangi</p>
            <p className="hover:text-red-600 font-semibold duration-300 transition-all">+91-8233268311, +91-7976958311</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/share/c6nzSj9v37N4vnya/?mibextid=qi2Omg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i class="fa-brands fa-facebook hover:text-red-600 duration-300 transition-all"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i class="fa-brands fa-twitter hover:text-red-600 duration-300 transition-all"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/unique-dc-motor-brake-236860229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDq3oOrLvTEuHt6v3SxM6jA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i class="fa-brands fa-linkedin hover:text-red-600 duration-300 transition-all"></i>
          </a>
          <a
            href="https://www.instagram.com/uniquedcmotor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i className="fa-brands fa-instagram hover:text-red-600 duration-300 transition-all"></i>
          </a>
        </div>
      </div>



      <div className="bg-[#0D1028] flex items-center justify-center pb-6"><img className="h-12" src="/images/logo3.png"></img></div>




      <div
        style={{ backgroundColor: "#0D1028" }}
        className="py-3 w-full text-white text-xs md:text-sm border-t-2 text-center space-y-2 pt-6 pb-8 "
      >
        <p className="">
          Copyright &copy;{" "}
          <span className="text-[#ffffff] font-semibold hover:text-red-600 duration-300 transition-all">
            {" "}
            UNIQUE DC MOTOR BRAKES AND CLUTHES.
          </span>
        </p>
        <p className="hover:text-red-600 font-semibold duration-300 transition-all">Made with Love by YOGESH PATEL.</p>
        <p className="hover:text-red-600 font-semibold duration-300 transition-all">All Rights Reserved | 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
