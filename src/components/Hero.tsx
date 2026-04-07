const stats = [
  { value: "98%", label: "Completion Rate" },
  { value: "10-Week", label: "Avg Placement" },
  { value: "80%+", label: "Repeat Business" },
  { value: "41", label: "Active PE Relationships" },
];

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero text-hero-foreground py-20 md:py-28">
      <div className="container">
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
          C-Suite and VP-Level Healthcare Placements. 98% Completion Rate. 10-Week Average.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
          We place non-clinical leadership for PE-backed healthcare portfolio companies across
          behavioral health, health tech, GI, fertility, hospice, home health, RCM, and healthcare services.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-8 bg-background text-foreground font-heading font-semibold text-sm tracking-wider uppercase px-8 py-3.5 rounded hover:bg-muted transition-colors"
        >
          Request an Introduction
        </button>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-hero-foreground/10 border border-hero-foreground/20 rounded px-5 py-4 text-center"
            >
              <div className="font-heading font-extrabold text-2xl md:text-3xl">{stat.value}</div>
              <div className="text-sm mt-1 opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
