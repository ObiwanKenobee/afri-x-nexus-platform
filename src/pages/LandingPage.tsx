
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Programs from "@/components/landing/Programs";
import SuccessStories from "@/components/landing/SuccessStories";
import Features from "@/components/landing/Features";
import CallToAction from "@/components/landing/CallToAction";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-16">
        <Hero />
        <Features />
        <Programs />
        <SuccessStories />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
