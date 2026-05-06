// "use client";

// import { motion } from "framer-motion";

// export default function PrivacyPage() {
//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       <div className="max-w-3xl mx-auto">

//         {/* Title Animation */}
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold text-lime-400"
//         >
//           Privacy Policy |
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 text-white/60"
//         >
//           Your privacy matters. We keep things secure, simple, and transparent.
//         </motion.p>

//         {/* Sections */}
//         <div className="mt-12 space-y-6">

//           {[
//             {
//               title: "Data Collection",
//               text: "We only collect necessary data like your name and email to improve your experience.",
//             },
//             {
//               title: "Data Security",
//               text: "Your data is stored securely using encrypted databases and modern security practices.",
//             },
//             {
//               title: "No Selling Data",
//               text: "We never sell or share your personal data with third parties.",
//             },
//             {
//               title: "User Control",
//               text: "You can request to delete your data anytime.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.5 }}
//               className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-lime-400/40 shadow-lg shadow-lime-400/5"
//             >
//               <h3 className="text-xl font-semibold text-lime-400">
//                 {item.title}
//               </h3>
//               <p className="text-white/60 mt-2 text-sm">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}

//         </div>

//         {/* Bottom Glow Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="h-[2px] bg-lime-400 mt-16"
//         />

//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-400"
        >
          UCP Privacy Policy |
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-white/60"
        >
          At the University of Central Punjab, we value student privacy and ensure secure handling of all academic and event-related data.
        </motion.p>

        {/* Sections */}
        <div className="mt-12 space-y-6">

          {[
            {
              title: "Student Data Collection",
              text: "We only collect essential information such as name, email, department, and event participation details for campus engagement purposes.",
            },
            {
              title: "Data Security at UCP",
              text: "All student and society data is stored securely using protected systems managed by authorized university teams.",
            },
            {
              title: "No Data Sharing",
              text: "UCP Bravo Club does not sell or share student data with external organizations or third parties.",
            },
            {
              title: "Student Control & Requests",
              text: "Students can request access, correction, or deletion of their data through official university channels.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-blue-400/40 shadow-lg shadow-blue-400/10"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {item.title}
              </h3>
              <p className="text-white/60 mt-2 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Glow Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-[2px] bg-blue-400 mt-16"
        />

      </div>
    </section>
  );
}