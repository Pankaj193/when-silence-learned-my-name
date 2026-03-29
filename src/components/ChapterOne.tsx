import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const EmphasisLine = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DiaryEntry = ({
  date,
  children,
  delay = 0,
}: {
  date: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className="mb-14 md:mb-20"
    >
      <p className="font-display text-ink-faint text-sm tracking-[0.3em] uppercase mb-4">
        {date}
      </p>
      <div className="w-8 h-px bg-ink/15 mb-6" />
      <div className="font-body text-ink text-[15px] md:text-base leading-[1.95] space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

const ChapterOne = () => {
  return (
    <div id="introduction" className="relative bg-paper paper-texture">
      {/* Transition gradient from cover */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(180deg, hsl(40 70% 55% / 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-[4] max-w-2xl mx-auto px-6 md:px-12 pt-20 pb-32">
        {/* Chapter heading */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-ink-faint text-xs tracking-[0.5em] uppercase font-body block mb-3">
              Introduction
            </span>
            <div className="w-12 h-px bg-ink/20 mx-auto mb-5" />
            <h2 className="font-display text-ink text-3xl md:text-4xl font-bold tracking-tight">
              The Book Finds Her
            </h2>
            <div className="w-12 h-px bg-ink/20 mx-auto mt-5" />
          </div>
        </FadeInSection>

        {/* Opening poem */}
        <FadeInSection delay={0.2}>
          <blockquote className="text-center my-16 md:my-20 px-4">
            <div className="font-display text-ink-light text-lg md:text-xl italic leading-relaxed space-y-1">
              <p>"Some books are written</p>
              <p>to be read.</p>
              <p>Some are written to</p>
              <p>survive.</p>
              <p>A few are written so they</p>
              <p>can find the person they</p>
              <p>were always meant for."</p>
            </div>
          </blockquote>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="newspaper-rule-thin mb-14" />
        </FadeInSection>

        {/* Diary entries — single column */}
        <DiaryEntry date="September 3rd">
          <p className="drop-cap">
            She did not buy the book. It arrived without ceremony — left behind on a wooden café
            shelf, its cover soft from being held too often, its corners curved in the way books
            bend when someone carries them everywhere like a quiet habit.
          </p>
          <p>
            No author's name on the front. No summary on the back. Just a title written in pencil,
            slightly faded, as if it had been erased once and rewritten again.
          </p>
          <p>
            She opened it the way one opens something forgotten — carefully, without expectation.
          </p>
        </DiaryEntry>

        {/* The date — special moment */}
        <EmphasisLine className="my-12 md:my-16 text-center">
          <p className="font-display text-ink-light text-base md:text-lg italic">
            The first page was dated.
          </p>
          <p className="font-display text-ink text-3xl md:text-4xl font-bold mt-4 tracking-wider">
            <span className="moment-emphasis">September 3rd.</span>
          </p>
        </EmphasisLine>

        <DiaryEntry date="September 3rd — continued">
          <p>
            She almost closed it.
          </p>
          <p>
            Dated writing always felt too personal, like reading a stranger's heartbeat out loud.
          </p>
          <p>
            But something in the handwriting stopped her.
          </p>
          <p>
            Not neat.<br />
            Not careless.<br />
            <em>Honest.</em>
          </p>
          <p>
            She read the first line.<br />
            And then the second.
          </p>
          <p>
            By the third page, she understood something before she had words for it:
          </p>
        </DiaryEntry>

        {/* Climactic line */}
        <EmphasisLine className="my-12 md:my-16 text-center">
          <p className="font-display text-ink-light text-lg md:text-xl italic leading-relaxed">
            Whoever wrote this was not trying to be remembered.
          </p>
        </EmphasisLine>

        <EmphasisLine className="my-10 md:my-14 text-center">
          <p className="font-display text-ink text-2xl md:text-3xl font-bold tracking-tight">
            They were trying to stay.
          </p>
        </EmphasisLine>

        {/* Final beat */}
        <FadeInSection>
          <div className="text-center mt-16 md:mt-20">
            <p className="font-body text-ink-light text-base italic">
              She turned the page.
            </p>
          </div>
        </FadeInSection>

        {/* End ornament */}
        <FadeInSection delay={0.3}>
          <div className="flex items-center justify-center mt-20 gap-3">
            <div className="w-8 h-px bg-ink/15" />
            <span className="text-ink-faint text-xs">✦</span>
            <div className="w-8 h-px bg-ink/15" />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ChapterOne;
