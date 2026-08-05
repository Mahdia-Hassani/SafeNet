import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import QuickAnalyzer from "../components/landing/quickAnalyzer/QuickAnalyzer";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import SecurityTrust from "../components/landing/SecurityTrust";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickAnalyzer />
      <Features />
      <HowItWorks />
      <SecurityTrust />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
