import React, { useState, useEffect } from "react";
import { Share2, Mail, MessageSquare, Send, User, ExternalLink, Phone } from "lucide-react";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { PERSONAL_INFO } from "../constants/portfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we deliver your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const form = e.target;
      const data = new FormData(form);

      await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#2563eb',
        timer: 2500,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#2563eb'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      name: "Email",
      value: PERSONAL_INFO.socials.email,
      href: `mailto:${PERSONAL_INFO.socials.email}`,
      icon: Mail,
      color: "from-blue-600 to-cyan-500",
      textColor: "text-blue-500 dark:text-blue-400"
    },
    {
      name: "LinkedIn",
      value: "Let's Connect",
      href: PERSONAL_INFO.socials.linkedin,
      icon: User,
      color: "from-[#0A66C2] to-[#0077B5]",
      textColor: "text-blue-650 dark:text-[#0A66C2]"
    },
    {
      name: "GitHub",
      value: "@AbhayGinoya",
      href: PERSONAL_INFO.socials.github,
      icon: ExternalLink,
      color: "from-[#24292e] to-[#333]",
      textColor: "text-slate-800 dark:text-white"
    },
    {
      name: "WhatsApp",
      value: "Chat on WhatsApp",
      href: PERSONAL_INFO.socials.whatsapp,
      icon: Phone,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-500 dark:text-emerald-400"
    }
  ];

  return (
    <section className="py-20 md:px-[10%] px-[5%] bg-transparent w-full overflow-hidden" id="Contact">
      {/* Title */}
      <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Have an application concept or business workflow you'd like to bring online? Submit your request here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct details & Form */}
        <div 
          className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 mb-2">
                Send a Message
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>
            <Share2 className="w-8 h-8 text-blue-500 opacity-60" />
          </div>

          <form
            action={`https://formsubmit.co/ajax/${PERSONAL_INFO.socials.email}`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 placeholder-slate-400 dark:placeholder-gray-500 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 disabled:opacity-50"
                required
              />
            </div>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 placeholder-slate-400 dark:placeholder-gray-500 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 disabled:opacity-50"
                required
              />
            </div>
            
            <div className="relative group">
              <textarea
                name="message"
                placeholder="Briefly describe your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full resize-none p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 placeholder-slate-400 dark:placeholder-gray-500 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 h-36 disabled:opacity-50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Delivering...' : 'Send Message'}</span>
            </button>
          </form>

          {/* Quick Contact Links Cards Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
            {contactMethods.map((method, idx) => {
              const IconComp = method.icon;
              return (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{method.name}</div>
                    <div className={`text-xs font-semibold truncate ${method.textColor}`}>{method.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Commenting Area */}
        <div 
          className="lg:col-span-5 p-3 py-3 sm:p-6 sm:py-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Komentar />
        </div>

      </div>
    </section>
  );
};

export default ContactPage;