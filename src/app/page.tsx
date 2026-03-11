'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';
import { Footer } from '@/components/Footer';

const TEMPLATES = [
  { id: 1, name: 'Drake Reaction', category: 'Reactions', rank: 1, hue: 200 },
  { id: 2, name: 'Two Button Choice', category: 'Reactions', rank: 2, hue: 240 },
  { id: 3, name: 'Distracted Moment', category: 'Classic', rank: 3, hue: 160 },
  { id: 4, name: 'Highway Exit', category: 'Reactions', rank: 4, hue: 30 },
  { id: 5, name: 'Change Your Mind', category: 'Classic', rank: 5, hue: 280 },
  { id: 6, name: 'Everything Fine', category: 'Reactions', rank: 6, hue: 20 },
  { id: 7, name: 'Much Wow', category: 'Animals', rank: 7, hue: 50 },
  { id: 8, name: 'Genius Problem', category: 'Classic', rank: 8, hue: 330 },
];

const TOOLS = [
  {
    title: 'AI Meme Generator',
    desc: 'Describe your idea and let AI create stunning images instantly.',
    cta: 'Try Generator',
    href: '/image-studio',
    accent: 'from-blue-500/20 to-blue-500/0',
  },
  {
    title: 'Template Editor',
    desc: 'Edit 1000+ curated templates with instant text, filters, and effects.',
    cta: 'Open Editor',
    href: '/meme-studio',
    accent: 'from-green-500/20 to-green-500/0',
  },
  {
    title: 'AI Companion',
    desc: 'Brainstorm meme ideas with voice-powered creative assistant.',
    cta: 'Start Chat',
    href: '/companion',
    accent: 'from-purple-500/20 to-purple-500/0',
  },
];

const FEATURES = [
  {
    title: '1000+ Templates',
    desc: 'Curated collection of trending meme formats updated daily.',
  },
  {
    title: 'Zero Watermarks',
    desc: 'Download full-quality PNG and JPG exports completely free.',
  },
  {
    title: 'Multiple Formats',
    desc: 'Export as images or video. Share instantly to social media.',
  },
];

const FAQS = [
  { 
    q: 'Is MemeLab really free?', 
    a: 'Yes, completely free. Create, edit, and download unlimited memes with no signup required. Optional wallet connection unlocks premium AI features.' 
  },
  { 
    q: 'Do I need an account?', 
    a: 'No account needed to get started. Browse, create, and download instantly. Sign up when you want to save your creations.' 
  },
  { 
    q: 'Can I use commercial templates?', 
    a: 'Yes. You own all rights to memes you create. Use them for personal or commercial projects without restrictions.' 
  },
  { 
    q: 'What export formats are available?', 
    a: 'Export as PNG (recommended), JPG, animated GIF, or MP4 video. All exports are high-quality with no watermarks.' 
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All', 'Reactions', 'Animals', 'Classic', 'Gaming', 'Business'];
  const filtered = activeCategory === 'All' ? TEMPLATES : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════ */
        {/* HERO SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-20) var(--space-6)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: 'inline-block',
                marginBottom: 'var(--space-8)',
                padding: 'var(--space-2) var(--space-4)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-sm)',
                color: 'var(--accent-primary)',
              }}
            >
              Free AI-powered meme generator
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 8vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
                letterSpacing: '-0.02em',
              }}
            >
              Create memes that go viral
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: 'var(--font-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-10)',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto var(--space-10)',
              }}
            >
              1000+ templates, AI captions, instant exports. No signup. No watermarks. Create unlimited memes in seconds.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/meme-studio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  paddingLeft: 'var(--space-6)',
                  paddingRight: 'var(--space-6)',
                  paddingTop: 'var(--space-3)',
                  paddingBottom: 'var(--space-3)',
                  background: 'white',
                  color: '#020617',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-sm)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1.05)';
                  el.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1)';
                  el.style.boxShadow = 'none';
                }}
              >
                Start creating
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
              <Link
                href="/explorer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  paddingLeft: 'var(--space-6)',
                  paddingRight: 'var(--space-6)',
                  paddingTop: 'var(--space-3)',
                  paddingBottom: 'var(--space-3)',
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-sm)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'var(--bg-hover)';
                  el.style.borderColor = 'var(--border-medium)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'transparent';
                  el.style.borderColor = 'var(--border)';
                }}
              >
                Explore templates
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* FEATURES GRID */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-12) var(--space-6)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: 'var(--space-6)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-secondary)',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border-medium)';
                    el.style.background = 'var(--bg-tertiary)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.background = 'var(--bg-secondary)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{ fontSize: 'var(--font-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* TEMPLATES SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-16) var(--space-6)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                Trending templates
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
                Popular formats updated daily
              </p>
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-8)' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    border: '1px solid',
                    borderRadius: 'var(--radius-lg)',
                    background: activeCategory === cat ? 'var(--accent-primary)' : 'transparent',
                    color: activeCategory === cat ? '#020617' : 'var(--text-secondary)',
                    borderColor: activeCategory === cat ? 'transparent' : 'var(--border)',
                    fontSize: 'var(--font-sm)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    if (activeCategory !== cat) {
                      el.style.borderColor = 'var(--border-medium)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    if (activeCategory !== cat) {
                      el.style.borderColor = 'var(--border)';
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Template Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              {filtered.map((t) => (
                <Link
                  key={t.id}
                  href="/meme-studio"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-secondary)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border-medium)';
                    el.style.background = 'var(--bg-tertiary)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border)';
                    el.style.background = 'var(--bg-secondary)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '1',
                      background: `linear-gradient(135deg, hsl(${t.hue}, 55%, 20%), hsl(${t.hue + 25}, 48%, 14%))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `radial-gradient(circle, hsla(${t.hue}, 40%, 40%, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                        opacity: 0.3,
                      }}
                    />
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: `rgba(16, 185, 129, 0.15)`,
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                  </div>

                  <div style={{ padding: 'var(--space-3)' }}>
                    <div
                      style={{
                        display: 'inline-block',
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--accent-primary)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-xs)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                      }}
                    >
                      #{t.rank}
                    </div>
                    <p style={{ fontSize: 'var(--font-sm)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-secondary)' }}>
                      {t.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* TOOLS SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-16) var(--space-6)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                Powerful tools
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
                Everything you need to create amazing memes
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {TOOLS.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  style={{
                    padding: 'var(--space-6)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-secondary)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 200ms ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border-medium)';
                    el.style.background = 'var(--bg-tertiary)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border)';
                    el.style.background = 'var(--bg-secondary)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{ fontSize: 'var(--font-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                    {tool.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)', lineHeight: 1.6, marginBottom: 'auto', paddingBottom: 'var(--space-4)' }}>
                    {tool.desc}
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)',
                      fontSize: 'var(--font-sm)',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {tool.cta}
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* HOW IT WORKS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-16) var(--space-6)', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                How it works
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
                Simple 3-step process to create your memes
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-8)',
              }}
            >
              {[
                { num: '01', title: 'Choose', desc: 'Pick from 1000+ templates or upload your own' },
                { num: '02', title: 'Customize', desc: 'Add text, filters, effects with instant preview' },
                { num: '03', title: 'Export', desc: 'Download PNG, GIF, or MP4 with no watermarks' },
              ].map((step) => (
                <div key={step.num} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-4)',
                      fontSize: 'var(--font-2xl)',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: 'var(--font-base)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* FAQ SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'var(--space-16) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                Frequently asked
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
                Everything you need to know
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {FAQS.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-4)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    background: openFaq === idx ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    textAlign: 'left',
                    fontSize: 'inherit',
                    color: 'inherit',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    if (openFaq !== idx) {
                      el.style.borderColor = 'var(--border-medium)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    if (openFaq !== idx) {
                      el.style.borderColor = 'var(--border)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--font-base)', fontWeight: 600 }}>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp style={{ color: 'var(--accent-primary)', width: '20px', height: '20px' }} />
                    ) : (
                      <ChevronDown style={{ color: 'var(--text-secondary)', width: '20px', height: '20px' }} />
                    )}
                  </div>
                  {openFaq === idx && (
                    <p
                      style={{
                        marginTop: 'var(--space-4)',
                        color: 'var(--text-secondary)',
                        fontSize: 'var(--font-sm)',
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */
        {/* FINAL CTA */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section
          style={{
            padding: 'var(--space-16) var(--space-6)',
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'var(--font-2xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
              }}
            >
              Ready to create?
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                fontSize: 'var(--font-base)',
                lineHeight: 1.6,
              }}
            >
              Join thousands of creators making viral memes with MemeLab AI. Start creating in seconds, no signup required.
            </p>
            <Link
              href="/meme-studio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                paddingLeft: 'var(--space-6)',
                paddingRight: 'var(--space-6)',
                paddingTop: 'var(--space-3)',
                paddingBottom: 'var(--space-3)',
                background: 'white',
                color: '#020617',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-sm)',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'scale(1.05)';
                el.style.boxShadow = '0 16px 40px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'scale(1)';
                el.style.boxShadow = 'none';
              }}
            >
              Start creating free
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        </section>
      </main>

      {isMobile && (
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          onToggleMenu={() => setMobileMenuOpen((o) => !o)}
        />
      )}

      <Footer />
    </div>
  );
}

