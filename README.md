# GDGLexi (React + TailwindCSS)

Landing page giới thiệu chương trình luyện thi **IELTS & VSTEP** lớp nhỏ trực thuộc **Google Developer Groups on Campus - DUT** (Trường ĐH Bách Khoa - ĐH Đà Nẵng), được xây dựng lại bằng **React 19 + Vite + Tailwind CSS v4** theo hướng thiết kế **Exam Gate & Intake Board** (Impeccable, no-ai-slop).

## Tính năng chính

1. **Navbar cuộn & Mobile Drawer (`src/components/Header.jsx`, `Overlays.jsx`):** Tự động thu gọn với hiệu ứng mờ nền khi cuộn > 50px, hỗ trợ menu trượt trên di động.
2. **Bảng lịch khai giảng tháng 11 (`src/components/Hero.jsx`):** Hiển thị mã lớp, lịch học và sĩ số dạng `tabular-nums`, cảnh báo riêng lớp sắp đầy (`07 / 08 Sắp đầy`).
3. **Lọc & Tìm kiếm khóa học (`src/components/CoursesSection.jsx`):** Lọc theo tab (*Tất cả*, *IELTS*, *VSTEP*, *Cấp tốc*, *Nền tảng*), tìm kiếm debounce 200ms và `aria-live="polite"`.
4. **Modal Lộ trình & Wishlist Drawer (`src/components/Overlays.jsx`):** Khóa cuộn nền, đóng bằng `Esc` hoặc click backdrop, khôi phục focus khi đóng.
5. **Accordion FAQ (`src/components/FaqSection.jsx`):** Cơ chế mở đơn (single-open).
6. **Form đặt lịch kiểm tra đầu vào (`src/components/ContactSection.jsx`):** Validate họ tên, email, SĐT Việt Nam; gửi bất đồng bộ 1,5s có spinner + khóa nút; hiện Toast và reset form.
7. **Đồng bộ `localStorage` (`src/App.jsx`):** Lưu Light/Dark Mode (`gdglexi_theme`) và danh sách khóa học đã lưu (`gdglexi_wishlist`).

## Chạy dự án

```bash
cd gdglexi-react
npm install
npm run dev
```

Build production:

```bash
npm run build
```
