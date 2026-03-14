import {
  CheckCircle,
  Github,
  Globe,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";
import React, { useRef, useState } from "react";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "krunal-jumde",
    href: "https://linkedin.com/in/krunal-jumde",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Krunaljumde24",
    href: "https://github.com/Krunaljumde24",
    color: "text-gray-400",
    bg: "bg-gray-500/10",
    border: "border-gray-500/20",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "krunal-jumde-portfolio",
    href: "https://krunal-portfolio.hackerspace.co.in",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];
function Contact() {
  const [isDark, setDark] = useState(false);

  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate for submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500
    ${
      isDark
        ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500"
        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
    }`;
  return (
    <section id="contact" className="py-24 bg-teal-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold tracking-widest uppercase bg-sky-500/10 text-sky-500 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-900 ">Get In Touch</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-gray-500">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Let's Build Something Great
              </h3>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                I'm currently open to new opportunities — whether it's a
                full-time role, contract position, or an interesting
                collaboration. Feel free to reach out!
              </p>
            </div>

            {/* Location */}
            <div
              className={`flex items-center gap-3 p-4 rounded-2xl border
              ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <MapPin size={18} className="text-sky-500" />
              </div>
              <div>
                <div
                  className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  Location
                </div>
                <div
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Nagpur, Maharashtra, India
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {contactLinks.map(
                ({ icon: Icon, label, value, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:-translate-x-1
                    ${isDark ? `bg-gray-800 ${border}` : `bg-white ${border}`}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}
                    >
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <div
                        className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-800"}`}
                      >
                        {label}
                      </div>
                      <div className={`text-sm font-medium ${color}`}>
                        {value}
                      </div>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`p-8 rounded-2xl border ${isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h4
                  className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Message Sent!
                </h4>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-violet-600 text-white"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-violet-600 text-white hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
