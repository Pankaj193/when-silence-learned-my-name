import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const months = [
  { id: "introduction", label: "Intro" },
  { id: "september", label: "Sep" },
  { id: "october", label: "Oct" },
  { id: "november", label: "Nov" },
  { id: "december", label: "Dec" },
  { id: "january", label: "Jan" },
  { id: "february", label: "Feb" },
  { id: "march", label: "Mar" },
  { id: "april", label: "Apr" },
  { id: "may", label: "May" },
  { id: "june", label: "Jun" },
  { id: "july", label: "Jul" },
];

const BottomTimeline = () => {
  const [active, setActive] = useState("september");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show timeline after scrolling past the cover
      setVisible(window.scrollY > window.innerHeight * 0.8);

      // Determine which section is in view
      for (let i = months.length - 1; i >= 0; i--) {
        const el = document.getElementById(months[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActive(months[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center"
      initial={{ y: 60, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="px-6 py-3 backdrop-blur-md rounded-t-xl"
        style={{
          background: "hsl(30 15% 10% / 0.85)",
          border: "1px solid hsl(35 15% 25% / 0.4)",
          borderBottom: "none",
        }}
      >
      <div className="flex items-center gap-1 sm:gap-2">
        {months.map((m) => {
          const isActive = active === m.id;
          return (
            <button
              key={m.id}
              onClick={() => scrollTo(m.id)}
              className="relative px-1.5 sm:px-2.5 py-1 text-[10px] sm:text-xs tracking-wider uppercase font-body transition-colors duration-300 cursor-pointer"
              style={{
                color: isActive
                  ? "hsl(38 40% 75%)"
                  : "hsl(30 10% 45%)",
              }}
            >
              {m.label}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "hsl(38 40% 65%)" }}
                  layoutId="timeline-dot"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>
      </div>
    </motion.nav>
  );
};

export default BottomTimeline;
