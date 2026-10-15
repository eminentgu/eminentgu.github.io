
import React, { useEffect, useState } from 'react';

interface DarkSideProps {
  onBack: () => void;
}

const CERTS = [
  {
    title: "Smart Contracts",
    issuer: "University at Buffalo",
    url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~B72FCO5VQ4IM/CERTIFICATE_LANDING_PAGE~B72FCO5VQ4IM.jpeg"
  },
  {
    title: "Blockchain Basics",
    issuer: "University at Buffalo",
    url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5UA743PXWH2C/CERTIFICATE_LANDING_PAGE~5UA743PXWH2C.jpeg"
  },
  {
    title: "Decentralized Applications (Dapps)",
    issuer: "The State University of New York",
    url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~R8FHCKZEDDFL/CERTIFICATE_LANDING_PAGE~R8FHCKZEDDFL.jpeg"
  }
];

const INVESTMENTS = [
  {
    name: "FortyTwo",
    round: "Seed Round",
    url: "https://fortytwo.network/",
    imageUrl: "https://pbs.twimg.com/media/Gcey2ShaMAUT8NC?format=jpg&name=4096x4096",
    description: "FortyTwo redesigns the Mixture of Experts (MoE) LLM architecture by turning each expert into a standalone specialized model on the network. This creates a new way to build AI — an infinitely growing and evolving swarm."
  },
  {
    name: "VAST",
    round: "Series A",
    url: "https://www.vastspace.com/",
    imageUrl: "https://pbs.twimg.com/media/G2XLGOOacAAAT3u?format=jpg&name=medium",
    description: "Vast is the only operational commercial space station company to have flown and operated its own spacecraft in orbit. Building the infrastructure for the future of human presence in space."
  },
  {
    name: "Apptronik",
    round: "Series B",
    url: "https://apptronik.com/",
    imageUrl: "https://pbs.twimg.com/media/GmVqVhba8AEPhJF?format=jpg&name=4096x4096",
    description: "Participated in the $5B valuation Series B via SPV. Apptronik develops AI-powered humanoid robots like Apollo, designed to address the $40T physical labor market. Partnering exclusively with Google DeepMind, they are leading the frontier of embodied intelligence for global logistics and manufacturing."
  },
  {
    name: "NEURA Robotics",
    round: "Series C",
    url: "https://neura-robotics.com/",
    imageUrl: "https://neura-robotics.com/wp-content/uploads/2026/02/4NE1_Working_2-1-scaled.webp",
    description: "NEURA is the only company worldwide that designs and manufactures intelligent, cognitive robots in-house. Their mission is to expand the capabilities of collaborative robots with cognitive skills, creating seamless interaction between humans and machines."
  },
  {
    name: "Beezie",
    round: "Pre-TGE / Strategic",
    url: "https://docs.beezie.com/",
    imageUrl: "https://pbs.twimg.com/profile_banners/1610298435973906432/1778328926/1500x500",
    description: "Beezie is a digital claw machine and marketplace live on Base & Flow, transforming the world of collectibles from trading cards to watches. Merging real-world assets with digital experiences, Beezie makes it simple to trade and vault real assets on-chain with instant liquidity, secure Brink's vaulting, and partnerships with platforms like OpenSea and TAG Grading."
  }
];

export const DarkSide: React.FC<DarkSideProps> = ({ onBack }) => {
  const [ignited, setIgnited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIgnited(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-red-900 selection:text-white pb-20 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 nebula-red opacity-40 pointer-events-none z-0"></div>
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Scrollable Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <header className="pt-24 pb-16 text-center">
          <h2 className="text-red-600 text-xs tracking-[0.5em] uppercase mb-12 opacity-80 sith-glow font-bold animate-pulse">
            [ SITH HOLOCRON ARCHIVE: SECURE ACCESS ]
          </h2>

          <h1 className="text-6xl md:text-8xl font-black mb-8 sith-text italic tracking-tighter uppercase">
            Xiang GU
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <span className="text-xl md:text-2xl text-red-500 font-black tracking-widest uppercase italic border-b-2 border-red-900/50 pb-2">Web3</span>
            <span className="text-red-900 text-2xl hidden md:block">•</span>
            <span className="text-xl md:text-2xl text-red-500 font-black tracking-widest uppercase italic border-b-2 border-red-900/50 pb-2">AI</span>
            <span className="text-red-900 text-2xl hidden md:block">•</span>
            <span className="text-xl md:text-2xl text-red-500 font-black tracking-widest uppercase italic border-b-2 border-red-900/50 pb-2">Space Investor</span>
          </div>

          {/* Redesigned Lightsaber - Thicker and Longer Blade */}
          <div className="flex flex-col items-center justify-center w-full mb-20 group">
            <div className="relative flex items-center">
              {/* Detailed Hilt Assembly */}
              <div className="relative z-20 flex items-center h-6 bg-zinc-800 rounded-sm border-y border-zinc-600 shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden" style={{ width: '100px' }}>
                {/* Pommel */}
                <div className="w-1/4 h-full bg-gradient-to-b from-zinc-500 to-zinc-900 border-r border-zinc-700"></div>
                {/* Grip with ribs */}
                <div className="w-2/4 h-full bg-zinc-950 flex justify-center items-center gap-1 px-1">
                  <div className="w-1.5 h-4 bg-zinc-800 rounded-full"></div>
                  <div className="w-1.5 h-4 bg-zinc-800 rounded-full"></div>
                  <div className="w-1.5 h-4 bg-zinc-800 rounded-full"></div>
                </div>
                {/* Emitter */}
                <div className="w-1/4 h-full bg-gradient-to-r from-zinc-700 to-zinc-600 relative">
                  <div className="absolute right-1 top-2 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_red]"></div>
                </div>
              </div>
              
              {/* Plasma Blade - Thickened and Lengthened */}
              <div className="relative -ml-1 h-6 flex items-center">
                 <div 
                   className="bg-white rounded-r-full shadow-[0_0_15px_#ff0000,0_0_30px_#ff0000,0_0_50px_#ff0000,0_0_70px_#ff0000] transition-all duration-1000 cubic-bezier(0.1, 0.7, 0.1, 1)"
                   style={{ 
                     width: ignited ? 'min(380px, 60vw)' : '0px',
                     height: '8px',
                     opacity: ignited ? 1 : 0
                   }}
                 ></div>
              </div>
            </div>
            
            <p className="mt-10 text-red-900/60 text-[10px] tracking-[0.5em] font-bold uppercase italic animate-pulse">
              "Peace is a lie, there is only passion."
            </p>
          </div>
        </header>

        {/* IDENTITY SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-red-900 flex-grow"></div>
            <h3 className="text-red-500 font-black tracking-widest uppercase italic text-2xl">Core Identity</h3>
            <div className="h-px bg-red-900 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-zinc-950/50 p-8 rounded border border-red-900/20 backdrop-blur-sm">
            <div className="space-y-6">
              <h4 className="text-red-400 font-bold uppercase text-lg flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rotate-45"></span> Crypto Native
              </h4>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Operating in the decentralized frontier for <span className="text-red-500 font-bold">7+ years</span>. 
                Managing assets and building on the Ethereum ecosystem since the early cycles.
              </p>
              <div className="bg-black border border-red-900/40 p-4 rounded-sm group hover:border-red-500 transition-colors">
                <p className="text-zinc-500 text-xs uppercase mb-1 tracking-widest">Main Net Address</p>
                <code className="text-red-500 font-bold text-lg block break-all tracking-tighter">iloveyou1314.eth</code>
              </div>
            </div>
            <div className="relative h-64 bg-black/80 rounded border border-red-900/20 flex flex-col justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,red_0%,transparent_70%)]"></div>
                <img 
                  src="https://pbs.twimg.com/media/G8nKN8JWAAEbT8X?format=jpg&name=large" 
                  alt="On-chain activity" 
                  className="w-full h-full object-contain opacity-80 transition-all duration-700"
                />
            </div>
          </div>
        </section>

        {/* FORCE INVESTMENTS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-red-900 flex-grow"></div>
            <h3 className="text-red-500 font-black tracking-widest uppercase italic text-2xl">Force Investments</h3>
            <div className="h-px bg-red-900 flex-grow"></div>
          </div>

          <div className="space-y-16">
            {INVESTMENTS.map((inv, idx) => (
              <div key={idx} className="group grid grid-cols-1 md:grid-cols-5 gap-8 bg-zinc-950/40 p-8 rounded-sm border border-red-900/10 hover:border-red-600 hover:bg-zinc-900/60 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div className="aspect-video w-full rounded overflow-hidden border border-zinc-800 group-hover:border-red-500 transition-colors">
                    <img src={inv.imageUrl} alt={inv.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-red-500 text-4xl font-black italic uppercase group-hover:tracking-wider transition-all duration-500">{inv.name}</h4>
                    <p className="text-zinc-500 text-xs mt-1 uppercase tracking-[0.4em] font-bold">{inv.round}</p>
                  </div>
                </div>
                
                <div className="md:col-span-3 flex flex-col justify-between py-2">
                  <p className="text-zinc-300 text-lg leading-relaxed font-light">
                    {inv.description}
                  </p>
                  <div className="mt-8">
                    <a href={inv.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-red-500 text-sm font-black uppercase tracking-widest group/link">
                      <span className="border-b-2 border-red-900 group-hover/link:border-red-500 pb-1 transition-all">Access Network Terminal</span>
                      <span className="text-2xl transition-transform group-hover/link:translate-x-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MASTERY & TRAINING */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-red-900 flex-grow"></div>
            <h3 className="text-red-500 font-black tracking-widest uppercase italic text-2xl">Mastery & Training</h3>
            <div className="h-px bg-red-900 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTS.map((cert, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-red-600 transition-all duration-500 rounded-sm">
                <div className="aspect-video w-full overflow-hidden transition-all">
                  <img src={cert.url} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-6">
                  <h5 className="text-red-500 font-bold uppercase text-sm mb-1 tracking-tighter">{cert.title}</h5>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{cert.issuer}</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NAV */}
        <div className="flex justify-center mt-20">
          <button 
            onClick={onBack}
            className="group relative px-16 py-5 bg-zinc-900 border-2 border-sky-900 text-sky-500 transition-all duration-300 rounded shadow-[0_0_20px_rgba(12,165,233,0.1)] hover:shadow-[0_0_50px_rgba(12,165,233,0.4)] hover:border-sky-500 hover:text-sky-100"
          >
            <span className="relative z-10 font-black tracking-[0.5em] uppercase text-sm flex items-center gap-4">
              <span className="animate-pulse">«</span> Return to the Light
            </span>
            <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Decorative Red Scanline */}
      <div className="fixed top-0 left-0 w-full h-1 bg-red-600/10 shadow-[0_0_20px_rgba(255,0,0,0.4)] animate-[scanline_10s_linear_infinite] pointer-events-none z-[100]"></div>

      <style>{`
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};
