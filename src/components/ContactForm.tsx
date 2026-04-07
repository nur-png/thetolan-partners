import { useState, type FormEvent } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with your form submission endpoint (e.g., Formspree, HubSpot, custom API)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-section-alt py-20 md:py-24">
      <div className="container max-w-2xl">
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground text-center">
          Have an Open Role? Let's Connect.
        </h2>
        <p className="text-center text-muted-foreground mt-3 mb-10">
          We work on a performance-based model. Final payment tied entirely to a successful placement.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <h3 className="font-heading font-bold text-xl text-primary">Thank you.</h3>
            <p className="text-muted-foreground mt-2">We will be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", label: "Your Name", type: "text", required: true },
              { name: "company", label: "Company Name", type: "text", required: true },
              { name: "role", label: "Role You Are Hiring For", type: "text", required: true },
              { name: "duration", label: "How Long Has This Role Been Open", type: "text", required: true },
              { name: "email", label: "Email Address", type: "email", required: true },
              { name: "phone", label: "Phone Number (optional)", type: "tel", required: false },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full border border-border bg-background rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              Submit
            </button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Your information is kept strictly confidential. We will be in touch within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
