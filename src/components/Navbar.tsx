'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WalletButton } from './WalletButton';
import { Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Create', href: '/meme-studio' },
  { label: 'AI Studio', href: '/image-studio' },
  { label: 'Explorer', href: '/explorer' },
  { label: 'Roadmap', href: '/roadmap' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">

        {/* Left — brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline shrink-0 transition-transform hover:scale-105"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-sm tracking-tight shadow-md"
            style={{
              backgroundImage: 'var(--gradient-primary)',
              color: '#020617',
            }}
          >
            ML
          </div>
          <span className="hidden font-bold text-sm md:block text-heading-sm" style={{ color: 'var(--text)' }}>
            MemeLab<span style={{ color: 'var(--accent-primary)' }}> AI</span>
          </span>
        </Link>

        {/* Center — nav links (desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200"
                style={{
                  color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: active ? 'rgba(16,185,129,0.12)' : 'transparent',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right — wallet + CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex">
            <WalletButton />
          </div>
          <Link
            href="/companion"
            className="btn-base btn-primary-solid btn-sm gap-1.5 rounded-lg"
          >
            <Sparkles className="icon-sm" />
            <span className="hidden sm:inline">Try AI</span>
            <span className="sm:hidden">AI</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
