export default function ProfilDanSosmed() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Kolom Kiri - Video Profil */}
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Video Profil Fakultas Ilmu Komputer UNSRI
            </span>
          </h2>
          <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/fzjCVDDwBUs"
              title="Video Profil Fasilkom UNSRI"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

       {/* Kolom Kanan - Media Sosial */}
<div className="flex flex-col h-full">
  <h2 className="text-3xl font-extrabold mb-4">
    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
      Media Sosial Ormawa Fakultas
    </span>
  </h2>
  <ul className="space-y-3 flex-1">
    {[
      { name: "BEM Fasilkom - Instagram", url: "https://www.instagram.com/bemilkomunsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "DPM Fasilkom - Instagram", url: "https://www.instagram.com/dpmkmfasilkomunsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "Himpunan Sistem Informasi - Instagram", url: "https://www.instagram.com/himsiunsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "Himpunan Teknik Informatika - Instagram", url: "https://www.instagram.com/hmif.unsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "Himpunan Sistem Komputer - Instagram", url: "https://www.instagram.com/himasiskounsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "HIMDIKO - Instagram", url: "https://www.instagram.com/himdiko.unsri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    ].map((item, idx) => (
      <li
        key={idx}
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-medium hover:underline"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}
