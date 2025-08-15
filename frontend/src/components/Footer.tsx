import { FaMapLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#272727] font-poppins px-4 sm:px-8 lg:px-16 py-8 text-white text-sm"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-6">
        
        {/* Kolom 1 */}
        <div className="w-full lg:w-1/3 lg:pr-6">
          <div className="flex gap-3 items-center">
            <img src="/logo-unsri.png" alt="logo-unsri" className="w-12 h-12" />
            <div>
              <h1 className="text-base font-medium">
                Faculty of Computer Science
              </h1>
              <p className="text-gray-400 text-xs">Universitas Sriwijaya</p>
            </div>
          </div>
          <div className="space-y-4 mt-4 text-xs">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FaMapLocationDot className="size-4 text-gray-300 flex-shrink-0" />
                <h1 className="font-semibold">Kampus Indralaya</h1>
              </div>
              <p className="text-gray-400 pl-6 leading-snug">
                Jl. Palembang - Prabumulih KM.32 Kabupaten Ogan Ilir, Sumatera
                Selatan, Indonesia
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FaMapLocationDot className="size-4 text-gray-300 flex-shrink-0" />
                <h1 className="font-semibold">Kampus Palembang</h1>
              </div>
              <p className="text-gray-400 pl-6 leading-snug">
                Jl. Srijaya Negara Bukit Besar Palembang 30139
              </p>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-8 lg:pl-6 lg:border-l border-gray-700">
          <div className="w-full sm:w-1/2">
            <h1 className="text-lg font-medium mb-3">About</h1>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Sejarah Fakultas</li>
              <li className="hover:text-gray-300 cursor-pointer">Visi & Misi</li>
              <li className="hover:text-gray-300 cursor-pointer">Struktur Organisasi Fasilkom</li>
              <li className="hover:text-gray-300 cursor-pointer">Kerja Sama</li>
              <li className="hover:text-gray-300 cursor-pointer">Grup Riset</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2">
            <h1 className="text-lg font-medium mb-3">Kontak</h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-gray-300">
                <MdMailOutline className="size-4" />
                <a href="mailto:humas@ilkom.unsri.ac.id" className="hover:underline">
                  humas@ilkom.unsri.ac.id
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300">
                <FaInstagram className="size-4" />
                <a href="#" className="hover:underline">@humasfasilkomunsri</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300">
                <FaFacebook className="size-4" />
                <a href="#" className="hover:underline">humasfasilkomunsri</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300">
                <FaYoutube className="size-4" />
                <a href="#" className="hover:underline">FASILKOM UNSRI TV</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-300">
                <LuPhoneCall className="size-4" />
                <span>Telp: (0711) 379249</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-6 border-t border-gray-700 pt-3">
        © 2025 Fakultas Ilmu Komputer - Universitas Sriwijaya
      </div>
    </footer>
  );
}
