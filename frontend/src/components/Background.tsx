
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#020104] overflow-hidden pointer-events-none">
      {/* Primary Floating Light Source */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] opacity-20 blur-[140px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #561AAB 0%, transparent 70%)',
          animation: 'float-slow 25s infinite alternate ease-in-out'
        }}
      />
      
      {/* Secondary Floating Light Source */}
      <div 
        className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] opacity-15 blur-[120px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #3D127A 0%, transparent 70%)',
          animation: 'float-slower 35s infinite alternate-reverse ease-in-out'
        }}
      />

      {/* Tertiary Subtle Light Drift */}
      <div 
        className="absolute top-[30%] right-[10%] w-[40%] h-[40%] opacity-[0.08] blur-[100px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #561AAB 0%, transparent 70%)',
          animation: 'drift-subtle 40s infinite linear'
        }}
      />

      {/* Cinematic Grain/Noise Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Dark Overlay to maintain depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <style>{`
        @keyframes float-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 5%) scale(1.1); }
          100% { transform: translate(-5%, 15%) scale(0.95); }
        }
        @keyframes float-slower {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-8%, -10%) rotate(5deg); }
          100% { transform: translate(12%, 2%) rotate(-5deg); }
        }
        @keyframes drift-subtle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20%, 10%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};
