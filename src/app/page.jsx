import Header from '@/components/header';
import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import EducationSection from '@/components/sections/education-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
