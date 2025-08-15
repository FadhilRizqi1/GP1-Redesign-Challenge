import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/fasilkomlayo.jpeg",
    "/fasilkombukit.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Ganti gambar setiap 4 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="font-poppins bg-[#3A3A3A]">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex justify-center items-center transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Konten Tengah */}
        <div className="relative flex flex-col gap-8 justify-center text-center items-center px-6">
          {/* Logo-Logo */}
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center items-center">
            <img src="logo-unsri.png" alt="logo UNSRI" className="w-16" />
            <img
              src="logo-lam-infokom.png"
              alt="logo LAM INFOKOM"
              className="h-10 sm:h-12"
            />
            <img
              src="logo-ppid.png"
              alt="logo PPID"
              className="h-10 sm:h-12"
            />
          </div>

          {/* Judul */}
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            UNIVERSITAS SRIWIJAYA
          </h1>

          {/* Subjudul */}
          <div className="bg-[#F5CE44] text-[#272727] px-4 py-2 w-fit text-lg sm:text-xl font-bold rounded-full">
            <h2>FAKULTAS ILMU KOMPUTER</h2>
          </div>

          {/* Deskripsi */}
          <p className="text-white text-base sm:text-lg max-w-2xl">
            Fakultas Ilmu Komputer Universitas Sriwijaya berawal dari
            Program Diploma Komputer (PDK) yang resmi berdiri pada 5
            September 2003, menjadi pionir pendidikan ICT di Unsri.
            Gagasan pendiriannya telah ada sejak 1985 melalui pelatihan
            komputer di Pusat Komputer Unsri, disertai penyiapan dosen
            melalui studi lanjut di bidang teknologi informasi, baik di
            dalam maupun luar negeri.
          </p>
        </div>
      </div>
    </section>
  );
}
