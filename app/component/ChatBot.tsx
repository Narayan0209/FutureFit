// app/component/ChatBot.tsx
"use client";

import { useState } from "react";

const predefinedResponses: Record<string, string> = {
  "hi": "Hello! How can I help you today?",  "hey": "Hello! How can I help you today?",
  "hello": "Hello! How can I help you today?",
  "what courses do you offer": "We offer courses in Computer Science, Data Science, AI, Web Development, and more.",
  "how to register": "You can register by clicking on the Sign Up button and filling out the form.",
  "fees": "Our basic courses are free. Premium content may have a fee. Contact us for detailed pricing.",
  "support": "Our support team is available 24/7. Just drop us a message on the Contact Us page.",
};

export default function ChatBot({ isOpen }: { isOpen: boolean }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const lowerInput = input.toLowerCase();
    const botResponse = predefinedResponses[lowerInput] || "Sorry, I didn't understand that. Can you rephrase?";
    const botMsg = { sender: "bot", text: botResponse };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg w-80 rounded-lg overflow-hidden z-50">
      <div className="bg-purple-600 text-white px-4 py-2 font-bold">FutureFit Chat</div>
      <div className="p-4 h-60 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === "user" ? "bg-pink-200" : "bg-purple-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex border-t">
        <input
          type="text"
          className="flex-1 px-2 py-1 outline-none"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-purple-600 text-white px-3" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
