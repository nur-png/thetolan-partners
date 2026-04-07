import { Quote } from "lucide-react";

const Testimonial = () => (
  <section className="bg-hero text-hero-foreground py-16 md:py-20">
    <div className="container max-w-3xl text-center">
      <Quote className="w-10 h-10 mx-auto mb-6 opacity-40" />
      <blockquote className="text-xl md:text-2xl leading-relaxed font-heading font-medium italic">
        "An invaluable partner for critical searches. I highly recommend this firm to any healthcare
        organization seeking a search partner that combines deep expertise with outstanding service."
      </blockquote>
      <p className="mt-6 text-sm uppercase tracking-widest opacity-70">
        CEO, Telepsychiatry Provider — 4 States
      </p>
    </div>
  </section>
);

export default Testimonial;
