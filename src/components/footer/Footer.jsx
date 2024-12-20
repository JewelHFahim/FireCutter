import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  const footerMenus = [
    {
      name: "About Us",
      path: "",
    },
    {
      name: "Contact Us",
      path: "",
    },
    {
      name: "Return Policy",
      path: "",
    },
    {
      name: "Terms & Condition",
      path: "",
    },
    {
      name: "Privacy Policy",
      path: "",
    },
    {
      name: "FAQ",
      path: "",
    },
  ];

  const social = [
    {
      icon: <IoLogoFacebook />,
      path: "",
    },
    {
      icon: <FaInstagram />,
      path: "",
    },
    {
      icon: <IoLogoWhatsapp />,
      path: "",
    },
  ];

  return (
    <div className="py-10 md:py-0 h-full md:h-[280px] bg-primary mt-14 flex flex-col justify-center items-center">

      <div className="w-[90vw] lg:w-[71vw] mx-auto md:h-1/2">
        <ul className="flex md:justify-center items-center h-full">
          <li className="flex flex-col md:flex-row  md:items-center gap-5 text-white text-sm md:text-base">
            {footerMenus.map((menu, idx) => (
              <Link
                href={menu.path}
                key={idx}
                className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] my-8 md:my-0 bg-orange-400" />

      <div className="w-[95vw] md:w-[90vw] lg:w-[71vw] mx-auto md:h-1/2 flex flex-col justify-center items-center  md:items-end md:justify-evenly gap-y-4 md:G-gap-y-0">
        <div className="flex items-center gap-5 text-3xl ">
          {social.map((item, idx) => (
            <Link
              href={item.path}
              className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
              key={idx}
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="text-xs text-white">© 2024, FIRE CUTTER CLOTHING LIMITED</p>
      </div>
    </div>
  );
};

export default Footer;
