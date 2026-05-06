"use client";
import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion,AnimatePresence } from "framer-motion";
const faqs = [
    {
        question: "How are events managed in the UCP CS Society system?",
        answer: "All events including seminars, workshops, expos, and SAGA events are dynamically created and managed through a centralized admin panel. No event data is hardcoded; everything is stored in the database and fetched via APIs.",
    },
    {
        question: "Can users explore and filter events easily?",
        answer: "Yes, users can browse events with advanced filters such as category, date range, and status (upcoming, ongoing, past). They can also search events using keywords and sort by newest, trending, or most registered.",
    },
    {
        question: "How does event registration work?",
        answer: "Users can register for events with a single click. After registration, they receive confirmation notifications and can view their registered events in their personal dashboard.",
    },
    {
        question: "Is there a limit on event registrations?",
        answer: "Yes, admins can set registration limits for each event. Once the limit is reached, users may be placed on a waitlist and automatically promoted if slots become available.",
    },
    {
        question: "What details are included in an event page?",
        answer: "Each event page includes a banner, description, speakers, schedule, and location details. This helps users fully understand the event before registering.",
    },
    {
        question: "Can users manage their registered events?",
        answer: "Yes, users can view upcoming and past events, cancel registrations, and download their event confirmation or e-ticket from their dashboard.",
    },
    {
        question: "How do admins control event content?",
        answer: "Admins can create, edit, publish, and archive events. They can also manage categories, upload images, and update all event-related information through the admin panel.",
    },
    {
        question: "Does the system support real-time updates for events?",
        answer: "Yes, users receive real-time notifications about event updates, announcements, and registration changes through the platform.",
    },
];

export default function Faqs() {
    const [selectedIndex,setSelectedIndex]=useState(0);
    return ( 
    <section id="faqs" className="py-24"> 
         <div className="container">
            <div className="flex justify-center"> 
                <Tag>Faqs</Tag> 
                 </div>
<h2 className="font-medium text-6xl mt-6 text-center max-w-xl mx-auto ">
    Questions? We&apos;ve got  
    <span className="text-blue-400">
        &nbsp;answers
        </span>
        </h2>
          <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq,faqIndex) => (
                <div key={faq.question} className= " bg-neutral-900 border rounded-2xl border-white/10 p-6">
                <div className="flex justify-between items-center" onClick={()=>setSelectedIndex(faqIndex)}>
                         <h3 className="font-medium">{faq.question}</h3>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24"
 height="24"
  viewBox="0 0 24 24"
   fill="none"
    stroke="currentColor"
     strokeWidth="2"
      strokeLinecap="round"
       strokeLinejoin="round"
   className={twMerge("feather feather-plus text-blue-400 flex-shrink-0 transition duration-300" , selectedIndex === faqIndex && "rotate-45")}>
            <line x1="12" y1="5" x2="12" y2="19">
                </line>
                <line x1="5" y1="12" x2="19" y2="12">
                    </line>
                    </svg>
                    </div> 
                     <AnimatePresence>
                         {selectedIndex===faqIndex && (
                        <motion.div 
                        initial={{
                            height:0,
                            marginTop:0,

                        }}

                        animate={{
                            height:"auto",
                            marginTop:24,
                        }}
                        exit={{
                            height:0,
                            marginTop:0,
                        }}
                        className={twMerge("overflow-hidden")} >   
                <p className="text-white/50">{faq.answer}</p>
                </motion.div> 
                )}
                       </AnimatePresence>  
                      
        </div> 
        ))} 
            </div>
            </div>
         </section>
       );
}


