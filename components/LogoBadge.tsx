'use client';

import React from 'react';

export function LogoBadge() {
  return (
    <div className="flex items-center">
      <div className="h-11 w-11 flex items-center justify-center rounded-full bg-[var(--electric)] text-white shadow-lg" aria-hidden>
        {/* simple house mark (inline SVG) */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform">
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="rgba(255,255,255,0.98)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
