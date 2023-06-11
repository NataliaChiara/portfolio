"use client";
import { Contacto, Hero, Proyectos } from "../../components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Hero />
      <Proyectos />
      <Contacto />
    </motion.main>
  );
}
