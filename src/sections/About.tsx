

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  { title: "Event Management", desc: "Seminars, workshops, expos & flagship SAGA events at UCP" },
  { title: "Student Engagement", desc: "Connecting societies, departments & students across campus" },
  { title: "Digital System", desc: "Fully online registration, approvals & event tracking system" },
];

const stats = [
  { label: "Events Organized", value: "120+" },
  { label: "Active Members", value: "50+" },
  { label: "Societies Connected", value: "25+" },
  { label: "Annual Flagship Events", value: "SAGA" },
];

const tags = [
  "UCP Events",
  "SAGA Festival",
  "Workshops",
  "Seminars",
  "Society Collaboration",
  "Leadership",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 text-white">
      <div className="container max-w-6xl mx-auto text-center px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold"
        >
          About <span className="text-blue-400">UCP Bravo Club</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white/60 mt-6 text-lg max-w-3xl mx-auto"
        >
          The Bravo Club at the University of Central Punjab (UCP) is the central hub of
          student-driven event management. We empower societies, enhance campus engagement,
          and deliver high-impact academic and cultural experiences including seminars,
          workshops, exhibitions, and the iconic SAGA festival.
        </motion.p>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            width={1000}
            height={550}
            unoptimized
            alt="UCP Campus Event"
            className="rounded-2xl border border-white/10 shadow-xl"
          />
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 
              hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
              transition duration-300 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {item.title}
              </h3>
              <p className="text-white/50 mt-2 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* MISSION & VISION */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 text-left">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-blue-400 text-xl font-semibold">
              Our Mission
            </h3>
            <p className="text-white/60 mt-2 text-sm">
              To build a dynamic campus ecosystem where students actively participate,
              lead, and manage impactful academic and extracurricular events.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-blue-400 text-xl font-semibold">
              Our Vision
            </h3>
            <p className="text-white/60 mt-2 text-sm">
              To become Pakistan’s leading student event management platform,
              fostering leadership, creativity, and collaboration at UCP.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="p-5 rounded-xl bg-blue-500/10 border border-blue-400/20"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                {s.value}
              </h2>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SECOND IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16"
        >
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            width={1000}
            height={500}
            unoptimized
            alt="UCP Student Activity"
            className="rounded-2xl border border-white/10"
          />
        </motion.div>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-1 rounded-full 
              bg-blue-500/10 border border-blue-400/30 
              text-blue-300 text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}
