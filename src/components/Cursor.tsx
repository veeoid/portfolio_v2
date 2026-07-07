import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("custom-cursor");

    let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let rx = cx, ry = cy;
    let hovering = false, pressing = false;

    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; };
    const onDown = () => { pressing = true; };
    const onUp = () => { pressing = false; };
    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    const bindInteractives = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindInteractives();
    const t = setTimeout(bindInteractives, 600);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      rx += (cx - rx) * 0.11;
      ry += (cy - ry) * 0.11;

      const dotSz = pressing ? 3 : 6;
      const ringSz = hovering ? 46 : pressing ? 12 : 28;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${cx - dotSz / 2}px,${cy - dotSz / 2}px)`;
        dotRef.current.style.width = dotSz + "px";
        dotRef.current.style.height = dotSz + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - ringSz / 2}px,${ry - ringSz / 2}px)`;
        ringRef.current.style.width = ringSz + "px";
        ringRef.current.style.height = ringSz + "px";
        ringRef.current.style.opacity = hovering ? "0.75" : "0.45";
        ringRef.current.style.borderWidth = hovering ? "1.5px" : "1px";
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent"
        style={{ willChange: "transform", transition: "width 0.1s, height 0.1s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent"
        style={{ willChange: "transform", transition: "width 0.18s, height 0.18s, opacity 0.18s, border-width 0.18s" }}
      />
    </>
  );
}
