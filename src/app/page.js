import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <main>
      <Header/>
      <StatsSection />
      <Testimonials/>
      <HowItWorks />
      <FAQSection />
      <Footer/>
    </main>
  );
}
