"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "./motion-config";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
};

export function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      variants={prefersReducedMotion ? undefined : staggerContainer()}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
