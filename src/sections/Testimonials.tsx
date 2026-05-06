"use client";
import { motion } from "framer-motion";

const teamMessages = [
  {
    name: "Imama",
    role: "Event Coordinator",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    text: "Welcome freshies! UCP Bravo Club is your gateway to unforgettable campus experiences.",
    back: "Imama says: Stay active, join events, and make your university life memorable!",
  },
  {
    name: "Hussain",
    role: "Operations Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "We’re here to make your transition into UCP smooth and exciting.",
    back: "Hussain says: Don’t miss SAGA, workshops, and society registrations!",
  },
  {
    name: "Haris",
    role: "Media & Outreach",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Freshies, this is your time to explore, connect, and grow at UCP.",
    back: "Haris says: Follow Bravo Club updates to stay connected with everything happening on campus.",
  },
];

export default function TeamMessages() {
  return (
    <section id="team" className="py-24 text-white">
      <div className="container max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-5xl font-medium">
          Meet Our <span className="text-blue-400">Bravo Team</span>
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Messages from the UCP Bravo Club team for all freshies stepping into campus life.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 [perspective:1000px]">

          {teamMessages.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
              className="relative h-72"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* FRONT */}
              <div
                className="absolute inset-0 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={t.image}
                  className="w-16 h-16 rounded-full mb-4 border border-blue-400/40 object-cover"
                  alt={t.name}
                />

                <p className="text-white/70 text-sm text-center">
                  {t.text}
                </p>

                <h4 className="mt-4 font-medium text-blue-400">
                  {t.name}
                </h4>

                <span className="text-white/40 text-xs">
                  {t.role}
                </span>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 bg-blue-500 text-black border border-blue-400 p-6 rounded-2xl flex items-center justify-center text-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-sm font-medium">
                  {t.back}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}