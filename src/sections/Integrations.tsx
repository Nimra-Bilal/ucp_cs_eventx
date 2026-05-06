// import Tag from "@/components/Tag";
// import figmaIcon from "@/assets/images/figma-logo.svg";
// import notionIcon from "@/assets/images/notion-logo.svg";
// import slackIcon from "@/assets/images/slack-logo.svg";
// import relumeIcon from "@/assets/images/relume-logo.svg";
// import framerIcon from "@/assets/images/framer-logo.svg";
// import githubIcon from "@/assets/images/github-logo.svg";
// import IntegrationsColumn from "@/components/IntegrationsColumn";

// const integrations = [
//     { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
//     { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
//     { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
//     { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
//     { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
//     { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
// ];
// export type IntegrationsType = typeof integrations;
// export default function Integrations() {
//     return (
//     <section id="integrations" className="py-24 overflow-hidden">
//          <div className="container">
//             <div className="grid lg:grid-cols-2 items-center lg:gap-16">
//                 <div>
//             <Tag>Integrations</Tag>
//             <h2 className="text-6xl font-medium mt-6 ">Plays well with <span className="text-lime-400">others</span></h2>
//             <p className="text-white/50 mt-4 text-lg">Layers seamlessly connect with your favorite tools making it easy to plug into any workflow and collaborate across platforms.</p>
//             </div>

            
//             <div>
//             <div className="h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4">
//          <IntegrationsColumn integrations={integrations}/>
//          <IntegrationsColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>
//           </div>
//           </div>
//           </div>
//           </div>
//          </section>
   

//     ); 
// }


// import Tag from "@/components/Tag";
// import figmaIcon from "@/assets/images/figma-logo.svg";
// import notionIcon from "@/assets/images/notion-logo.svg";
// import slackIcon from "@/assets/images/slack-logo.svg";
// import relumeIcon from "@/assets/images/relume-logo.svg";
// import framerIcon from "@/assets/images/framer-logo.svg";
// import githubIcon from "@/assets/images/github-logo.svg";
// import IntegrationsColumn from "@/components/IntegrationsColumn";

// const integrations = [
//     { name: "Web Dev Bootcamp", icon: figmaIcon, description: "Hands-on workshop to build modern websites using real tools." },
//     { name: "AI & Machine Learning", icon: notionIcon, description: "Explore basics of AI, models, and real-world applications." },
//     { name: "Communication Skills", icon: slackIcon, description: "Improve public speaking, teamwork, and leadership skills." },
//     { name: "UI/UX Design Lab", icon: relumeIcon, description: "Learn interface design, prototyping, and creative thinking." },
//     { name: "Startup & Freelancing", icon: framerIcon, description: "Discover how to earn, pitch ideas, and build startups." },
//     { name: "Coding Hackathon", icon: githubIcon, description: "Participate in exciting coding competitions and challenges." },
// ];

// export type IntegrationsType = typeof integrations;

// export default function Integrations() {
//     return (
//     <section id="workshops" className="py-24 overflow-hidden">
//         <div className="container">

//             <div className="grid lg:grid-cols-2 items-center lg:gap-16">

//                 <div>
//                     <Tag>Workshops</Tag>

//                     <h2 className="text-6xl font-medium mt-6">
//                         Learn, build & <span className="text-lime-400">grow</span>
//                     </h2>

//                     <p className="text-white/50 mt-4 text-lg">
//                         UCP workshops connect students with practical skills, expert mentors, and real-world experience across multiple domains.
//                     </p>
//                 </div>

//                 <div>
//                     <div className="h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4">

//                         <IntegrationsColumn integrations={integrations}/>
//                         <IntegrationsColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>

//                     </div>
//                 </div>

//             </div>

//         </div>
//     </section>
//     ); 
// }


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