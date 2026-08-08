import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import QuickAnalyzer from "../components/landing/quickAnalyzer/QuickAnalyzer";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import SecurityTrust from "../components/landing/SecurityTrust";
import LearningPreview from "../components/landing/LearningPreview";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import Assistant from "../components/assistant/Assistant";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickAnalyzer />
      <Features />
      <HowItWorks />
      <SecurityTrust />
      <LearningPreview />
      <CTASection />
      <Footer />
      <Assistant />
    </>
  );
}

export default Home;
