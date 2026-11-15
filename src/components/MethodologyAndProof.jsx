import { METHODOLOGY_STEPS, TESTIMONIALS } from '../data/mockData';

export function MethodologyAndProof() {
  return (
    <>
      <section
        id="methodology"
        className="border-b border-[var(--border-hairline)] bg-[var(--bg-tinted)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-[62ch]">
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
              Quy trình học &amp; chấm chữa 4 bước
            </h2>
            <p className="mt-2.5 text-base text-[var(--ink-secondary)]">
              Mỗi học viên đi theo đúng chu trình kiểm tra đầu vào — thực hành nhóm nhỏ — sửa lỗi
              cá nhân — thi thử trên máy tính.
            </p>
          </div>

          <div className="mt-10 grid divide-y divide-[var(--border-hairline)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {METHODOLOGY_STEPS.map((item) => (
              <article key={item.step} className="p-6">
                <span className="font-[var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {item.step}
                </span>
                <h3 className="mt-2.5 font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--ink-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-b border-[var(--border-hairline)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-[62ch]">
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
              Kết quả từ học viên đã thi
            </h2>
            <p className="mt-2.5 text-base text-[var(--ink-secondary)]">
              Phản hồi thực tế từ sinh viên và người đi làm hoàn thành kỳ thi IELTS và VSTEP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col justify-between rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
              >
                <blockquote className="text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-[15px]">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-6 border-t border-[var(--border-hairline)] pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <strong className="text-sm font-semibold text-[var(--ink-primary)]">
                      {item.name}
                    </strong>
                    <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--success)]">
                      {item.achievement}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">{item.course}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
