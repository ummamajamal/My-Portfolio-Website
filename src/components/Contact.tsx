import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

// Custom WhatsApp SVG Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.51 2 2.016 6.495 2.016 12.016c0 1.968.563 3.882 1.63 5.539L2 22l4.609-1.594A9.97 9.97 0 0 0 12.03 22c5.522 0 10.016-4.495 10.016-10.016S17.553 2 12.031 2zm0 18.234a8.18 8.18 0 0 1-4.226-1.164l-.304-.18-2.73.945.945-2.66-.199-.316A8.19 8.19 0 0 1 3.83 12.016c0-4.52 3.678-8.199 8.201-8.199 4.52 0 8.199 3.679 8.199 8.199 0 4.52-3.679 8.218-8.199 8.218zm4.496-6.148c-.246-.125-1.457-.719-1.683-.801-.227-.082-.39-.125-.555.125-.164.246-.637.801-.781.965-.145.164-.289.184-.535.063-.246-.125-1.04-.383-1.98-1.223-.73-.652-1.223-1.457-1.367-1.703-.145-.246-.016-.379.105-.504.11-.113.246-.289.371-.434.125-.145.164-.246.246-.41.082-.164.041-.309-.02-.434-.063-.125-.555-1.336-.762-1.832-.2-.48-.406-.418-.555-.426l-.473-.008c-.164 0-.434.063-.66.309-.227.246-.863.844-.863 2.059 0 1.215.887 2.387 1.012 2.551.125.164 1.746 2.664 4.227 3.734.59.254 1.05.406 1.41.52.593.188 1.133.16 1.56.098.477-.07 1.457-.594 1.66-1.172.207-.578.207-1.07.145-1.172-.062-.102-.226-.164-.472-.289z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.socialLinks.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-[#44182B] border-t border-[#D9DCE2]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-[#9E5370] font-bold mb-2">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D9DCE2] tracking-tight">
              Let's Connect & Build Together
            </h2>
            <p className="text-sm sm:text-base text-[#D9DCE2]/80 mt-3 max-w-2xl">
              Open to technical discussions, mentorship, collaborative projects in AI automation, and opportunities to learn and build impactful systems.
            </p>
            <div className="w-16 h-1 bg-[#9E5370] mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Contact Channels & Profile Cards */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-[#4E1B31] rounded-2xl p-6 border-2 border-[#D9DCE2]/20 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#2C0D1B] text-[#9E5370] border border-[#D9DCE2]/15">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C0D1B] hover:bg-[#381323] text-xs font-semibold text-[#D9DCE2] transition-colors cursor-pointer border border-[#D9DCE2]/15"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#9E5370]" />
                      <span className="text-[#9E5370] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[#9E5370] font-bold">
                  Direct Email
                </div>
                <a 
                  href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                  className="text-base sm:text-lg font-serif font-bold text-[#D9DCE2] hover:text-white hover:underline break-all mt-1 block"
                >
                  {PERSONAL_INFO.socialLinks.email}
                </a>
                <p className="text-xs text-[#D9DCE2]/70 mt-1">
                  Preferred channel for project discussions, inquiries & collaboration.
                </p>
              </div>
            </div>

            {/* Social & Professional Profile Links */}
            <div className="bg-[#4E1B31] rounded-2xl p-6 border border-[#D9DCE2]/20 shadow-md space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#D9DCE2] font-bold">
                Professional Channels
              </div>

              <div className="space-y-3">
                {/* WhatsApp Direct Chat */}
                <a
                  href={PERSONAL_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#381323] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#D9DCE2] flex items-center gap-1.5">
                        <span>WhatsApp</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E5370] animate-pulse" />
                      </div>
                      <div className="text-[11px] text-[#D9DCE2]/70">Direct message & collaboration</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* DevConnect / DevPost */}
                <a
                  href={PERSONAL_INFO.socialLinks.devconnect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#381323] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#D9DCE2]">DevConnect</div>
                      <div className="text-[11px] text-[#D9DCE2]/70">devpost.com/ummamajamal</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#381323] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#D9DCE2]">GitHub</div>
                      <div className="text-[11px] text-[#D9DCE2]/70">github.com/ummamajamal</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#381323] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#D9DCE2]">LinkedIn</div>
                      <div className="text-[11px] text-[#D9DCE2]/70">in/ummamajamal</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#381323] border border-[#D9DCE2]/15">
                  <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] border border-[#D9DCE2]/15">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#D9DCE2]">Location</div>
                    <div className="text-[11px] text-[#D9DCE2]/70">{PERSONAL_INFO.socialLinks.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Direct Dispatch Message Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <div className="bg-[#4E1B31] rounded-2xl p-6 sm:p-8 border border-[#D9DCE2]/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D9DCE2]">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#D9DCE2]/75 mt-1 mb-6">
                Fill in your details to open your email client pre-addressed to Ummama Jamal Qureshi.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D9DCE2] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/20 text-xs sm:text-sm text-[#D9DCE2] placeholder-[#D9DCE2]/40 focus:outline-none focus:border-[#9E5370] focus:ring-1 focus:ring-[#9E5370] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D9DCE2] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/20 text-xs sm:text-sm text-[#D9DCE2] placeholder-[#D9DCE2]/40 focus:outline-none focus:border-[#9E5370] focus:ring-1 focus:ring-[#9E5370] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D9DCE2] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Project Discussion / AI Automation Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/20 text-xs sm:text-sm text-[#D9DCE2] placeholder-[#D9DCE2]/40 focus:outline-none focus:border-[#9E5370] focus:ring-1 focus:ring-[#9E5370] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D9DCE2] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your note or question here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/20 text-xs sm:text-sm text-[#D9DCE2] placeholder-[#D9DCE2]/40 focus:outline-none focus:border-[#9E5370] focus:ring-1 focus:ring-[#9E5370] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#D9DCE2]/60">
                    Dispatches directly via standard mailto protocol
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#9E5370] text-[#2C0D1B] text-xs sm:text-sm font-bold hover:bg-[#B26483] transition-all cursor-pointer shadow-lg active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-[#2C0D1B] text-[#9E5370] text-xs border border-[#9E5370]/40 flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-[#9E5370]" />
                    <span>Opening your mail composer to send message to Ummama Jamal Qureshi.</span>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
