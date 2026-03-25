import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import LogisticMethod from "@/components/LogisticMethod";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative overflow-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <div className="bg-transparent">
            <LogisticMethod />
        </div>
        <div className="bg-transparent">
            <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
