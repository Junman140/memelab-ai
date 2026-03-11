'use client';

import Link from 'next/link';
import { Map, ImagePlus, LayoutDashboard, Search, Home, ImageIcon, MessageCircle, MoreVertical, Settings as SettingsIcon } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  mobileMenuOpen: boolean;
  onToggleMenu: () => void;
  onSettingsOpen?: () => void;
  onTextChatOpen?: () => void;
}

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/explorer', icon: Search, label: 'Explorer' },
  { href: '/meme-studio', icon: ImageIcon, label: 'Meme' },
  { href: '/companion', icon: ImagePlus, label: 'AI' },
];

export const MobileNav: React.FC<MobileNavProps> = ({
  mobileMenuOpen,
  onToggleMenu,
  onSettingsOpen,
  onTextChatOpen,
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="fixed left-0 right-0 lg:hidden z-40 animate-slide-in-bottom"
          style={{
            bottom: 'max(5rem, calc(5rem + env(safe-area-inset-bottom)))',
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: 'var(--space-4)',
          }}
        >
          <div className="flex flex-col gap-2">
            <Link
              href="/roadmap"
              onClick={onToggleMenu}
              className="flex items-center gap-3 rounded-lg px-4 py-3 no-underline transition-all duration-200"
              style={{
                color: isActive('/roadmap') ? 'var(--accent-primary)' : 'var(--text)',
                backgroundColor: isActive('/roadmap') ? 'rgba(16,185,129,0.1)' : 'transparent',
              }}
            >
              <Map className="icon-md" />
              <span className="text-sm font-medium">Roadmap</span>
            </Link>
            <Link
              href="/image-studio"
              onClick={onToggleMenu}
              className="flex items-center gap-3 rounded-lg px-4 py-3 no-underline transition-all duration-200"
              style={{
                color: isActive('/image-studio') ? 'var(--accent-primary)' : 'var(--text)',
                backgroundColor: isActive('/image-studio') ? 'rgba(16,185,129,0.1)' : 'transparent',
              }}
            >
              <ImagePlus className="icon-md" />
              <span className="text-sm font-medium">Image Studio</span>
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onTextChatOpen?.();
                onToggleMenu();
              }}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 text-left"
              style={{
                color: 'var(--text)',
                backgroundColor: 'transparent',
              }}
            >
              <MessageCircle className="icon-md" />
              <span className="text-sm font-medium">Chats</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onSettingsOpen?.();
                onToggleMenu();
              }}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 text-left"
              style={{
                color: 'var(--text)',
                backgroundColor: 'transparent',
              }}
            >
              <SettingsIcon className="icon-md" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>
      )}

      <nav
        className="fixed bottom-0 left-0 right-0 safe-area-bottom border-t lg:hidden"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-secondary)',
          zIndex: 'var(--z-sidebar)',
        }}
      >
        <div className="flex items-center justify-around px-2" style={{ padding: 'var(--space-3) 0' }}>
          {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 no-underline transition-all duration-200"
                style={{
                  color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                }}
                aria-label={label}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="icon-lg" />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={onToggleMenu}
            className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all duration-200"
            style={{
              color: mobileMenuOpen ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}
            aria-label="More options"
            aria-expanded={mobileMenuOpen}
          >
            <MoreVertical className="icon-lg" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};

