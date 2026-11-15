import { useEffect, useRef } from 'react';
import { Bookmark, CheckCircle2, Trash2, X } from 'lucide-react';
import { GdgLogo } from './GdgLogo';

function useOverlayBehavior(isOpen, onClose) {
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);
}

export function CourseModal({
  course,
  isSaved,
  onToggleWishlist,
  onEnroll,
  onClose,
}) {
  const closeBtnRef = useRef(null);
  useOverlayBehavior(Boolean(course), onClose);

  useEffect(() => {
    if (course && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [course]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--ink-primary)]">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[var(--border-hairline)] bg-[var(--bg-surface)] px-6 py-4">
          <div>
            <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--accent)]">
              {course.code} • {course.level}
            </span>
            <h3
              id="course-modal-title"
              className="mt-1 font-[var(--font-display)] text-2xl font-bold tracking-tight"
            >
              {course.title}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Đóng chi tiết khóa học"
            className="rounded-md border border-[var(--border-hairline)] p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="grid grid-cols-2 gap-4 border border-[var(--border-hairline)] bg-[var(--bg-tinted)] p-4 text-sm sm:grid-cols-3">
            <div>
              <span className="block text-xs text-[var(--ink-muted)]">Mục tiêu</span>
              <strong className="mt-0.5 block font-semibold">{course.target}</strong>
            </div>
            <div>
              <span className="block text-xs text-[var(--ink-muted)]">Thời lượng</span>
              <strong className="tabular-nums mt-0.5 block font-semibold">{course.duration}</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-xs text-[var(--ink-muted)]">Học phí</span>
              <strong className="tabular-nums mt-0.5 block font-semibold text-[var(--accent)]">
                {course.price}
              </strong>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Đối tượng phù hợp
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-secondary)]">
              {course.suitableFor}
            </p>
            <p className="mt-2 text-xs text-[var(--ink-muted)]">
              Lịch học: <span className="text-[var(--ink-primary)]">{course.schedule}</span> •{' '}
              <span className="text-[var(--ink-primary)]">{course.format}</span>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Lộ trình 3 giai đoạn
            </h4>
            <ul className="mt-2.5 divide-y divide-[var(--border-hairline)] border border-[var(--border-hairline)]">
              {course.curriculum.map((step) => (
                <li key={step} className="px-4 py-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Quyền lợi đi kèm
            </h4>
            <ul className="mt-2 space-y-2">
              {course.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--ink-secondary)]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] bg-[var(--bg-tinted)] px-6 py-4">
          <button
            type="button"
            onClick={() => onToggleWishlist(course.id)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
              isSaved
                ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                : 'border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--ink-primary)]'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
            {isSaved ? 'Đã lưu khóa học' : 'Lưu vào danh sách'}
          </button>

          <button
            type="button"
            onClick={() => onEnroll(course.id)}
            className="rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0C1018]"
          >
            Đăng ký kiểm tra đầu vào lớp này
          </button>
        </div>
      </div>
    </div>
  );
}

export function WishlistDrawer({
  isOpen,
  savedCourses,
  onRemove,
  onClear,
  onSelectCourse,
  onClose,
}) {
  const closeBtnRef = useRef(null);
  useOverlayBehavior(isOpen, onClose);

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="flex h-full w-full max-w-md flex-col border-l border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--ink-primary)]">
        <div className="flex items-center justify-between border-b border-[var(--border-hairline)] px-5 py-4">
          <div>
            <h3
              id="wishlist-drawer-title"
              className="font-[var(--font-display)] text-lg font-bold"
            >
              Khóa học đã lưu ({savedCourses.length})
            </h3>
            <p className="text-xs text-[var(--ink-muted)]">
              Lưu lại lộ trình bạn quan tâm để so sánh trước khi test đầu vào.
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Đóng danh sách đã lưu"
            className="rounded-md border border-[var(--border-hairline)] p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {savedCourses.length === 0 ? (
            <div className="rounded-md border border-dashed border-[var(--border-strong)] p-6 text-center">
              <p className="text-sm font-medium text-[var(--ink-primary)]">
                Chưa có khóa học nào được lưu.
              </p>
              <p className="mt-1 text-xs text-[var(--ink-muted)]">
                Nhấn nút “Lưu” trên từng khóa học để thêm vào danh sách theo dõi.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--border-hairline)] border border-[var(--border-hairline)]">
              {savedCourses.map((course) => (
                <li key={course.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-[var(--font-mono)] text-[11px] font-semibold text-[var(--accent)]">
                        {course.code}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectCourse(course);
                        }}
                        className="mt-0.5 block text-left text-sm font-semibold hover:text-[var(--accent)]"
                      >
                        {course.title}
                      </button>
                      <p className="tabular-nums mt-1 text-xs text-[var(--ink-muted)]">
                        {course.duration} • {course.price}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemove(course.id)}
                      aria-label={`Xóa ${course.title} khỏi danh sách đã lưu`}
                      className="rounded p-1.5 text-[var(--ink-muted)] hover:text-[var(--danger)]"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {savedCourses.length > 0 && (
          <div className="flex items-center justify-between gap-3 border-t border-[var(--border-hairline)] bg-[var(--bg-tinted)] px-5 py-4">
            <button
              type="button"
              onClick={onClear}
              className="text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--danger)]"
            >
              Xóa tất cả
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--accent-hover)] dark:text-[#0C1018]"
            >
              Đặt lịch tư vấn
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}

export function MobileNavDrawer({ isOpen, onClose }) {
  const closeBtnRef = useRef(null);
  useOverlayBehavior(isOpen, onClose);

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { href: '#about-gdg', label: 'GDG on Campus - DUT' },
    { href: '#courses', label: 'Chương trình & Khóa học' },
    { href: '#methodology', label: 'Phương pháp 4 bước' },
    { href: '#testimonials', label: 'Kết quả học viên' },
    { href: '#faq', label: 'Câu hỏi thường gặp' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <nav className="flex h-full w-72 flex-col border-l border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 text-[var(--ink-primary)]">
        <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4">
          <div className="flex items-center gap-2">
            <GdgLogo width={28} height={18} />
            <span className="font-[var(--font-display)] text-base font-bold">GDGLexi</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="rounded-md border border-[var(--border-hairline)] p-1.5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-4 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--ink-secondary)] hover:bg-[var(--bg-tinted)] hover:text-[var(--ink-primary)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-auto block rounded-md bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white dark:text-[#0C1018]"
        >
          Đặt lịch kiểm tra đầu vào
        </a>
      </nav>
    </div>
  );
}

export function Toast({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-5 bottom-5 z-50 flex max-w-sm items-start gap-3 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-board)] px-4 py-3 text-sm text-white shadow-lg"
    >
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
      <p className="leading-snug">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Đóng thông báo"
        className="ml-auto rounded p-0.5 text-slate-400 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
