
import React, { useState } from 'react';
import { LucideShare2, LucideExternalLink, LucideInstagram, LucideTwitter, LucideLinkedin, LucideMessageCircle, LucideCopy, LucideCheck, LucideX } from 'lucide-react';

export const GlassCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://mergex.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { title: 'View Our Portfolio', subtitle: 'Recent web & automation builds', url: '#' },
    { title: 'AI Audit (Free)', subtitle: 'Discover scaling opportunities', url: '#' },
    { title: 'Book a Strategy Call', subtitle: '15-min discovery session', url: '#' },
    { title: 'Read the Blog', subtitle: 'Insights on tech & business', url: '#' },
  ];

  return (
    <div className="w-full h-screen md:h-auto flex items-center justify-center p-4">
      <div className="relative w-full max-w-[420px] h-[720px] md:h-[760px] bg-[#0a0a0c]/80 md:bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col text-white overflow-hidden transition-all duration-500">
        
        {/* Subtle reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent pointer-events-none" />
        
        {/* Header Controls */}
        <div className="absolute top-8 left-8 right-8 z-40 flex justify-between items-center">
          <button className={`bg-white/[0.08] hover:bg-white/15 transition-all px-4 py-2 rounded-full text-xs font-medium border border-white/5 active:scale-95 ${isShareOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            Start a Project
          </button>
          <button 
            onClick={() => setIsShareOpen(!isShareOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all border border-white/5 active:scale-95 z-50 ${isShareOpen ? 'bg-white/10 text-white' : 'bg-white/[0.08] hover:bg-white/15'}`}
          >
            {isShareOpen ? <LucideX size={18} /> : <LucideShare2 size={18} />}
          </button>
        </div>

        {/* FRONT CONTENT - Opacity drops to 0 when share is open */}
        <div className={`relative z-10 flex flex-col p-8 md:p-10 pt-24 transition-all duration-500 ease-in-out ${isShareOpen ? 'opacity-0 scale-95 pointer-events-none translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
          {/* Logo */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-24 h-24 mb-6 relative animate-float flex items-center justify-center">
               <img 
                 src="/assets/logo.webp" 
                 alt="MergeX Logo" 
                 className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
               />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              MergeX
            </h1>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
              Building websites & automations that scale your business.<br/>
              <span className="text-white/30 block mt-2 font-light text-[13px]">Web Development | AI Automation</span>
              <span className="text-[#561AAB]/80 font-medium block mt-1 text-[13px]">Innovation Merged.</span>
            </p>
          </div>

          {/* Links List */}
          <div className="space-y-4">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url}
                className="group relative block w-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#561AAB]/30 py-4 px-6 rounded-2xl transition-all duration-300 active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#561AAB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex justify-between items-center">
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/50 mt-0.5">
                      {link.subtitle}
                    </p>
                  </div>
                  <LucideExternalLink size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SHARE OVERLAY - Slides in and fades front to zero */}
        <div className={`absolute inset-0 z-30 bg-[#0a0a0c]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out p-8 md:p-10 pt-24 flex flex-col ${isShareOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
          <h2 className="text-2xl font-semibold mb-2">Spread the Word</h2>
          <p className="text-white/40 text-sm mb-8 font-light leading-relaxed">Share MergeX with your network of visionary founders and digital builders.</p>

          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-between mb-8 group">
            <span className="text-xs text-white/40 font-mono truncate mr-4">mergex.com</span>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#561AAB] hover:bg-[#6c28d1] px-5 py-2.5 rounded-xl text-xs font-medium transition-all active:scale-95 whitespace-nowrap"
            >
              {copied ? <LucideCheck size={14} /> : <LucideCopy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <ShareButton icon={<LucideInstagram size={20}/>} label="Instagram" />
             <ShareButton icon={<LucideTwitter size={20}/>} label="X (Twitter)" />
             <ShareButton icon={<LucideLinkedin size={20}/>} label="LinkedIn" />
             <ShareButton icon={<LucideMessageCircle size={20}/>} label="WhatsApp" />
          </div>

          <div className="mt-auto text-center pb-4">
            <p className="text-[10px] text-white/10 uppercase tracking-[0.3em] font-light">Merge ideas with innovation</p>
          </div>
        </div>

        {/* Aesthetic Bottom Shine */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#561AAB]/30 to-transparent blur-[2px]" />
      </div>
    </div>
  );
};

const ShareButton: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 py-6 rounded-2xl transition-all hover:border-[#561AAB]/20 group active:scale-95">
    <div className="text-white/30 group-hover:text-[#561AAB] transition-colors">{icon}</div>
    <span className="text-[11px] text-white/40 group-hover:text-white transition-colors">{label}</span>
  </button>
);
