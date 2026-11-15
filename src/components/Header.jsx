import { useEffect, useState } from 'react';
import { Bookmark, Menu, Moon, Sun } from 'lucide-react';
import { GdgLogo } from './GdgLogo';

const NAV_LINKS = [
  { href: '#about-gdg', label: 'GDG DUT' },
  { href: '#courses', label: 'Khóa học' },
  { href: '#methodology', label: 'Phương pháp' },
  { href: '#testimonials', label: 'Cảm nhận' },
  { href: '#faq', label: 'FAQ' },
];

export function Header({
  theme,
  onToggleTheme,
  wishlistCount,
  onOpenWishlist,
  onOpenMobileMenu,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[var(--border-hairline)] transition-all duration-200 ${
        scrolled
          ? 'h-16 bg-[var(--bg-ground)]/90 backdrop-blur-md'
          : 'h-[74px] bg-[var(--bg-ground)]'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[var(--ink-primary)] no-underline"
        >
          <GdgLogo width={34} height={22} />
          <span className="font-[var(--font-display)] text-xl font-bold tracking-tight">
            GDGLexi
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Điều hướng chính">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label={`Mở danh sách khóa học đã lưu (${wishlistCount})`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink-primary)] transition-colors hover:border-[var(--border-strong)]"
          >
            <Bookmark className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span className="hidden sm:inline">Đã lưu</span>
            <span className="tabular-nums font-[var(--font-mono)] font-semibold text-[var(--accent)]">
              {wishlistCount}
            </span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--ink-primary)] transition-colors hover:border-[var(--border-strong)]"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-md bg-[var(--accent)] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] sm:inline-flex dark:text-[#0C1018]"
          >
            Đăng ký đầu vào
          </a>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Mở menu điều hướng"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--ink-primary)] lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
