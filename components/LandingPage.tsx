// pages/index.tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinCommunitySection from "@/components/JoinCommunitySection";
import Footer from "@/components/Footer";

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <JoinCommunitySection />
            <Footer />
        </>
    );
};

export default LandingPage;
