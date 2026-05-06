// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function TermsPage() {
//   const [swing, setSwing] = useState(false);

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      
//       <motion.div
//         onHoverStart={() => setSwing(!swing)}
//         onHoverEnd={() => setSwing(false)}
        
//         animate={
//           swing
//             ? { rotate: [0, 10, -8, 6, -4, 2, 0] } // swing left-right then settle
//             : { rotate: 0 }
//         }

//         transition={{ duration: 0.8 }}

//         className="cursor-pointer max-w-3xl w-full bg-neutral-900 border border-white/10 rounded-2xl p-10 shadow-xl shadow-lime-400/10"
//       >

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-lime-400">
//           Terms & Conditions |
//         </h1>


//         {/* Content */}
//         <div className="mt-8 space-y-4 text-sm text-white/70">

//           <p>• Use the platform responsibly.</p>
//           <p>• Do not attempt to harm or exploit the system.</p>
//           <p>• We may update terms anytime.</p>
//           <p>• Continued use = agreement to terms.</p>

//         </div>

//         {/* Bottom Glow */}
//         <div className="h-[2px] bg-lime-400 mt-8"></div>

//       </motion.div>

//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TermsPage() {
  const [swing, setSwing] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      
      <motion.div
        onHoverStart={() => setSwing(!swing)}
        onHoverEnd={() => setSwing(false)}
        
        animate={
          swing
            ? { rotate: [0, 10, -8, 6, -4, 2, 0] }
            : { rotate: 0 }
        }

        transition={{ duration: 0.8 }}

        className="cursor-pointer max-w-3xl w-full bg-neutral-900 border border-white/10 rounded-2xl p-10 shadow-xl shadow-blue-400/10"
      >

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-400">
          UCP Terms & Conditions |
        </h1>

        {/* Content */}
        <div className="mt-8 space-y-4 text-sm text-white/70">

          <p>• Students must use the UCP Bravo Club platform responsibly during event registrations and activities.</p>
          <p>• Any misuse of event systems, registrations, or society tools is strictly prohibited.</p>
          <p>• UCP Bravo Club reserves the right to update rules for events, workshops, and campus activities at any time.</p>
          <p>• Continued participation in events means acceptance of all UCP event policies and guidelines.</p>

        </div>

        {/* Bottom Glow */}
        <div className="h-[2px] bg-blue-400 mt-8"></div>

      </motion.div>

    </section>
  );
}