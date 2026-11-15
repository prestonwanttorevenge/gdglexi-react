import { useEffect, useMemo, useState } from 'react';
import { Bookmark, Clock, Search, UserCheck, X } from 'lucide-react';
import { COURSE_CATEGORIES, COURSES } from '../data/mockData';

export function CoursesSection({ wishlistIds, onToggleWishlist, onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(searchInput.trim().toLowerCase());
    }, 200);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchCat =
        activeCategory === 'all' || course.tags.includes(activeCategory);
      if (!matchCat) return false;
      if (!debouncedQuery) return true;

      const haystack = [
        course.code,
        course.title,
        course.target,
        course.level,
        course.instructor,
        course.summary,
        ...course.tags,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(debouncedQuery);
    });
  }, [activeCategory, debouncedQuery]);

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchInput('');
    setDebouncedQuery('');
  };

  return (
    <section id="courses" className="border-b border-[var(--border-hairline)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
              Chương trình &amp; Lộ trình đào tạo
            </h2>
            <p className="mt-2.5 max-w-[62ch] text-base text-[var(--ink-secondary)]">
              Chọn lộ trình phù hợp với mục tiêu chứng chỉ và quỹ thời gian của bạn. Học phí đã bao
              gồm tài liệu và tài khoản thi thử trên máy.
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--ink-muted)]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Tìm khóa học, IELTS 7.0, VSTEP..."
              aria-label="Tìm kiếm khóa học"
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] py-2.5 pr-9 pl-9 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput('');
                  setDebouncedQuery('');
                }}
                aria-label="Xóa từ khóa tìm kiếm"
                className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-0.5 text-[var(--ink-muted)] hover:text-[var(--ink-primary)]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-[var(--border-hairline)] py-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Lọc theo nhóm khóa học">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--ink-primary)] text-[var(--bg-ground)]'
                      : 'text-[var(--ink-secondary)] hover:bg-[var(--bg-tinted)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="tabular-nums font-[var(--font-mono)] text-xs font-medium text-[var(--ink-muted)]"
          >
            HIỂN THỊ {filteredCourses.length} / {COURSES.length} KHÓA HỌC
          </p>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="mt-8 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-6 py-12 text-center">
            <p className="text-base font-semibold text-[var(--ink-primary)]">
              Không tìm thấy khóa học phù hợp với bộ lọc hiện tại.
            </p>
            <p className="mt-1.5 text-sm text-[var(--ink-secondary)]">
              Hãy thử từ khóa khác (ví dụ: IELTS, VSTEP, Cấp tốc) hoặc đặt lại bộ lọc.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0C1018]"
            >
              Xem toàn bộ khóa học
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => {
              const isSaved = wishlistIds.includes(course.id);
              return (
                <article
                  key={course.id}
                  className="flex flex-col justify-between rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] transition-colors hover:border-[var(--border-strong)]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[var(--border-hairline)] px-5 py-3">
                      <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--accent)]">
                        {course.code}
                      </span>
                      <span className="rounded bg-[var(--bg-tinted)] px-2 py-0.5 text-xs font-medium text-[var(--ink-secondary)]">
                        {course.badge}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-[var(--font-display)] text-xl font-bold leading-snug text-[var(--ink-primary)]">
                        {course.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-[var(--accent)]">
                        {course.target}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                        {course.summary}
                      </p>

                      <dl className="mt-4 space-y-2 border-t border-[var(--border-hairline)] pt-4 text-xs text-[var(--ink-secondary)]">
                        <div className="flex items-center justify-between gap-2">
                          <dt className="inline-flex items-center gap-1.5 text-[var(--ink-muted)]">
                            <Clock className="h-3.5 w-3.5" />
                            Thời lượng
                          </dt>
                          <dd className="tabular-nums font-medium text-[var(--ink-primary)]">
                            {course.duration}
                          </dd>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <dt className="inline-flex shrink-0 items-center gap-1.5 text-[var(--ink-muted)]">
                            <UserCheck className="h-3.5 w-3.5" />
                            Giảng viên
                          </dt>
                          <dd className="text-right font-medium text-[var(--ink-primary)]">
                            {course.instructor}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[var(--border-hairline)] bg-[var(--bg-tinted)]/60 px-5 py-3.5">
                    <div>
                      <span className="block text-[11px] text-[var(--ink-muted)]">Học phí trọn khóa</span>
                      <span className="tabular-nums font-[var(--font-display)] text-lg font-bold text-[var(--ink-primary)]">
                        {course.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onToggleWishlist(course.id)}
                        aria-pressed={isSaved}
                        aria-label={
                          isSaved
                            ? `Bỏ lưu khóa ${course.title}`
                            : `Lưu khóa ${course.title} vào danh sách quan tâm`
                        }
                        className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-2 text-xs font-medium transition-colors ${
                          isSaved
                            ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                            : 'border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--ink-primary)] hover:border-[var(--ink-primary)]'
                        }`}
                      >
                        <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-current' : ''}`} />
                        <span>{isSaved ? 'Đã lưu' : 'Lưu'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectCourse(course)}
                        className="rounded-md bg-[var(--ink-primary)] px-3.5 py-2 text-xs font-semibold text-[var(--bg-ground)] transition-opacity hover:opacity-90"
                      >
                        Xem lộ trình
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
