import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Container from "./ui/Container";

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative w-full z-40">
      <nav className=" w-full fixed top-0 inset-x-0 py-2 backdrop-blur-sm "  style={{ backgroundColor: "#0D1028" }}>
        <Container>
          <div className="flex items-center sm:gap-20 justify-between lg:justify-normal">
            <Link
              to="/"
              className="font-bold text-xl sm:text-3xl block text-[#000000] hover:text-red-600 duration-300 transition-all"
            >
              <div className=""><img className="h-12 " src="/images/logo3.png"></img></div>
              
            </Link>
            <ul className="hidden lg:flex items-center justify-center gap-6 list-none text-lg font-semibold">
              {navLinks.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    to={link}
                    className="text-white hover:text-red-600 duration-300 transition-all"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="lg:hidden z-[100]" onClick={toggleMenu}>
              <span
                className={`fa-solid text-[#ffffff] ${
                  !isNavOpen ? "fa-bars -rotate-180" : "fa-xmark rotate-180"
                } transition-all text-2xl sm:text-3xl `}
              />
            </button>
          </div>
        </Container>
      </nav>
      <nav
        className={`lg:hidden ${
          isNavOpen ? "translate-x-0 " : "-translate-x-full"
        } transition-all duration-500  min-h-screen w-[80vw] max-w-[420px] bg-[#0D1028] text-white/85 fixed left-0 top-0 z-50`}
      >
        <div className="py-3 ">
          <Link
            to="/"
            className="block text-xl sm:text-3xl text-white font-bold text-center italic"
          >
            <div><img className="h-12 m-3" src="/images/logo3.png"></img></div>
          </Link>
        </div>
        <ul className=" space-y-6 list-none textbase sm:text-lg font-semibold p-8 ">
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <Link
                to={link}
                className=" border-b-[3px] border-b-transparent hover:border-b-white hover:text-red-600 duration-300 transition-all py-1 border-opacity-30 hover:border-opacity-100"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-16" />
    </header>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Applications",
    link: "/applications",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
