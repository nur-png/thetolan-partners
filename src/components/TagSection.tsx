interface TagSectionProps {
  title: string;
  tags: string[];
}

const TagSection = ({ title, tags }: TagSectionProps) => (
  <section className="py-16 md:py-20">
    <div className="container text-center">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">{title}</h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-10 rounded-full mx-auto" />
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-border bg-section-alt text-foreground text-sm font-medium px-5 py-2.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TagSection;
