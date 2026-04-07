const ProblemSection = () => (
  <section className="py-20 md:py-24">
    <div className="container max-w-3xl">
      <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
        Your Search Has Been Open Too Long.
      </h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-6 rounded-full" />
      <p className="text-lg leading-relaxed text-muted-foreground">
        Most PE-backed healthcare companies post a leadership role and wait. 30 days pass. 60 days.
        The job board fills with unqualified candidates. Internal efforts stall. Every day that role
        sits open costs your platform momentum, delays value creation, and frustrates your board.
      </p>
      <p className="text-lg leading-relaxed text-foreground font-semibold mt-4">
        We were built for exactly this moment.
      </p>
    </div>
  </section>
);

export default ProblemSection;
