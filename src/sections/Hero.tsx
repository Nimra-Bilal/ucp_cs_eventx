// // // "use client";
// // // import Button from "@/components/Button";
// // // import designExample1Image from "@/assets/images/design-example-1.png";
// // // import designExample2Image from "@/assets/images/design-example-2.png";
// // // import Image from "next/image";
// // // import Pointer from "@/components/Pointer";
// // // import { motion, useAnimate } from "framer-motion";
// // // import { useEffect, useState } from "react";
// // // import cursorYouImage from "@/assets/images/cursor-you.svg";

// // // export default function Hero() {
// // //   const [email, setEmail] = useState("");

// // //   const handleSubmit = async (e: any) => {
// // //     e.preventDefault();

// // //     const res = await fetch("/api/newsletter", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify({ email }),
// // //     });

// // //     const data = await res.json();

// // //     if (data.success) {
// // //       alert("Email saved!");
// // //       setEmail("");
// // //     }
// // //   };

// // //   // ✅ SAFE useAnimate
// // //   const leftDesign = useAnimate();
// // //   const LeftDesignScope = leftDesign[0];
// // //   const LeftDesignAnimate = leftDesign[1];

// // //   const leftPointer = useAnimate();
// // //   const LeftPointerScope = leftPointer[0];
// // //   const LeftPointerAnimate = leftPointer[1];

// // //   const rightDesign = useAnimate();
// // //   const RightDesignScope = rightDesign[0];
// // //   const RightDesignAnimate = rightDesign[1];

// // //   const rightPointer = useAnimate();
// // //   const RightPointerScope = rightPointer[0];
// // //   const RightPointerAnimate = rightPointer[1];

// // //   useEffect(() => {
// // //     LeftDesignAnimate([
// // //       [LeftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
// // //       [LeftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
// // //     ]);

// // //     RightDesignAnimate([
// // //       [RightDesignScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
// // //       [RightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
// // //     ]);

// // //     LeftPointerAnimate([
// // //       [LeftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
// // //       [LeftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
// // //       [LeftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
// // //     ]);

// // //     RightPointerAnimate([
// // //       [RightPointerScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
// // //       [RightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
// // //       [RightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
// // //     ]);
// // //   }, []);

// // //   return (
// // //     <section className="py-24 overflow-x-clip" style={{ cursor: `url(${cursorYouImage.src}), auto` }}>
// // //       <div className="container relative">
// // //         <motion.div ref={LeftDesignScope} initial={{ opacity: 0, y: 100, x: -100 }} drag className="absolute -left-32 top-16 hidden lg:block">
// // //           <Image src={designExample1Image} draggable="false" alt="Design example 1" />
// // //         </motion.div>

// // //         <motion.div ref={LeftPointerScope} initial={{ opacity: 0, y: 100, x: -200 }} className="absolute left-56 top-96 hidden lg:block">
// // //           <Pointer name="Amdrea" />
// // //         </motion.div>

// // //         <motion.div ref={RightDesignScope} initial={{ opacity: 0, x: 100, y: 100 }} drag className="absolute -right-64 -top-16 hidden lg:block">
// // //           <Image src={designExample2Image} draggable="false" alt="Design example 2" />
// // //         </motion.div>

// // //         <motion.div ref={RightPointerScope} initial={{ opacity: 0, y: 100, x: 275 }} className="absolute right-80 -top-4 hidden lg:block">
// // //           <Pointer name="Brian" color="red" />
// // //         </motion.div>

// // //         <h1 className="text-6xl text-center mt-6">Impactful Design</h1>

// // //         <form onSubmit={handleSubmit} className="flex border rounded-full mt-8 p-2 max-w-lg mx-auto">
// // //           <input
// // //             type="email"
// // //             placeholder="enter your email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="bg-transparent px-4 w-full"
// // //           />
// // //           <Button type="submit" variant="primary" size="sm">
// // //             Sign Up
// // //           </Button>
// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import Button from "@/components/Button";
// // import designExample1Image from "@/assets/images/design-example-1.png";
// // import designExample2Image from "@/assets/images/design-example-2.png";
// // import Image from "next/image";
// // import Pointer from "@/components/Pointer";
// // import { motion, useAnimate } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import cursorYouImage from "@/assets/images/cursor-you.svg";

// // export default function Hero() {
// //   const [email, setEmail] = useState("");

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const res = await fetch("/api/newsletter/all/", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ email }),
// //     });

// //     const data = await res.json();

// //     if (data.success) {
// //       alert("Email saved!");
// //       setEmail("");
// //     }
// //   };

// //   // SAFE useAnimate
// //   const leftDesign = useAnimate();
// //   const LeftDesignScope = leftDesign[0];
// //   const LeftDesignAnimate = leftDesign[1];

// //   const leftPointer = useAnimate();
// //   const LeftPointerScope = leftPointer[0];
// //   const LeftPointerAnimate = leftPointer[1];

// //   const rightDesign = useAnimate();
// //   const RightDesignScope = rightDesign[0];
// //   const RightDesignAnimate = rightDesign[1];

// //   const rightPointer = useAnimate();
// //   const RightPointerScope = rightPointer[0];
// //   const RightPointerAnimate = rightPointer[1];

// //   useEffect(() => {
// //     LeftDesignAnimate([
// //       [LeftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
// //       [LeftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
// //     ]);

// //     RightDesignAnimate([
// //       [RightDesignScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
// //       [RightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
// //     ]);

// //     LeftPointerAnimate([
// //       [LeftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
// //       [LeftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
// //       [LeftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
// //     ]);

// //     RightPointerAnimate([
// //       [RightPointerScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
// //       [RightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
// //       [RightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
// //     ]);
// //   }, []);

// //   return (
// //     <section
// //       className="py-24 overflow-x-clip"
// //       style={{ cursor: `url(${cursorYouImage.src}), auto` }}
// //     >
// //       <div className="container relative">
// //         <motion.div
// //           ref={LeftDesignScope}
// //           initial={{ opacity: 0, y: 100, x: -100 }}
// //           drag
// //           className="absolute -left-32 top-16 hidden lg:block"
// //         >
// //           <Image src={designExample1Image} draggable="false" alt="Design example 1" />
// //         </motion.div>

// //         <motion.div
// //           ref={LeftPointerScope}
// //           initial={{ opacity: 0, y: 100, x: -200 }}
// //           className="absolute left-56 top-96 hidden lg:block"
// //         >
// //           <Pointer name="Amdrea" />
// //         </motion.div>

// //         <motion.div
// //           ref={RightDesignScope}
// //           initial={{ opacity: 0, x: 100, y: 100 }}
// //           drag
// //           className="absolute -right-64 -top-16 hidden lg:block"
// //         >
// //           <Image src={designExample2Image} draggable="false" alt="Design example 2" />
// //         </motion.div>

// //         <motion.div
// //           ref={RightPointerScope}
// //           initial={{ opacity: 0, y: 100, x: 275 }}
// //           className="absolute right-80 -top-4 hidden lg:block"
// //         >
// //           <Pointer name="Brian" color="red" />
// //         </motion.div>

// //         <h1 className="text-6xl text-center mt-6">Impactful Design</h1>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="flex border rounded-full mt-8 p-2 max-w-lg mx-auto"
// //         >
// //           <input
// //             type="email"
// //             placeholder="enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="bg-transparent px-4 w-full"
// //           />
// //           <Button type="submit" variant="primary" size="sm">
// //             Sign Up
// //           </Button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import Button from "@/components/Button";
// import designExample1Image from "@/assets/images/design-example-1.png";
// import designExample2Image from "@/assets/images/design-example-2.png";
// import Image from "next/image";
// import Pointer from "@/components/Pointer";
// import { motion, useAnimate } from "framer-motion";
// import { useEffect, useState } from "react";
// import cursorYouImage from "@/assets/images/cursor-you.svg";

// export default function Hero() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const res = await fetch("/api/newsletter", {   // ✅ FIXED HERE
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Email saved!");
//       setEmail("");
//     }
//   };

//   const leftDesign = useAnimate();
//   const LeftDesignScope = leftDesign[0];
//   const LeftDesignAnimate = leftDesign[1];

//   const leftPointer = useAnimate();
//   const LeftPointerScope = leftPointer[0];
//   const LeftPointerAnimate = leftPointer[1];

//   const rightDesign = useAnimate();
//   const RightDesignScope = rightDesign[0];
//   const RightDesignAnimate = rightDesign[1];

//   const rightPointer = useAnimate();
//   const RightPointerScope = rightPointer[0];
//   const RightPointerAnimate = rightPointer[1];

//   useEffect(() => {
//     LeftDesignAnimate([
//       [LeftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
//       [LeftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
//     ]);

//     RightDesignAnimate([
//       [RightDesignScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
//       [RightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
//     ]);

//     LeftPointerAnimate([
//       [LeftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
//       [LeftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
//       [LeftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
//     ]);

//     RightPointerAnimate([
//       [RightPointerScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
//       [RightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
//       [RightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
//     ]);
//   }, []);

//   return (
//     <section
//       className="py-24 overflow-x-clip"
//       style={{ cursor: `url(${cursorYouImage.src}), auto` }}
//     >
//       <div className="container relative">
//         <motion.div ref={LeftDesignScope} className="absolute -left-32 top-16 hidden lg:block">
//           <Image src={designExample1Image} alt="Design example 1" />
//         </motion.div>

//         <motion.div ref={RightDesignScope} className="absolute -right-64 -top-16 hidden lg:block">
//           <Image src={designExample2Image} alt="Design example 2" />
//         </motion.div>

//         <h1 className="text-6xl text-center mt-6">Impactful Design</h1>

//         <form
//           onSubmit={handleSubmit}
//           className="flex border rounded-full mt-8 p-2 max-w-lg mx-auto"
//         >
//           <input
//             type="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-transparent px-4 w-full"
//           />

//           <Button type="submit" variant="primary" size="sm">
//             Sign Up
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Button from "@/components/Button";
// import designExample1Image from "@/assets/images/design-example-1.png";
// import designExample2Image from "@/assets/images/design-example-2.png";
// import Image from "next/image";
// import Pointer from "@/components/Pointer";
// import { motion, useAnimate } from "framer-motion";
// import { useEffect, useState } from "react";
// import cursorYouImage from "@/assets/images/cursor-you.svg";

// export default function Hero() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const res = await fetch("/api/newsletter", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Email saved!");
//       setEmail("");
//     }
//   };

//   const leftDesign = useAnimate();
//   const LeftDesignScope = leftDesign[0];
//   const LeftDesignAnimate = leftDesign[1];

//   const leftPointer = useAnimate();
//   const LeftPointerScope = leftPointer[0];
//   const LeftPointerAnimate = leftPointer[1];

//   const rightDesign = useAnimate();
//   const RightDesignScope = rightDesign[0];
//   const RightDesignAnimate = rightDesign[1];

//   const rightPointer = useAnimate();
//   const RightPointerScope = rightPointer[0];
//   const RightPointerAnimate = rightPointer[1];

//   useEffect(() => {
//     LeftDesignAnimate([
//       [LeftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
//       [LeftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
//     ]);

//     RightDesignAnimate([
//       [RightDesignScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
//       [RightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
//     ]);

//     LeftPointerAnimate([
//       [LeftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
//       [LeftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
//       [LeftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5 }],
//     ]);

//     RightPointerAnimate([
//       [RightPointerScope.current, { opacity: [1] }, { duration: 0.5, delay: 1.5 }],
//       [RightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
//       [RightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
//     ]);
//   }, []);

//   return (
//     <section
//       className="py-24 overflow-x-clip"
//       style={{ cursor: `url(${cursorYouImage.src}), auto` }}
//     >
//       <div className="container relative">

//         {/* LEFT DESIGN */}
//         <motion.div
//           ref={LeftDesignScope}
//           className="absolute -left-32 top-16 hidden lg:block"
//         >
//           <Image src={designExample1Image} alt="Design example 1" />
//         </motion.div>

//         {/* LEFT POINTER ✅ FIXED */}
//         <motion.div
//           ref={LeftPointerScope}
//           className="absolute left-56 top-96 hidden lg:block"
//         >
//           <Pointer name="Andrea" />
//         </motion.div>

//         {/* RIGHT DESIGN */}
//         <motion.div
//           ref={RightDesignScope}
//           className="absolute -right-64 -top-16 hidden lg:block"
//         >
//           <Image src={designExample2Image} alt="Design example 2" />
//         </motion.div>

//         {/* RIGHT POINTER ✅ FIXED */}
//         <motion.div
//           ref={RightPointerScope}
//           className="absolute right-80 -top-4 hidden lg:block"
//         >
//           <Pointer name="Brian" color="red" />
//         </motion.div>

//         <h1 className="text-6xl text-center mt-6">Impactful Design</h1>

//         <form
//           onSubmit={handleSubmit}
//           className="flex border rounded-full mt-8 p-2 max-w-lg mx-auto"
//         >
//           <input
//             type="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-transparent px-4 w-full"
//           />

//           <Button type="submit" variant="primary" size="sm">
//             Sign Up
//           </Button>
//         </form>

//       </div>
//     </section>
//   );
// }



// "use client";

// import Button from "@/components/Button";
// import designExample1Image from "@/assets/images/design-example-1.png";
// import designExample2Image from "@/assets/images/design-example-2.png";
// import Image from "next/image";
// import Pointer from "@/components/Pointer";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";
// import cursorYouImage from "@/assets/images/cursor-you.svg";

// export default function Hero() {
//   const [email, setEmail] = useState("");

//   const leftDesignControls = useAnimation();
//   const leftPointerControls = useAnimation();
//   const rightDesignControls = useAnimation();
//   const rightPointerControls = useAnimation();

//   useEffect(() => {
//     const sequence = async () => {
//       // LEFT image flies in
//       await leftDesignControls.start({
//         opacity: 1, x: 0, y: 0,
//         transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
//       });

//       // LEFT pointer slides in
//       await leftPointerControls.start({
//         opacity: 1, x: 0, y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       });

//       // LEFT pointer clicks (bounce)
//       await leftPointerControls.start({
//         y: [0, 16, 0],
//         transition: { duration: 0.4 },
//       });

//       // RIGHT image flies in
//       await rightDesignControls.start({
//         opacity: 1, x: 0, y: 0,
//         transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
//       });

//       // RIGHT pointer slides in
//       await rightPointerControls.start({
//         opacity: 1, x: 0, y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       });

//       // RIGHT pointer clicks (bounce)
//       await rightPointerControls.start({
//         y: [0, 20, 0],
//         transition: { duration: 0.4 },
//       });
//     };

//     sequence();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch("/api/newsletter", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert("Email saved!");
//       setEmail("");
//     }
//   };

//   return (
//     <section
//       className="py-24 overflow-x-clip"
//       style={{ cursor: `url(${cursorYouImage.src}), auto` }}
//     >
//       <div className="container relative">

//         {/* LEFT DESIGN */}
//         <motion.div
//           className="absolute -left-32 top-16 hidden lg:block cursor-grab active:cursor-grabbing"
//           initial={{ opacity: 0, x: -100, y: 100 }}
//           animate={leftDesignControls}
//           drag
//           dragMomentum={true}
//           dragElastic={0.15}
//           whileDrag={{ scale: 1.05, zIndex: 50 }}
//         >
//           <Image src={designExample1Image} draggable="false" alt="Design example 1" />
//         </motion.div>

//         {/* LEFT POINTER */}
//         <motion.div
//           className="absolute left-56 top-96 hidden lg:block pointer-events-none"
//           initial={{ opacity: 0, x: -200, y: 100 }}
//           animate={leftPointerControls}
//         >
//           <Pointer name="Andrea" />
//         </motion.div>

//         {/* RIGHT DESIGN */}
//         <motion.div
//           className="absolute -right-64 -top-16 hidden lg:block cursor-grab active:cursor-grabbing"
//           initial={{ opacity: 0, x: 100, y: 100 }}
//           animate={rightDesignControls}
//           drag
//           dragMomentum={true}
//           dragElastic={0.15}
//           whileDrag={{ scale: 1.05, zIndex: 50 }}
//         >
//           <Image src={designExample2Image} draggable="false" alt="Design example 2" />
//         </motion.div>

//         {/* RIGHT POINTER */}
//         <motion.div
//           className="absolute right-80 -top-4 hidden lg:block pointer-events-none"
//           initial={{ opacity: 0, x: 200, y: 100 }}
//           animate={rightPointerControls}
//         >
//           <Pointer name="Brian" color="red" />
//         </motion.div>

//         <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
//           Impactful Design
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="flex border rounded-full mt-8 p-2 max-w-lg mx-auto"
//         >
//           <input
//             type="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-transparent px-4 w-full outline-none"
//           />
//           <Button type="submit" variant="primary" size="sm">
//             Sign Up
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// }


"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/event1.png";
import designExample2Image from "@/assets/images/event2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [email, setEmail] = useState("");

  const leftDesignControls = useAnimation();
  const leftPointerControls = useAnimation();
  const rightDesignControls = useAnimation();
  const rightPointerControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await leftDesignControls.start({
        opacity: 1, x: 0, y: 0,
        transition: { duration: 0.7 },
      });

      await leftPointerControls.start({
        opacity: 1, x: 0, y: 0,
        transition: { duration: 0.5 },
      });

      await leftPointerControls.start({
        y: [0, 16, 0],
        transition: { duration: 0.4 },
      });

      await rightDesignControls.start({
        opacity: 1, x: 0, y: 0,
        transition: { duration: 0.7 },
      });

      await rightPointerControls.start({
        opacity: 1, x: 0, y: 0,
        transition: { duration: 0.5 },
      });

      await rightPointerControls.start({
        y: [0, 20, 0],
        transition: { duration: 0.4 },
      });
    };

    sequence();
  }, []);

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Email saved!");
      setEmail("");
    }
  };

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="container relative">

        {/* LEFT DESIGN */}
        <motion.div
          className="absolute -left-32 top-16 hidden lg:block cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={leftDesignControls}
          drag
          dragElastic={0.2}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 1.08, rotate: -2, zIndex: 50 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Image src={designExample1Image} draggable="false" alt="Design example 1" />
          </motion.div>
        </motion.div>

        {/* LEFT POINTER */}
        <motion.div
          className="absolute left-56 top-96 hidden lg:block pointer-events-none"
          initial={{ opacity: 0, x: -200, y: 100 }}
          animate={leftPointerControls}
        >
          <Pointer name="Club 57" />
        </motion.div>

        {/* RIGHT DESIGN */}
        <motion.div
          className="absolute -right-64 -top-16 hidden lg:block cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={rightDesignControls}
          drag
          dragElastic={0.2}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 1.08, rotate: 2, zIndex: 50 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Image src={designExample2Image} draggable="false" alt="Design example 2" />
          </motion.div>
        </motion.div>

        {/* RIGHT POINTER */}
        <motion.div
          className="absolute right-80 -top-4 hidden lg:block pointer-events-none"
          initial={{ opacity: 0, x: 200, y: 100 }}
          animate={rightPointerControls}
        >
          <Pointer name="Bravo Club" color="blue" />
        </motion.div>

        {/* TITLE */}
       <motion.h1
  className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6 max-w-4xl mx-auto leading-tight px-4"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
>
  Organizing The Most Exclusive Events{" "}
  <span className="text-blue-400 block mt-2">
    You&apos;ll Ever Witness.
  </span>
</motion.h1>

        {/* MODERN FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 p-2 rounded-2xl 
          bg-white/5 backdrop-blur-lg border border-white/10 
          focus-within:border-blue-400 
          focus-within:shadow-[0_0_25px_rgba(59,130,246,0.5)] 
          transition duration-300">

            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-white/40"
            />

            <Button
              type="submit"
              variant="secondary"
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl 
              shadow-md hover:shadow-blue-500/40 transition duration-300"
            >
              Join Now
            </Button>

          </div>
        </motion.form>

      </div>
    </section>
  );
}