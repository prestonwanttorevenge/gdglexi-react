import { GdgLogo } from './GdgLogo';

const DUT_FACTS = [
  {
    title: 'Trợ giá cho sinh viên DUT',
    description:
      'Hỗ trợ giảm học phí và cấp tài khoản thi thử trên máy cho sinh viên có thẻ sinh viên ĐH Đà Nẵng.',
  },
  {
    title: 'Cố vấn từ cộng đồng GDG',
    description:
      'Kết nối với các anh chị cựu sinh viên, kỹ sư đạt IELTS 8.0+ đang làm việc tại doanh nghiệp công nghệ.',
  },
  {
    title: 'Học thuận tiện tại Liên Chiểu',
    description:
      'Phòng học gần khuôn viên 54 Nguyễn Lương Bằng hoặc học Live Online buổi tối cho người đi làm, thực tập.',
  },
];

export function AboutGdg() {
  return (
    <section id="about-gdg" className="border-b border-[var(--border-hairline)] bg-[var(--bg-tinted)] py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <div className="flex items-start gap-3.5">
            <GdgLogo width={38} height={25} className="mt-1 shrink-0" />
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-3xl">
                Được tài trợ bởi Google Developer Groups on Campus - DUT
              </h2>
              <p className="mt-1 text-sm font-medium text-[var(--ink-muted)]">
                Trường Đại học Bách Khoa — Đại học Đà Nẵng
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[var(--ink-secondary)]">
            GDGLexi ra đời từ nhu cầu thực tế của sinh viên kỹ thuật tại Bách Khoa Đà Nẵng: cần đạt
            chuẩn đầu ra VSTEP B1–B2 đúng hạn tốt nghiệp và nâng trình độ IELTS để đọc tài liệu,
            phỏng vấn kỹ thuật hoặc săn học bổng.
          </p>
          <p className="mt-3.5 max-w-[65ch] text-base leading-relaxed text-[var(--ink-secondary)]">
            Nhờ nguồn tài trợ học thuật và vận hành từ GDG on Campus - DUT, học phí các lớp được
            giữ ở mức phù hợp với sinh viên nhưng vẫn đảm bảo sĩ số tối đa 10 người và chấm chữa 1:1.
          </p>
        </div>

        <ul className="divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)] bg-[var(--bg-surface)]">
          {DUT_FACTS.map((fact) => (
            <li key={fact.title} className="px-5 py-4">
              <strong className="block text-sm font-semibold text-[var(--ink-primary)]">
                {fact.title}
              </strong>
              <span className="mt-1 block text-sm leading-relaxed text-[var(--ink-secondary)]">
                {fact.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
