import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-poppins shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#272727] text-white flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img
            src="logo-unsri.png"
            alt="logo-unsri"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <div className="leading-tight">
            <h1 className="font-bold text-base sm:text-lg">
              Faculty of Computer Science
            </h1>
            <p className="text-xs sm:text-sm">Universitas Sriwijaya</p>
          </div>
        </div>

        {/* Social Icons & Search */}
        <div className="flex items-center gap-5">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          <div className="flex items-center border border-white rounded-full pl-3 pr-2 py-1">
            <IoSearch className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-300 focus:outline-none w-24 sm:w-32"
            />
          </div>
        </div>
      </div>

      {/* Menu Bar */}
<div className="bg-[#F4B619] text-black">
  <div className="px-4 sm:px-8 lg:px-16">
    {/* Desktop Menu */}
    <ul className="hidden lg:flex justify-center items-center text-sm font-medium py-3">
      <li className="px-4 cursor-pointer font-semibold">Home</li>
      <li className="px-4 cursor-pointer hover:underline">Profil</li>
      <li className="px-4 cursor-pointer hover:underline">Program Studi & Unit</li>
      <li className="px-4 cursor-pointer hover:underline">Dosen & Pegawai</li>
      <li className="px-4 cursor-pointer hover:underline">PPID</li>
      <li className="px-4 cursor-pointer hover:underline">Z I</li>
      <li className="px-4 cursor-pointer hover:underline">E-PPT</li>
    </ul>

    {/* Mobile Menu Button */}
    <div className="lg:hidden flex justify-end py-2">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-black focus:outline-none"
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
    </div>
  </div>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col items-start px-4 pb-4 gap-3 font-medium bg-[#F4B619]">
            <li className="font-semibold">Home</li>
            <li>Profil</li>
            <li>Program Studi & Unit</li>
            <li>Dosen & Pegawai</li>
            <li>PPID</li>
            <li>Z I</li>
            <li>E-PPT</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
