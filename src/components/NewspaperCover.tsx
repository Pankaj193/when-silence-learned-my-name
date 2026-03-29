import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NewspaperCover = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.25], [30, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.2, 0.4], [20, 0]);
  const authorOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.15]);
  const sunlightOpacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div ref={ref} className="relative min-h-[250vh]">
      {/* Sticky cover */}
      <div className="sticky top-0 h-screen overflow-hidden bg-paper paper-texture">
        {/* Sunlight wash */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            opacity: sunlightOpacity,
            background:
              "radial-gradient(ellipse at 30% 20%, hsl(40 70% 55% / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(38 80% 70% / 0.08) 0%, transparent 50%)",
          }}
        />

        {/* Darkening overlay for scroll */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-[3]"
          style={{
            opacity: overlayOpacity,
            background: "radial-gradient(ellipse at 40% 30%, hsl(40 70% 55% / 0.25) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-[4] flex flex-col items-center justify-center h-full px-6 md:px-12 max-w-4xl mx-auto">
          {/* Masthead area */}
          <div className="absolute top-8 left-0 right-0 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-ink-faint text-xs tracking-widest uppercase font-body">
              <span>LINKEDIN</span>
              <span>{dateStr}</span>
              <span>&nbsp;</span>
            </div>
            <div className="newspaper-rule mt-2 mb-1">
              <h2 className="masthead text-center text-3xl md:text-5xl py-2 tracking-wide leading-tight">
                Between September<br />& July
              </h2>
            </div>
            <div className="flex items-center justify-between text-ink-faint text-[10px] tracking-wider uppercase font-body mt-1">
              <span>Est. in silence</span>
              <span className="hidden sm:inline">————————</span>
              <span>10, SEPTEMBER</span>
            </div>
          </div>

          {/* Main title area */}
          <div className="text-center mt-16">
            <motion.h1
              className="font-display text-ink text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
              style={{ opacity: titleOpacity, y: titleY }}
            >
              When Silence
              <br />
              <span className="italic font-medium text-4xl sm:text-5xl md:text-7xl">Learned My Name</span>
            </motion.h1>

            <motion.div
              className="mt-6 md:mt-8"
              style={{ opacity: subtitleOpacity, y: subtitleY }}
            >
              <div className="w-16 h-px bg-ink/20 mx-auto mb-4" />
              <p className="font-display text-ink-light text-lg sm:text-xl md:text-2xl italic tracking-wide">
                ~ by Death
              </p>
            </motion.div>

            <motion.p
              className="mt-10 md:mt-14 font-body text-ink-faint text-sm tracking-[0.3em]"
              style={{ opacity: authorOpacity }}
            >
              &nbsp;
            </motion.p>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <span className="text-ink-faint text-[10px] tracking-[0.4em] uppercase font-body">
              Scroll to begin
            </span>
            <motion.div
              className="w-px h-8 bg-ink/20"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewspaperCover;
