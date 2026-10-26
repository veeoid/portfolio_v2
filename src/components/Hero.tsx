import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const ROLES = ["Software Engineer", "Backend Engineer", "Data Engineer", "Cloud Engineer"];

function useTypewriter(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const delay = deleting ? 42 : chars === word.length ? 2000 : 82;
    const t = setTimeout(() => {
      if (!deleting) {
        if (chars < word.length) setChars((c) => c + 1);
        else setDeleting(true);
      } else {
        if (chars > 0) setChars((c) => c - 1);
        else {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [chars, deleting, idx, words]);

  return words[idx].slice(0, chars);
}

function useMagnetic(strength = 0.38) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const THRESH = 90;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < THRESH) {
        const f = (1 - dist / THRESH) * strength;
        el.style.transform = `translate(${dx * f}px,${dy * f}px)`;
      } else {
        el.style.transform = "";
      }
    };
    const onLeave = () => { el.style.transform = ""; };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const role = useTypewriter(ROLES);
  const cta1 = useMagnetic();
  const cta2 = useMagnetic();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const updateScene = () => setShowScene(desktop.matches);
    updateScene();
    desktop.addEventListener("change", updateScene);
    return () => desktop.removeEventListener("change", updateScene);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 text-foreground"
    >
      {/* Drifting pastel atmosphere behind the sculpture */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl animate-blob-drift"
        style={{ background: "radial-gradient(circle, var(--aur-amber) 0%, transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-[-8%] h-[460px] w-[460px] rounded-full opacity-[0.16] blur-3xl animate-blob-drift"
        style={{
          background: "radial-gradient(circle, var(--aur-rose) 0%, transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] right-[18%] h-[380px] w-[380px] rounded-full opacity-[0.14] blur-3xl animate-blob-drift"
        style={{
          background: "radial-gradient(circle, var(--aur-lavender) 0%, transparent 60%)",
          animationDelay: "-12s",
        }}
      />

      {/* 3D retro computer */}
      {showScene && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <div
        className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-20 transition-all duration-1000 md:px-12 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex max-w-3xl flex-col">
          {/* Typewriter role */}
          <p className="section-label mb-6 min-h-[1.2em]">
            {role}
            <span className="ml-0.5 inline-block h-3 w-px animate-blink bg-accent align-middle" />
          </p>

          <h1 className="font-display aurora-text mb-8 pb-2 text-6xl font-bold leading-none tracking-tight md:text-8xl lg:text-9xl">
            Vismay <span className="block">Chaudhari</span>
          </h1>

          <div className="mb-8 h-px w-12 bg-accent" />

          <p className="mb-4 max-w-sm text-sm uppercase tracking-widest text-muted">
            Backend Engineering · Data Systems · Cloud
          </p>

          <p className="mb-8 max-w-[520px] text-base leading-relaxed text-muted md:text-lg">
            I’m a software engineer at Ecolab building reliable backend services and data
            pipelines. I’ve reduced data freshness lag from hours to under a minute and made
            analytical queries 30% faster.
          </p>

          <dl className="mb-10 grid max-w-[520px] grid-cols-3 gap-4 border-t border-border pt-5">
            <div>
              <dt className="text-xs leading-snug text-muted">Upstream systems</dt>
              <dd className="font-display text-xl font-semibold text-foreground md:text-2xl">10+</dd>
            </div>
            <div>
              <dt className="text-xs leading-snug text-muted">Data freshness</dt>
              <dd className="font-display text-xl font-semibold text-foreground md:text-2xl">&lt;1 min</dd>
            </div>
            <div>
              <dt className="text-xs leading-snug text-muted">Faster queries</dt>
              <dd className="font-display text-xl font-semibold text-foreground md:text-2xl">30%</dd>
            </div>
          </dl>

          {/* Magnetic CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              ref={cta1}
              href="#timeline"
              className="rounded-sm bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-shadow duration-200 hover:shadow-lg hover:shadow-accent/25"
              style={{ transition: "box-shadow 0.2s" }}
            >
              View Experience
            </a>
            <a
              ref={cta2}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border px-6 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Resume ↗
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/veeoid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vismay-chaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <div className="h-3 w-px bg-border" />
            <span className="text-xs text-muted">Seattle, WA</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <div className="h-10 w-px bg-foreground" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground">Scroll</span>
      </div>
    </section>
  );
}
