import FAB from "./components/FAB";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Team />
      </main>
      <Footer />
      <FAB />
    </div>
  );
}
