export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-subtle border-t bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <span className="font-display text-sm text-muted">© {year} Vismay Chaudhari</span>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {["About", "Work", "Skills", "Publications", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label === "About" ? "about" : label === "Work" ? "projects" : label.toLowerCase()}`}
              className="text-xs text-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#about" className="text-xs text-muted transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
