// pages/index.tsx
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinCommunitySection from "@/components/JoinCommunitySection";
import Footer from "@/components/Footer";

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <JoinCommunitySection />
        </>
    );
};

export default LandingPage;
