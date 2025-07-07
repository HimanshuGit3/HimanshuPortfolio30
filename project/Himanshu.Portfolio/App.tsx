import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorTrail, setCursorTrail] = useState<Array<{x: number, y: number, id: number}>>([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    // Custom cursor tracking with trail
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    // Detect hoverable elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup and periodic updates for dynamic content
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center cursor-none">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden cursor-none">
      {/* Enhanced Custom Cursor System */}
      
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isHovering ? 'w-16 h-16' : 'w-8 h-8'
        }`}
        style={{
          transform: `translate(${cursorPosition.x - (isHovering ? 32 : 16)}px, ${cursorPosition.y - (isHovering ? 32 : 16)}px)`,
        }}
      >
        <div className={`w-full h-full rounded-full transition-all duration-150 relative ${
          isHovering 
            ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-30' 
            : 'bg-gradient-to-r from-purple-400 to-pink-400'
        }`}>
          {/* Inner glow */}
          <div className={`absolute inset-0 rounded-full transition-all duration-150 ${
            isHovering
              ? 'bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 blur-sm opacity-60'
              : 'bg-gradient-to-r from-purple-300 to-pink-300 blur-sm opacity-40'
          }`} />
          
          {/* Center dot */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
            isHovering ? 'w-2 h-2 bg-white' : 'w-1 h-1 bg-white'
          }`} />
        </div>
      </div>
      
      {/* Cursor Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - (isHovering ? 40 : 28)}px, ${cursorPosition.y - (isHovering ? 40 : 28)}px)`,
        }}
      >
        <div className={`transition-all duration-200 rounded-full border-2 ${
          isHovering 
            ? 'w-20 h-20 border-purple-400/60 animate-pulse' 
            : 'w-14 h-14 border-purple-400/40'
        }`} />
      </div>

      {/* Cursor Trail */}
      {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-300 ease-out"
          style={{
            transform: `translate(${point.x - 6}px, ${point.y - 6}px)`,
            opacity: (index + 1) / cursorTrail.length * 0.3,
          }}
        >
          <div 
            className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-sm"
            style={{
              transform: `scale(${(index + 1) / cursorTrail.length})`,
            }}
          />
        </div>
      ))}

      {/* Magnetic Field Effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9996] transition-all duration-700 ease-out opacity-10"
        style={{
          transform: `translate(${cursorPosition.x - 100}px, ${cursorPosition.y - 100}px)`,
        }}
      >
        <div className="w-48 h-48 rounded-full bg-gradient-radial from-purple-400 via-pink-400 to-transparent blur-2xl animate-pulse" />
      </div>

      {/* Sparkle Effects on Hover */}
      {isHovering && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9995] animate-ping"
              style={{
                transform: `translate(${cursorPosition.x + Math.cos(i * 60 * Math.PI / 180) * 30}px, ${cursorPosition.y + Math.sin(i * 60 * Math.PI / 180) * 30}px)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
          ))}
        </>
      )}

      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Blogs />
      <WhyHireMe />
      <Contact />
      <Footer />

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }

        /* Enhanced button hover effects */
        button:hover, a:hover {
          transform: translateY(-2px);
        }

        /* Smooth transitions for all interactive elements */
        button, a, [role="button"], input, textarea {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #a855f7);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #9333ea);
        }

        /* Gradient radial utility */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        /* Text glow effect */
        .text-glow {
          text-shadow: 0 0 20px currentColor;
        }

        /* Typing cursor blink */
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .typing-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default App;