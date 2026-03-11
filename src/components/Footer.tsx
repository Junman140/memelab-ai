'use client';

export const Footer = () => {
  return (
    <footer className="border-t mt-auto" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-xs"
                style={{
                  backgroundImage: 'var(--gradient-primary)',
                  color: '#020617',
                }}
              >
                ML
              </div>
              <span className="font-bold text-sm">MemeLab AI</span>
            </div>
            <p className="text-sm text-body-sm max-w-sm">
              Free AI-powered meme generator. Create professional memes with templates, GIFs, and video exports—no signup required.
            </p>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-body-sm">
              <li><a href="/meme-studio" className="hover:text-accent transition-colors">Meme Studio</a></li>
              <li><a href="/image-studio" className="hover:text-accent transition-colors">Image Studio</a></li>
              <li><a href="/explorer" className="hover:text-accent transition-colors">Explorer</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-body-sm">
              <li><a href="/roadmap" className="hover:text-accent transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', margin: 'var(--space-6) 0' }} />

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-body-sm">
          <span>© {new Date().getFullYear()} MemeLab AI. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

