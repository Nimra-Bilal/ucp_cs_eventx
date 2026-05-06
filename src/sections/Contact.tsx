
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent! ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-400">
          Contact Us |
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">

          <input
            value={form.name}
            placeholder="Name"
            className="w-full p-3 bg-neutral-900 border border-white/10 rounded-xl
            hover:border-blue-400 focus:border-blue-400 focus:outline-none
            focus:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            transition duration-300"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            value={form.email}
            placeholder="Email"
            className="w-full p-3 bg-neutral-900 border border-white/10 rounded-xl
            hover:border-blue-400 focus:border-blue-400 focus:outline-none
            focus:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            transition duration-300"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            value={form.message}
            placeholder="Message"
            className="w-full p-3 bg-neutral-900 border border-white/10 rounded-xl
            hover:border-blue-400 focus:border-blue-400 focus:outline-none
            focus:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            transition duration-300"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold
            hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
            hover:-translate-y-1 active:scale-95
            transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}