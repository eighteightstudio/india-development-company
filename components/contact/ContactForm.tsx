"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with EmailJS integration
    // import emailjs from "@emailjs/browser";
    // await emailjs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    //   { ...formData },
    //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    // );

    // Dummy handler — log and show success
    console.log("Form submission (dummy):", formData);

    await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate network delay

    setLoading(false);
    setSubmitted(true);
    setFormData(initialFormData);

    // Reset success state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <h2 className="font-heading font-bold text-idc-navy text-2xl mb-2">Send Us a Message</h2>
      <p className="text-gray-500 text-sm mb-7">
        Fill in the form below and we will get back to you within one business day.
      </p>

      {/* Success toast */}
      {submitted && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm">
          <CheckCircle2 size={18} className="shrink-0" />
          <span>Message sent! We will contact you soon.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Row: Full Name + Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-idc-navy text-xs font-semibold mb-1.5">
              Full Name <span className="text-idc-orange">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-idc-navy text-xs font-semibold mb-1.5">
              Company Name <span className="text-idc-orange">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors"
            />
          </div>
        </div>

        {/* Row: Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-idc-navy text-xs font-semibold mb-1.5">
              Email Address <span className="text-idc-orange">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-idc-navy text-xs font-semibold mb-1.5">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors"
            />
          </div>
        </div>

        {/* Subject dropdown */}
        <div>
          <label htmlFor="subject" className="block text-idc-navy text-xs font-semibold mb-1.5">
            Subject <span className="text-idc-orange">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors bg-white"
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="Chrome Plating Inquiry">Chrome Plating Inquiry</option>
            <option value="Product Query">Product Query</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message textarea */}
        <div>
          <label htmlFor="message" className="block text-idc-navy text-xs font-semibold mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your requirement — component type, dimensions, quantity, or any specific chrome plating needs..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-idc-blue focus:ring-1 focus:ring-idc-blue transition-colors resize-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-idc-orange text-idc-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-500 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
