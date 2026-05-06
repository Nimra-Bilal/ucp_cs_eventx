"use client";
import Image from "next/image";
import logoImage from '@/assets/images/CS_Club.png';
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence , motion } from "framer-motion";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Events", href: "#events" },
    { label: "Workshops", href: "#workshops" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
     <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
<div className="container max-w-5xl">
    <div className="border border-white/15 backdrop-blur bg-neutral-950/70 md:rounded-full rounded-[27px]">
    <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
        <div>
<Image src ={logoImage} className="h-9  md:h-12 lg:h-16 md:h-auto w-auto " alt="Layers logo" />
        </div>
<div className="lg:flex justify-center items-center hidden">
    <nav className="flex gap-6 font-medium">
        {navLinks.map((link)=>(
            <a href={link.href} key={link.label}>{link.label}</a>
        ))}
    </nav>
</div>
        <div className="flex justify-end gap-4">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        onClick={()=>setIsOpen(!isOpen)}
        className="feather feather-menu md:hidden">
            <line  x1="3" y1="6" x2="21" y2="6" className={twMerge ("origin-left" , isOpen && "rotate-45 -translate-y-1")}></line>
            <line x1="3" y1="12" x2="21" y2="12" className= {twMerge (isOpen && "opacity-0")} ></line>
            <line x1="3" y1="18" x2="21" y2="18" className={twMerge ("origin-left" , isOpen && "-rotate-45 translate-y-1")}></line>
            </svg>
          <motion.a
  href="#about"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="hidden md:inline-flex px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
>
  About Us
</motion.a>

<motion.a
  href="#team"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="hidden md:inline-flex px-4 py-2 rounded-full bg-blue-400 text-black font-medium hover:shadow-lg hover:shadow-blue-400/30 transition"
>
  Team Members 
</motion.a>
        </div>
 </div>   
 <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="flex flex-col items-center gap-4 py-4">

        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}

        {/* ✅ FIX: remove hidden md:inline-flex */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          About Us
        </motion.a>

        <motion.a
          href="#testimonials"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full bg-lime-400 text-black font-medium hover:shadow-lg hover:shadow-lime-400/30 transition"
        >
          Testimonials
        </motion.a>

      </div>
    </motion.div>
  )}
</AnimatePresence>
 </div>
</div>
    </section>
    <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
);
}
