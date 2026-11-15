import { useEffect, useState } from 'react';
import { ArrowRight, CalendarClock } from 'lucide-react';
import { NOVEMBER_SCHEDULE, STATS } from '../data/mockData';

const PHRASES = ['IELTS & VSTEP', 'Writing sửa 1:1', 'Speaking tại lớp'];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="border-b border-[var(--border-hairline)] pt-10 pb-0 sm:pt-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <h1 className="font-[var(--font-display)] text-4xl leading-[1.06] font-bold tracking-[-0.03em] text-[var(--ink-primary)] sm:text-5xl lg:text-[3.35rem]">
              Luyện thi{' '}
              <span className="text-[var(--accent)] transition-opacity duration-300">
                {PHRASES[phraseIndex]}
              </span>{' '}
              lớp nhỏ, sửa bài trực tiếp 1:1.
            </h1>

            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--ink-secondary)] sm:text-lg">
              Dự án đào tạo tiếng Anh học thuật trực thuộc và được tài trợ bởi{' '}
              <strong className="font-semibold text-[var(--ink-primary)]">
                Google Developer Groups on Campus - DUT
              </strong>
              . Giảng viên chấm từng bài Writing và nghe trực tiếp phần Speaking của bạn trong mỗi
              buổi học.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0C1018]"
              >
                Đặt lịch kiểm tra đầu vào
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-medium text-[var(--ink-primary)] transition-colors hover:border-[var(--ink-primary)]"
              >
                Xem các khóa học
              </a>
            </div>

            <p className="mt-7 border-t border-[var(--border-hairline)] pt-4 text-xs leading-relaxed text-[var(--ink-muted)] sm:text-sm">
              Trường ĐH Bách Khoa - ĐH Đà Nẵng • 12.500+ lượt học viên từ 2019 • 96,4% đạt mục tiêu thi
            </p>
          </div>

          <aside
            aria-label="Lịch khai giảng các lớp sắp tới"
            className="overflow-hidden rounded-lg border border-[#1E293B] bg-[var(--bg-board)] text-slate-100"
          >
            <div className="flex items-center justify-between border-b border-[#1E293B] px-5 py-4">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-[#60A5FA]" />
                <h2 className="font-[var(--font-display)] text-base font-bold tracking-tight text-white">
                  Lịch khai giảng tháng 11
                </h2>
              </div>
              <span className="font-[var(--font-mono)] text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                Tối đa 10 / lớp
              </span>
            </div>

            <div className="divide-y divide-[#1E293B]">
              {NOVEMBER_SCHEDULE.map((row) => (
                <div
                  key={row.code}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[var(--bg-board-row)]"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-[var(--font-mono)] text-[11px] font-semibold text-[#60A5FA]">
                        {row.code}
                      </span>
                      <strong className="truncate text-sm font-semibold text-white">
                        {row.title}
                      </strong>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400">{row.detail}</p>
                  </div>

                  <span
                    className={`tabular-nums rounded px-2.5 py-1 font-[var(--font-mono)] text-xs font-semibold ${
                      row.urgent
                        ? 'border border-[#D97706] bg-[#451A03] text-[#FBBF24]'
                        : 'border border-[#334155] bg-[#161C28] text-slate-200'
                    }`}
                  >
                    {row.seats}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#1E293B] bg-[#070A0F] px-5 py-3.5 text-xs text-slate-300">
              <span>Kiểm tra đầu vào 30 phút trước khi xếp lớp</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-[#60A5FA] hover:underline"
              >
                Đăng ký kiểm tra
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>

        <div
          aria-label="Số liệu đào tạo"
          className="grid grid-cols-2 divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)] bg-[var(--bg-tinted)] sm:grid-cols-4 sm:divide-x sm:divide-y-0"
        >
          {STATS.map((stat) => (
            <div key={stat.value} className="px-4 py-5 sm:px-6">
              <div className="tabular-nums font-[var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-[1.75rem]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-[var(--ink-secondary)] sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
