import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Berita from "./components/Berita";
import NewsSection1 from "./components/NewsSection1";
import NewsSection2 from "./components/NewsSection2";
import Department from "./components/Department";
import ProfilDanSosmed from "./components/ProfilDanSosmed"; 
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Berita />
      <NewsSection1 />
      <NewsSection2 />
      <Department />
      <ProfilDanSosmed /> 
      <Footer />
    </>
  );
}
