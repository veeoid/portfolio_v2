import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isVisible: boolean;
}

// Project-specific preview content for CodeCue
const PROBLEM_TITLE = "Two Sum";
const PROBLEM_DESC =
  "Given an array of integers, return indices of the two numbers such that they add up to a specific target.";
const CODE_SNIPPET = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
}`;

const ASSISTANT_MESSAGE = `Use a hashmap to track seen values. Iterate once, check complement, O(n) time, O(n) space.`;

export default function CodeCuePreview({ isVisible }: Props) {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let charTimer: number | undefined;
    let phaseTimer: number | undefined;

    if (isVisible) {
      setTyped("");
      setPhase(0);

      // show problem briefly, then type assistant message
      phaseTimer = window.setTimeout(() => setPhase(1), 600);
      // start typing after problem shown
      const startTyping = () => {
        let idx = 0;
        charTimer = window.setInterval(() => {
          idx += 1;
          setTyped(ASSISTANT_MESSAGE.slice(0, idx));
          if (idx >= ASSISTANT_MESSAGE.length) {
            if (charTimer) window.clearInterval(charTimer);
          }
        }, 18);
      };

      phaseTimer = window.setTimeout(startTyping, 900);
    } else {
      setTyped("");
      setPhase(0);
    }

    return () => {
      if (charTimer) window.clearInterval(charTimer);
      if (phaseTimer) window.clearTimeout(phaseTimer);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ x: 20, opacity: 0, scale: 0.98 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-auto absolute right-0 top-0 z-30 w-80 rounded-lg border border-border bg-card/95 p-3 shadow-2xl"
        >
          <div className="border-border-subtle flex items-center gap-2 border-b pb-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-accent/20 to-background/10 p-1">
              <svg
                className="h-6 w-6 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 7h18M3 12h10M3 17h18"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">CodeCue</div>
              <div className="text-[11px] text-muted">AI assistant — contextual hints</div>
            </div>
          </div>

          <div className="mt-3">
            {/* Problem */}
            <div className="bg-surface rounded-md px-3 py-2 text-sm text-foreground">
              <div className="font-medium">
                Problem: <span className="text-accent">{PROBLEM_TITLE}</span>
              </div>
              <div className="mt-1 text-[12px] text-muted">{PROBLEM_DESC}</div>
            </div>

            {/* Code snippet */}
            <pre className="mt-2 max-h-28 overflow-hidden rounded bg-background/95 p-2 text-[11px] text-muted">
              {CODE_SNIPPET}
            </pre>

            {/* Assistant typing */}
            <motion.div className="bg-surface mt-2 rounded-md px-3 py-2 text-sm text-foreground">
              <div className="text-[12px] text-muted">Assistant</div>
              <div className="mt-1 min-h-[36px]">
                <span>{typed}</span>
                {typed.length < ASSISTANT_MESSAGE.length && (
                  <span className="animate-pulse text-muted">▌</span>
                )}
              </div>
            </motion.div>

            <div className="mt-2 flex gap-2">
              <a
                href="https://github.com/veeoid/Code-Cue"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border px-3 py-1 text-[12px] text-accent transition-colors hover:bg-background/50"
              >
                View Repo
              </a>
              <button className="rounded-sm bg-accent px-3 py-1 text-[12px] text-background">
                Open Demo
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
