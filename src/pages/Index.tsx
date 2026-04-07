import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProofSection from "@/components/ProofSection";
import Testimonial from "@/components/Testimonial";
import TagSection from "@/components/TagSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const sectors = [
  "Healthcare Services", "Behavioral Health", "Health Technology", "Gastroenterology",
  "Fertility and IVF", "Hospice and Home Health", "Revenue Cycle Management",
  "Pharmaceutical Services", "Clinical Research", "Urgent Care", "Cardiology", "Physician Groups",
];

const roles = [
  "CEO", "CFO", "COO", "CHRO", "CTO", "VP Finance", "VP Operations",
  "VP Marketing", "Director of Finance", "Controller", "Director of Operations",
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <CredibilityBar />
    <ProblemSection />
    <HowItWorks />
    <ProofSection />
    <Testimonial />
    <TagSection title="Healthcare Sectors We Place In" tags={sectors} />
    <div className="border-t border-border" />
    <TagSection title="Non-Clinical Leadership Only" tags={roles} />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
