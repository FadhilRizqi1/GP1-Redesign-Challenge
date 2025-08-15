import CardSection from "./CardSection";
import { ArrowRight } from "lucide-react";

export default function NewsSection2() {
  const cards = [
    { title: "Pelatihan/Sertifikasi", image: "/public/berita-8.png", link: "#" },
    { title: "Jurnal", image: "/public/berita-9.jpg", link: "#" },
    { title: "Scholarship", image: "/public/berita-10.png", link: "#" },
    { title: "Pengumuman Lainnya", image: "/public/bg-pengumuman.jpg", link: "#" },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-50">
      {/* Judul gradasi */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text inline-block">
          Upcoming Events
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-1 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform hover:scale-[1.02] transition duration-300"
          >
            {/* Card terakhir special */}
            {idx === cards.length - 1 ? (
              <div className="relative w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                  <ArrowRight className="w-10 h-10 mb-2" />
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <span className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium transition">
                    See More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
