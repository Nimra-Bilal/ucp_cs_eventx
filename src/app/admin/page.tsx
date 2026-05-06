// "use client";

// import { useEffect, useState } from "react";

// type Email = {
//   _id: string;
//   email: string;
// };

// export default function Admin() {
//   const [emails, setEmails] = useState<Email[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchEmails = async () => {
//     try {
//       setLoading(true);

//       const res = await fetch("/api/newsletter/all");

//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await res.json();
//       setEmails(data);
//     } catch (err) {
//       setError("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmails();
//   }, []);

//   return (
//     <section className="min-h-screen bg-neutral-950 text-white p-6">
      
//       {/* HEADER */}
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>
//         <p className="text-white/50 mt-2">
//           Manage newsletter subscribers
//         </p>

//         {/* ERROR */}
//         {error && (
//           <div className="mt-4 text-red-400">
//             {error}
//           </div>
//         )}

//         {/* LOADING */}
//         {loading && (
//           <p className="mt-6 text-white/60">Loading emails...</p>
//         )}

//         {/* EMPTY STATE */}
//         {!loading && emails.length === 0 && (
//           <p className="mt-6 text-white/50">
//             No emails found.
//           </p>
//         )}

//         {/* EMAIL LIST */}
//         <div className="mt-6 space-y-3">
//           {emails.map((item) => (
//             <div
//               key={item._id}
//               className="flex justify-between items-center bg-neutral-900 border border-white/10 p-4 rounded-xl"
//             >
//               <span>{item.email}</span>

//               <span className="text-xs text-white/40">
//                 ID: {item._id.slice(-5)}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";

type Email = {
  _id: string;
  email: string;
};

export default function Admin() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmails = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/newsletter/all");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setEmails(data);
    } catch (err) {
      console.log(err); // ✅ FIX: now used, no ESLint error
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <section className="min-h-screen bg-neutral-950 text-white p-6">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>
        <p className="text-white/50 mt-2">
          Manage newsletter subscribers
        </p>

        {/* ERROR */}
        {error && (
          <div className="mt-4 text-red-400">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <p className="mt-6 text-white/60">Loading emails...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && emails.length === 0 && (
          <p className="mt-6 text-white/50">
            No emails found.
          </p>
        )}

        {/* EMAIL LIST */}
        <div className="mt-6 space-y-3">
          {emails.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-neutral-900 border border-white/10 p-4 rounded-xl"
            >
              <span>{item.email}</span>

              <span className="text-xs text-white/40">
                ID: {item._id.slice(-5)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}