import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, X, Check, Copy, ArrowUp, Send, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5" ref={menuRef}>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-[#4E1B31] text-[#D9DCE2] hover:bg-[#521F35] hover:text-white border border-[#D9DCE2]/25 shadow-xl transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Menu Popover */}
      {isOpen && (
        <div className="w-80 sm:w-88 bg-[#381323]/95 backdrop-blur-md rounded-2xl border-2 border-[#D9DCE2]/25 shadow-2xl p-4 space-y-3 mb-1 animate-fadeIn text-left text-[#D9DCE2]">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-[#D9DCE2]/15">
            <div>
              <span className="text-xs font-bold text-[#D9DCE2] block font-serif tracking-wide">
                Direct Contact & Channels
              </span>
              <span className="text-[10px] text-[#9E5370] font-mono">
                Ummama Jamal Qureshi
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#D9DCE2] hover:bg-[#4E1B31] transition-colors cursor-pointer border border-[#D9DCE2]/15"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            
            {/* 1. WhatsApp Button */}
            <a
              href={PERSONAL_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#4E1B31] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9DCE2] flex items-center gap-1.5">
                    <span>Chat on WhatsApp</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E5370] animate-pulse" />
                  </div>
                  <div className="text-[10px] text-[#D9DCE2]/70">Fast response for discussions</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* 2. Direct Email */}
            <a
              href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#4E1B31] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#D9DCE2]">Send Direct Email</div>
                  <div className="text-[10px] text-[#D9DCE2]/70 truncate max-w-[170px]">
                    {PERSONAL_INFO.socialLinks.email}
                  </div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Copy Email Fast Action */}
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-[#2C0D1B] hover:bg-[#4E1B31] text-[11px] font-semibold text-[#D9DCE2] transition-colors cursor-pointer border border-[#D9DCE2]/15"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#9E5370]" />
                  <span className="text-[#9E5370] font-bold">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#9E5370]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            {/* 3. DevConnect Profile */}
            <a
              href={PERSONAL_INFO.socialLinks.devconnect}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#4E1B31] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9DCE2]">DevConnect Profile</div>
                  <div className="text-[10px] text-[#D9DCE2]/70">devpost.com/ummamajamal</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* 4. GitHub Profile */}
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#4E1B31] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9DCE2]">GitHub Profile</div>
                  <div className="text-[10px] text-[#D9DCE2]/70">github.com/ummamajamal</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* 5. LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#4E1B31] hover:bg-[#521F35] border border-[#D9DCE2]/15 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2C0D1B] text-[#9E5370] group-hover:bg-[#9E5370] group-hover:text-[#2C0D1B] transition-colors border border-[#D9DCE2]/15">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9DCE2]">LinkedIn Profile</div>
                  <div className="text-[10px] text-[#D9DCE2]/70">in/ummamajamal</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#9E5370] group-hover:translate-x-0.5 transition-transform" />
            </a>

          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#9E5370] text-[#2C0D1B] font-bold text-xs sm:text-sm shadow-2xl hover:bg-[#B26483] transition-all active:scale-95 border-2 border-[#D9DCE2]/40 cursor-pointer"
        aria-label="Toggle contact menu"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C0D1B] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2C0D1B]" />
        </span>
        <span>Contact Ummama</span>
      </button>

    </div>
  );
};
