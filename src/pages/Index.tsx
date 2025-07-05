
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import BusinessBenefitsSection from "@/components/BusinessBenefitsSection";
import FormSection from "@/components/FormSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <BusinessBenefitsSection />
      <FormSection />
      <TargetAudienceSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
