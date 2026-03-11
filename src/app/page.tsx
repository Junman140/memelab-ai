'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';
import { Footer } from '@/components/Footer';

const CATEGORIES = ['All', 'Reactions', 'Animals', 'Classic', 'Gaming', 'Business'];

const TEMPLATES = [
  { id: 1, name: 'Drake Pointing', category: 'Reactions', rank: 1, hue: 200 },
  { id: 2, name: 'Two Buttons', category: 'Reactions', rank: 2, hue: 240 },
  { id: 3, name: 'Distracted Boyfriend', category: 'Classic', rank: 3, hue: 160 },
  { id: 4, name: 'Left Exit 12 Off Ramp', category: 'Reactions', rank: 4, hue: 30 },
  { id: 5, name: 'Change My Mind', category: 'Classic', rank: 5, hue: 280 },
  { id: 6, name: 'This Is Fine', category: 'Reactions', rank: 6, hue: 20 },
  { id: 7, name: 'Doge', category: 'Animals', rank: 7, hue: 50 },
  { id: 8, name: 'Hide the Pain Harold', category: 'Classic', rank: 8, hue: 330 },
];

const TOOLS = [
  {
    emoji: '✨',
    badge: 'AI Powered',
    title: 'AI Meme Generator',
    desc: 'Describe your idea and let AI create stunning images or videos instantly.',
    cta: 'Try It Free',
    href: '/image-studio',
  },
  {
    emoji: '🎨',
    badge: 'Popular',
    title: 'Meme Editor',
    desc: 'Edit any of 1000+ templates — add text, stickers, filters, and effects.',
    cta: 'Open Editor',
    href: '/meme-studio',
  },
  {
    emoji: '🎙️',
    badge: 'New',
    title: 'AI Voice Companion',
    desc: 'Brainstorm meme ideas with a voice-powered AI companion.',
    cta: 'Try Companion',
    href: '/companion',
  },
];

const STEPS = [
  { num: '01', emoji: '📤', title: 'Choose or Upload', desc: 'Pick from 1000+ templates or upload your own image.' },
  { num: '02', emoji: '✏️', title: 'Customize', desc: 'Add text, stickers, filters, and effects with ease.' },
  { num: '03', emoji: '🔗', title: 'Share Instantly', desc: 'Download or share directly to your favorite platform.' },
];

const FEATURES = [
  {
    title: '1000+ Templates',
    desc: 'The internet\'s largest collection of meme templates organized by category.',
    icon: '🗃️',
  },
  {
    title: 'Lightning-Fast Editor',
    desc: 'Real-time editing with AI-powered tools and instant previews.',
    icon: '⚡',
  },
  {
    title: 'No Watermarks',
    desc: 'Download high-quality PNG & JPG memes completely free, no watermarks ever.',
    icon: '📥',
  },
];

const FAQS = [
  { q: 'Is MemeLab AI really free?', a: 'Yes! Create and download memes for free. Connect your wallet to unlock premium AI features.' },
  { q: 'Do I need to sign up?', a: 'No signup needed. Browse templates, create, and download instantly. Optional wallet connection for advanced features.' },
  { q: 'Can I use my own images?', a: 'Absolutely. Upload any image and customize it with text, stickers, and effects in our editor.' },
  { q: 'What formats can I export?', a: 'Export as PNG or JPG, or share directly to social media. All exports are watermark-free.' },
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

  const filtered = activeCategory === 'All' ? TEMPLATES : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-container py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 badge-secondary">
              <Sparkles className="icon-sm" />
              <span className="text-xs font-medium">AI-Powered Meme Creator</span>
            </div>
            
            <h1 className="text-heading-xl mb-6 leading-tight">
              Create Viral <span style={{ color: 'var(--accent-primary)' }}>Memes</span> in Seconds
            </h1>
            
            <p className="text-body-lg mb-8 text-text-secondary max-w-2xl mx-auto">
              Free AI meme generator with 1000+ templates. Edit, create, and share instantly. No sign-up, no watermarks, no limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/meme-studio" className="btn-base btn-primary-solid rounded-lg gap-2">
                <Sparkles className="icon-md" />
                Start Creating
              </Link>
              <Link href="/image-studio" className="btn-base btn-secondary-outline rounded-lg gap-2">
                AI Image Studio
                <ArrowRight className="icon-md" />
              </Link>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="section-container py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-lg mb-2">Trending Templates</h2>
            <p className="text-body-md text-text-secondary mb-6">Browse popular meme templates</p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activeCategory === cat ? 'var(--accent-primary)' : 'transparent',
                    color: activeCategory === cat ? '#020617' : 'var(--text-secondary)',
                    border: activeCategory === cat ? 'none' : '1px solid var(--border)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid-auto">
              {filtered.map(t => (
                <Link
                  key={t.id}
                  href="/meme-studio"
                  className="card-interactive rounded-xl overflow-hidden group"
                  style={{ padding: 0 }}
                >
                  <div
                    className="aspect-square flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, hsl(${t.hue}, 55%, 20%), hsl(${t.hue + 25}, 48%, 14%))`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{
                      backgroundImage: `radial-gradient(circle, hsla(${t.hue}, 40%, 40%, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }} />
                    <span className="text-5xl opacity-50 group-hover:opacity-70 transition-all group-hover:scale-110" aria-hidden="true">🎭</span>
                  </div>
                  
                  <div className="p-4 relative">
                    <span className="badge badge-primary text-xs mb-2 inline-block">#{t.rank}</span>
                    <p className="text-sm font-semibold line-clamp-2" style={{ color: 'var(--text)' }}>{t.name}</p>
                    <p className="text-xs text-text-secondary mt-1">{t.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-container py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-lg mb-2">Powerful Tools</h2>
            <p className="text-body-md text-text-secondary mb-8">Everything you need to create amazing memes</p>

            <div className="grid gap-6 md:grid-cols-3">
              {TOOLS.map(tool => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="card-feature rounded-xl group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.emoji}</span>
                    <span className="badge badge-primary text-xs">{tool.badge}</span>
                  </div>
                  <h3 className="text-heading-md mb-2">{tool.title}</h3>
                  <p className="text-body-md text-text-secondary flex-1 mb-4">{tool.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                    {tool.cta}
                    <ArrowRight className="icon-md group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="section-container py-12 bg-opacity-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-lg mb-2 text-center">How It Works</h2>
            <p className="text-body-md text-text-secondary mb-12 text-center">Simple 3-step process</p>

            <div className="grid gap-8 md:grid-cols-3">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-xl text-2xl"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.3)',
                    }}
                    aria-hidden="true"
                  >
                    {step.emoji}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent-primary mb-1">Step {step.num}</div>
                    <h3 className="text-heading-sm mb-2">{step.title}</h3>
                    <p className="text-body-sm text-text-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-container py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-lg mb-2 text-center">Why Choose MemeLab</h2>
            <p className="text-body-md text-text-secondary mb-12 text-center">Built for creators, by creators</p>

            <div className="grid gap-6 md:grid-cols-3">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="card-base rounded-xl p-6">
                  <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                  <h3 className="text-heading-sm mb-2">{feature.title}</h3>
                  <p className="text-body-md text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-container py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg mb-2 text-center">FAQ</h2>
            <p className="text-body-md text-text-secondary mb-8 text-center">Common questions answered</p>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="card-base rounded-lg overflow-hidden"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-opacity-5"
                    style={{ backgroundColor: openFaq === idx ? 'var(--bg-opacity-10)' : 'transparent' }}
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-sm font-medium">{faq.q}</span>
                    {openFaq === idx
                      ? <ChevronUp className="icon-md flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                      : <ChevronDown className="icon-md flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                    }
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4 text-body-md text-text-secondary border-t" style={{ borderColor: 'var(--border)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-container py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl block mb-4" aria-hidden="true">🎭</span>
            <h2 className="text-heading-lg mb-4">Ready to Create?</h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of creators making viral memes with MemeLab AI. Start for free, no signup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/meme-studio" className="btn-base btn-primary-solid rounded-lg gap-2">
                <Sparkles className="icon-md" />
                Start Creating
              </Link>
              <Link href="/companion" className="btn-base btn-secondary-outline rounded-lg gap-2">
                Try AI Companion
              </Link>
            </div>
          </div>
        </section>
      </main>

      {isMobile && (
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          onToggleMenu={() => setMobileMenuOpen(o => !o)}
        />
      )}

      <Footer />
    </div>
  );
}
