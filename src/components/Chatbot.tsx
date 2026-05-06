"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const prompts = [
    "What is this website?",
    "How can I contact support?",
    "What services do you offer?",
    "Who made this website?",
    "What is UCP?",
    "Is this project real?",
    "How do I register for events?",
    "Tell me about student societies",
    "Where is UCP located?",
    "Who is Sir Tauseef?",
    "How can I join a team?",
    "Is this chatbot real AI?",
  ];

  const botReplies: Record<string, string> = {
    "What is this website?":
      "This is a UCP student event website built for projects and interaction.",

    "How can I contact support?":
      "You can contact support via the Contact section in the website.",

    "What services do you offer?":
      "We provide event management, student activities, and project showcases.",

    "Who made this website?":
      "This website was created by UCP CS students as part of a web development project.",

    "What is UCP?":
      "UCP stands for University of Central Punjab, a private university in Lahore, Pakistan.",

    "Is this project real?":
      "Yes, it is a student academic project for learning and demonstration purposes.",

    "How do I register for events?":
      "You can register through the Events section once registration is open.",

    "Tell me about student societies":
      "UCP has multiple societies including tech, sports, media, and event management teams.",

    "Where is UCP located?":
      "UCP is located in Lahore, Punjab, Pakistan.",

    "Who is Sir Tauseef?":
      "Sir Tauseef is the course instructor supervising this web development project.",

    "How can I join a team?":
      "You can join a team by contacting society coordinators or the admin office.",

    "Is this chatbot real AI?":
      "No, this is a dummy chatbot with predefined responses.",
  };

  function sendMessage(text: string) {
    const userMsg = { role: "user", content: text };

    const botMsg = {
      role: "assistant",
      content:
        botReplies[text] ||
        "Sorry, I don’t understand that question yet.",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  }

  // 🔥 Auto scroll to bottom whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-2xl flex items-center justify-center"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-80 bg-white shadow-2xl rounded-2xl border flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-blue-600 text-white p-3 text-sm font-semibold">
            UCP Chatbot Assistant
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-white">
            {messages.length === 0 && (
              <p className="text-xs text-gray-500 text-center mt-10">
                Ask something or click a prompt 👇
              </p>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] shadow-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* 👇 scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompts */}
          <div className="p-2 border-t bg-white flex flex-wrap gap-1">
            {prompts.map((p, i) => (
              <button
                key={i}
                onClick={() => sendMessage(p)}
                className="text-xs bg-gray-100 hover:bg-gray-300 px-2 py-1 rounded-full border text-black"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}