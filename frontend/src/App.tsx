
import React from 'react';
import { Background } from './components/Background';
import { GlassCard } from './components/GlassCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-0 md:p-8 overflow-hidden">
      <Background />
      
      <main className="relative z-10 w-full max-w-lg h-full md:h-auto flex items-center justify-center">
        <GlassCard />
      </main>
    </div>
  );
};

export default App;
