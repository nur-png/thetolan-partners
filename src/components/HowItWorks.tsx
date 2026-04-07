import { ClipboardList, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Mandate Received",
    description:
      "We learn your organization, the role, the timeline, and what a successful placement looks like. No guesswork.",
  },
  {
    icon: Search,
    title: "Search Executed",
    description:
      "We access a 22,600+ proprietary candidate database built over 20 years, targeting PE-familiar executives who deliver from day one.",
  },
  {
    icon: CheckCircle,
    title: "Placement Delivered",
    description:
      "10-week average placement. 98% completion rate. Final payment tied entirely to a successful hire.",
  },
];

const HowItWorks = () => (
  <section className="bg-section-alt py-20 md:py-24">
    <div className="container">
      <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground text-center">
        How the Search Process Works
      </h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-14 rounded-full mx-auto" />

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-5">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
