import { useEffect, useState } from 'react';
import { Loader2, MapPin, PhoneCall, Send } from 'lucide-react';
import { COURSES } from '../data/mockData';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  courseId: COURSES[0].id,
  mode: 'offline',
  note: '',
};

export function ContactSection({ preselectedCourseId, onShowToast }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedCourseId) {
      setForm((prev) => ({ ...prev, courseId: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Vui lòng nhập họ và tên đầy đủ.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Email chưa đúng định dạng (ví dụ: ten@dut.udn.vn).';
    }
    const phoneDigits = form.phone.replace(/\s+/g, '');
    if (!/^(0|\+84)\d{9,10}$/.test(phoneDigits)) {
      nextErrors.phone = 'Số điện thoại Việt Nam gồm 10–11 chữ số (bắt đầu bằng 0 hoặc +84).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting || !validate()) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setForm(INITIAL_FORM);
      setErrors({});
      onShowToast(
        'Đã ghi nhận lịch kiểm tra đầu vào! Ban điều phối GDGLexi sẽ liên hệ xác nhận trong 24 giờ.'
      );
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink-primary)] sm:text-4xl">
            Đặt lịch kiểm tra đầu vào 30 phút
          </h2>
          <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-[var(--ink-secondary)]">
            Kiểm tra phát âm, ngữ pháp nền và tư vấn lộ trình học phù hợp hoàn toàn miễn phí trước
            khi đăng ký lớp.
          </p>

          <dl className="mt-8 divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
            <div className="py-4">
              <dt className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                Địa điểm học trực tiếp
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--ink-primary)]">
                54 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng (Trường ĐH Bách Khoa - ĐH Đà Nẵng)
              </dd>
            </div>
            <div className="py-4">
              <dt className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                <PhoneCall className="h-3.5 w-3.5 text-[var(--accent)]" />
                Kênh hỗ trợ học viên
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--ink-primary)]">
                Thứ 2 – Thứ 7 (08:30 – 21:00) • Trợ giá sinh viên ĐH Đà Nẵng
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Họ và tên <span className="text-[var(--danger)]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange('fullName')}
                placeholder="Nguyễn Văn An"
                aria-invalid={Boolean(errors.fullName)}
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs font-medium text-[var(--danger)]">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Email <span className="text-[var(--danger)]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder="an.nguyen@dut.udn.vn"
                aria-invalid={Boolean(errors.email)}
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
              />
              {errors.email && (
                <p className="mt-1 text-xs font-medium text-[var(--danger)]">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Số điện thoại <span className="text-[var(--danger)]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                placeholder="0905 123 456"
                aria-invalid={Boolean(errors.phone)}
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
              />
              {errors.phone && (
                <p className="mt-1 text-xs font-medium text-[var(--danger)]">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="courseId"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Khóa học quan tâm
              </label>
              <select
                id="courseId"
                value={form.courseId}
                onChange={handleChange('courseId')}
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)]"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="mode"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Hình thức kiểm tra
              </label>
              <select
                id="mode"
                value={form.mode}
                onChange={handleChange('mode')}
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)]"
              >
                <option value="offline">Trực tiếp tại Liên Chiểu (ĐH Bách Khoa)</option>
                <option value="online">Live Online qua Google Meet</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="note"
                className="block text-sm font-medium text-[var(--ink-primary)]"
              >
                Mục tiêu điểm &amp; khung giờ rảnh (không bắt buộc)
              </label>
              <textarea
                id="note"
                rows={3}
                value={form.note}
                onChange={handleChange('note')}
                placeholder="Ví dụ: Cần VSTEP B2 vào tháng 12 để xét tốt nghiệp, rảnh tối 2-4-6."
                className="mt-1.5 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-ground)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-65 dark:text-[#0C1018]"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Đang gửi thông tin...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Gửi đăng ký kiểm tra đầu vào
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
