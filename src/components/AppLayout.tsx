'use client';

import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout wraps all public-facing pages.
 * - Navbar is sticky at the top.
 * - MobileNav renders a fixed bottom tab bar on small screens.
 * - No footer — intentional product decision.
 * - The page body scrolls naturally — no overflow:hidden.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
        width: '100%',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      {/* pb-20 on mobile = clearance for 80px fixed bottom nav. lg:pb-0 cancels it. */}
      <main
        className="lg:pb-0 pb-20"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}
      >
        {children}
      </main>
      <MobileNav />
    </div>
  );
};
