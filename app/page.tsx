import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import About from "@/components/homes/home-1/About";
import Contact from "@/components/homes/home-1/Contact";
import Faq from "@/components/homes/home-1/Faq";
import Guide from "@/components/homes/home-1/Guide";
import Hero from "@/components/homes/home-1/Hero";
import Packages from "@/components/homes/home-1/Packages";
import Program from "@/components/homes/home-1/Program";
import Transformations from "@/components/homes/home-1/Transformations";
import "../public/css/coach.css";

export default function Home() {
  return (
    <div className="coach-theme">
      <Header1 />
      <Logo />
      <main id="page-content" className="page-content">
        <Hero />
        <Guide />
        <Program />
        <Transformations />
        <Packages />
        <About />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}
