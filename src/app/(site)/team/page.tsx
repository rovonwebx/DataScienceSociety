// src/app/page.tsx (This file now represents the 404 Not Found page content)

// The original imports (Image, Section, Card, Button, ContractCard) are not needed 
// for a minimal 404 page, but their styling classes are retained.
// Keeping the minimum required:
import React from 'react'; 

export const metadata = { title: "404 - Not Found" }; // Updated metadata title

export default function Page() {
  
  // NOTE: This component assumes that the Tailwind CSS classes and the 
  // CSS variable --accent (for the green color) are defined globally.
  
  return (
    // Centered container with full viewport height for the 404 content
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] flex items-center justify-center">
      
      {/* 404 Content Card - Styled to look like a prominent error box */}
      <div className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-12 sm:p-16 text-center max-w-2xl w-full shadow-xl">
        
        {/* Large 404 Number with Accent Color - Uses CSS tricks for a glowing, gradient look */}
        <h1 
          className="text-8xl sm:text-9xl font-extrabold tracking-tighter mb-4" 
          style={{
            // Apply gradient to text for high impact, using the accent color
            background: 'linear-gradient(135deg, var(--accent), #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Add a subtle drop shadow/glow for depth (requires --accent-rgb to be defined, otherwise it's just a regular drop-shadow)
            filter: 'drop-shadow(0 0 15px rgba(0, 255, 0, 0.3))' 
          }}
        >
          404
        </h1>

        {/* Page Not Found Message */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Page <span className="text-[color:var(--accent)]">Not Found</span>
        </h2>
        
        {/* User-friendly explanation */}
        <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* CTA to Home - Reusing the primary button style */}
        <div className="mt-8">
          <a 
            href="/" 
            className="rounded-full px-8 py-3 text-base font-semibold transition"
            style={{ 
              backgroundColor: 'var(--accent)', 
              color: 'var(--text-dark)' // Assuming text-dark or a similar variable for black/dark text on accent
            }}
          >
            Go Back to Home
          </a>
        </div>
        
      </div>

    </div>
  );
}
