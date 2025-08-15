export default function NewsSection1() {
  const cards = [
    { 
      title: "Universitas Sriwijaya Sambut 8 Mahasiswa Mobility Program dari Universiti Teknikal Malaysia Melaka", 
      image: "/berita-5.jpeg", 
      link: "#" 
    },
    { 
      title: "Fakultas Ilmu Komputer bekerja sama dengan JAIST melalui JUMP (JAIST Partner University Master Connection Program)", 
      image: "/berita-6.jpeg", 
      link: "#" 
    },
    { 
      title: "PEMGUMUMAN! Pengisian KRS Semester Ganjil 2025/2026", 
      image: "/berita-4.jpeg", 
      link: "#" 
    },
    { 
      title: "Universitas Sriwijaya (Unsri) melepas 16 orang mahasiswa asing yang berasal dari Universiti Teknikal Malaysia Melaka (UTeM)", 
      image: "/berita-7.jpg", 
      link: "#" 
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8 bg-white">
      {/* Judul */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Kemahasiswaan & Kerjasama
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></span>
        </h2>
      </div>

      {/* Card List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-3 flex-1">{card.title}</h3>
              <a
                href={card.link}
                className="mt-auto inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                See More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
