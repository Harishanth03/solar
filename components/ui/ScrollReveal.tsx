"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Enveloppe légère pour animer l’entrée des sections au défilement (page d’accueil).
 */
export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 72 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
