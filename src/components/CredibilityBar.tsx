const accolades = [
  "Hunt Scanlon PE Power 100",
  "Forbes America's Best Executive Recruiting Firms",
  "Top 50 Healthcare Search Firms",
  "PE Power 75",
  "Financial Sixty",
];

const CredibilityBar = () => (
  <section className="bg-section-alt py-6 border-y border-border">
    <div className="container text-center">
      <p className="text-muted-foreground text-sm tracking-wide">
        {accolades.join(" · ")}
      </p>
    </div>
  </section>
);

export default CredibilityBar;
