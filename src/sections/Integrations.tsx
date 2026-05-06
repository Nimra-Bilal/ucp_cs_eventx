

"use client";

import Tag from "@/components/Tag";

import ucp1 from "@/assets/images/ucp1.png";
import ucp2 from "@/assets/images/ucp2.png";
import ucp3 from "@/assets/images/ucp3.png";
import ucp4 from "@/assets/images/ucp4.png";
import ucp5 from "@/assets/images/ucp5.png";

import IntegrationsColumn from "@/components/IntegrationsColumn";
import { motion } from "framer-motion";

const integrations = [
    { name: "Web Dev Bootcamp", icon: ucp1, description: "Hands-on workshop to build modern websites using real tools." },
    { name: "AI & Machine Learning", icon: ucp2, description: "Explore basics of AI, models, and real-world applications." },
    { name: "Communication Skills", icon: ucp3, description: "Improve public speaking, teamwork, and leadership skills." },
    { name: "UI/UX Design Lab", icon: ucp4, description: "Learn interface design, prototyping, and creative thinking." },
    { name: "Startup & Freelancing", icon: ucp5, description: "Discover how to earn, pitch ideas, and build startups." },
    { name: "Coding Hackathon", icon: ucp1, description: "Participate in exciting coding competitions and challenges." },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="workshops" className="py-24 overflow-hidden">
            <div className="container">

                <div className="grid lg:grid-cols-2 items-center lg:gap-16">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Tag>UCP Workshops</Tag>

                        <h2 className="text-6xl font-medium mt-6 leading-tight">
                            Learn, build &{" "}
                            <span className="text-blue-400">grow</span>
                        </h2>

                        <p className="text-white/50 mt-4 text-lg">
                            UCP workshops empower students with practical skills, industry exposure,
                            and hands-on learning experiences across multiple domains.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="h-[400px] lg:h-[800px] overflow-hidden 
                            [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] 
                            mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 group"
                        >

                            {/* Column 1 */}
                            <div className="transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] rounded-2xl">
                                <IntegrationsColumn integrations={integrations} />
                            </div>

                            {/* Column 2 */}
                            <div className="hidden md:flex transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] rounded-2xl">
                                <IntegrationsColumn
                                    integrations={integrations.slice().reverse()}
                                    reverse
                                />
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}