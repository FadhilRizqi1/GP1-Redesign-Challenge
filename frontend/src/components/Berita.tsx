import React from "react";

export default function Berita() {
  const berita = [
    {
      img: "/public/berita-3.png",
      title: "Kegiatan Seminar Nasional AI 2025",
      desc: "Seminar Nasional membahas perkembangan Artificial Intelligence di Indonesia.",
      link: "https://ilkom.unsri.ac.id/kuliah-umum-ai-and-research-trends-oleh-dr-suhaila-binti-mohammad-yusuf-universiti-teknologi-malaysia/",
    },
    {
      img: "/public/berita-1.png",
      title: "Wisuda Periode I Tahun 2025",
      desc: "Fasilkom Unsri mewisuda ratusan mahasiswa dari berbagai program studi.",
      link: "#",
    },
    {
      img: "/public/berita-4.jpeg",
      title: "Pengisian KRS Semester Ganjil 2025/2026",
      desc: "Mahasiswa di wajibkan untuk mengisi KRS sesuai dengan jadwal yang telah di tetapkan",
      link: "#",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-50">
  <div className="text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        Berita Utama
      </span>
      {/* Garis bawah dekoratif */}
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></span>
    </h2>
    <p className="mt-4 text-gray-600 text-sm sm:text-base">
      Informasi terbaru seputar kegiatan dan pengumuman di Fasilkom Unsri
    </p>
  </div>

  {/* Grid Berita */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {berita.map((item, idx) => (
      <div
        key={idx}
        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
          <a
            href={item.link}
            className="inline-block bg-[#F4B619] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
