
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ScholarshipsPreview from "@/components/home/ScholarshipsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ScholarshipsPreview />
      <StatisticsSection />
      <TestimonialsSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
