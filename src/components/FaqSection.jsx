import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="border-b border-[var(--border-hairline)] bg-[var(--bg-tinted)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
          Câu hỏi thường gặp
        </h2>
        <p className="mt-2.5 text-base text-[var(--ink-secondary)]">
          Thông tin về kiểm tra đầu vào, hình thức học Live Online và chính sách cam kết đầu ra.
        </p>

        <div className="mt-8 divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)] bg-[var(--bg-surface)]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--bg-tinted)]/50"
                >
                  <span className="text-sm font-semibold text-[var(--ink-primary)] sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[var(--accent)]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`${item.id}-panel`}
                    className="border-t border-[var(--border-hairline)] bg-[var(--bg-ground)]/50 px-5 py-4 text-sm leading-relaxed text-[var(--ink-secondary)]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
