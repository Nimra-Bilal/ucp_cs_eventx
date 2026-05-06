

"use client";

import ucp1 from "@/assets/images/ucp1.png";
import ucp2 from "@/assets/images/ucp2.png";
import ucp3 from "@/assets/images/ucp3.png";
import ucp4 from "@/assets/images/ucp4.png";
import ucp5 from "@/assets/images/ucp5.png";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Campus Life", image: ucp1 },
  { name: "Societies", image: ucp2 },
  { name: "Events", image: ucp3 },
  { name: "SAGA", image: ucp4 },
  { name: "Bravo Club", image: ucp5 },
];

export default function LogoTicker() {
  return (
    <section className="py-28  overflow-x-clip">
      <div className="container">

        {/* TITLE */}
        <h3 className="text-center mt-12  text-white/60 text-xl">
          Trusted across UCP societies, events, and student organizations
        </h3>

        <div className="flex overflow-hidden mt-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 20, // ⚡ faster than before
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-20 pr-20"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-4 min-w-[220px]"
                  >
                    {/* FIXED SIZE LOGO BOX */}
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* TEXT */}
                    <span className="text-white/70 text-sm whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}