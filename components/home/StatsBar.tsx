"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 80, suffix: "+", label: "Clients Served" },
  { value: 5, suffix: "", label: "Product Categories" },
  { value: 100, suffix: "%", label: "Safety Compliant" },
];

// Animated counter hook
const useCountUp = (end: number, duration: number, inView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, inView]);

  return count;
};

interface StatItemProps {
  stat: Stat;
  inView: boolean;
}

const StatItem = ({ stat, inView }: StatItemProps) => {
  const count = useCountUp(stat.value, 2, inView);

  return (
    <div className="flex flex-col items-center gap-1 py-6 px-4">
      <span className="font-heading font-bold text-4xl md:text-5xl text-idc-orange">
        {count}
        {stat.suffix}
      </span>
      <span className="text-idc-sky/80 text-sm font-medium tracking-wide uppercase">
        {stat.label}
      </span>
    </div>
  );
};

const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-idc-navy border-y border-idc-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-idc-sky/20"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
