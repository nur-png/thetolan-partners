const Navbar = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <span className="font-heading font-bold text-sm tracking-wide text-foreground uppercase">
          Healthcare Executive Search — PE Specialists
        </span>
        <button
          onClick={scrollToContact}
          className="hidden sm:inline-flex bg-primary text-primary-foreground font-heading text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          Request an Introduction
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
