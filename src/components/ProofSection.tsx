const cases = [
  {
    stat: "93 Placements — 4.5 Years",
    description: "Sustained partnership with a single PE firm across multiple portfolio companies.",
  },
  {
    stat: "18 Placements — 14 Months",
    description:
      "Full leadership buildout for one PE-backed platform. CEO, CFO, Controller, CHRO, Regional Directors.",
  },
  {
    stat: "42-Person Sales Organization",
    description:
      "Complete sales org built from scratch for a health tech platform commercializing AI.",
  },
  {
    stat: "3 Roles — Under 10 Weeks",
    description:
      "Two Board Members and a CRO placed concurrently for a telepsychiatry provider expanding across 4 states.",
  },
];

const ProofSection = () => (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground text-center">
        What We've Delivered for PE Portfolios
      </h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-14 rounded-full mx-auto" />

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div
            key={i}
            className="border border-border rounded p-8 hover:shadow-md transition-shadow bg-background"
          >
            <h3 className="font-heading font-bold text-xl text-primary mb-3">{c.stat}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
