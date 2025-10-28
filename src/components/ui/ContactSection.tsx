"use client";

import React, { useState } from "react";

interface ContactSectionProps {
  backgroundImage?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  backgroundImage = "/logo/l1.jpg",
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<null | "idle" | "loading" | "success" | "error">(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "Project Inquiry", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Let's build something great</h2>
          <p className="text-gray-300 mb-6">Tell us briefly about your idea and how to reach you. We'll get back quickly to schedule a call.</p>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="bg-white/5 border border-white/10 rounded-md p-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 col-span-1" />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="bg-white/5 border border-white/10 rounded-md p-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 col-span-1" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Contact number" className="bg-white/5 border border-white/10 rounded-md p-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 col-span-1" />
            <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" className="bg-white/5 border border-white/10 rounded-md p-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 col-span-1" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Share a bit about your project, goals, timeline, and budget (optional)." rows={5} className="bg-white/5 border border-white/10 rounded-md p-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 col-span-1 md:col-span-2" />

            <div className="md:col-span-2 flex items-center justify-between mt-2">
              <p className="text-sm text-gray-400">By submitting, you agree to be contacted about your project.</p>
              <button disabled={status === "loading"} type="submit" className="px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition disabled:opacity-50">
                {status === "loading" ? "Sending…" : "Contact us now"}
              </button>
            </div>

            {status === "success" && <p className="md:col-span-2 text-green-400">Thanks! We'll reach out shortly.</p>}
            {status === "error" && <p className="md:col-span-2 text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


