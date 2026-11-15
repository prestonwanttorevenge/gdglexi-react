import { GdgLogo } from './GdgLogo';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-tinted)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-start gap-3">
          <GdgLogo width={32} height={21} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-[var(--font-display)] text-base font-bold text-[var(--ink-primary)]">
              GDGLexi — GDG on Campus - DUT
            </p>
            <p className="mt-0.5 text-xs text-[var(--ink-muted)]">
              54 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng • Chương trình luyện thi IELTS &amp; VSTEP lớp nhỏ
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-5 text-xs font-medium text-[var(--ink-secondary)]" aria-label="Liên kết chân trang">
          <a href="#about-gdg" className="hover:text-[var(--ink-primary)]">
            GDG DUT
          </a>
          <a href="#courses" className="hover:text-[var(--ink-primary)]">
            Khóa học
          </a>
          <a href="#methodology" className="hover:text-[var(--ink-primary)]">
            Phương pháp
          </a>
          <a href="#faq" className="hover:text-[var(--ink-primary)]">
            FAQ
          </a>
          <a href="#contact" className="hover:text-[var(--ink-primary)]">
            Đặt lịch test
          </a>
        </nav>
      </div>
    </footer>
  );
}
