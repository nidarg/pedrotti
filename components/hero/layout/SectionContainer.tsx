type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </section>
  );
}