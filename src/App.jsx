import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { COURSES } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutGdg } from './components/AboutGdg';
import { CoursesSection } from './components/CoursesSection';
import { MethodologyAndProof } from './components/MethodologyAndProof';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  CourseModal,
  MobileNavDrawer,
  Toast,
  WishlistDrawer,
} from './components/Overlays';

const THEME_KEY = 'gdglexi_theme';
const WISHLIST_KEY = 'gdglexi_wishlist';

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function readInitialWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [theme, setTheme] = useState(readInitialTheme);
  const [wishlistIds, setWishlistIds] = useState(readInitialWishlist);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState(COURSES[0].id);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistIds));
    } catch {
    }
  }, [wishlistIds]);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage('');
    }, 4200);
  }, []);

  const handleToggleWishlist = useCallback(
    (courseId) => {
      const target = COURSES.find((c) => c.id === courseId);
      setWishlistIds((prev) => {
        const exists = prev.includes(courseId);
        const next = exists ? prev.filter((id) => id !== courseId) : [...prev, courseId];
        if (target) {
          showToast(
            exists
              ? `Đã xóa "${target.title}" khỏi danh sách quan tâm.`
              : `Đã lưu "${target.title}" vào danh sách quan tâm.`
          );
        }
        return next;
      });
    },
    [showToast]
  );

  const handleClearWishlist = useCallback(() => {
    setWishlistIds([]);
    showToast('Đã xóa toàn bộ khóa học khỏi danh sách quan tâm.');
  }, [showToast]);

  const handleEnrollFromModal = useCallback((courseId) => {
    setPreselectedCourseId(courseId);
    setSelectedCourse(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const savedCourses = useMemo(
    () => COURSES.filter((course) => wishlistIds.includes(course.id)),
    [wishlistIds]
  );

  return (
    <div className="min-h-screen bg-[var(--bg-ground)] text-[var(--ink-primary)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Bỏ qua điều hướng, đi tới nội dung chính
      </a>

      <Header
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <main id="main-content">
        <Hero />
        <AboutGdg />
        <CoursesSection
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectCourse={setSelectedCourse}
        />
        <MethodologyAndProof />
        <FaqSection />
        <ContactSection
          preselectedCourseId={preselectedCourseId}
          onShowToast={showToast}
        />
      </main>

      <Footer />

      <CourseModal
        course={selectedCourse}
        isSaved={selectedCourse ? wishlistIds.includes(selectedCourse.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onEnroll={handleEnrollFromModal}
        onClose={() => setSelectedCourse(null)}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        savedCourses={savedCourses}
        onRemove={handleToggleWishlist}
        onClear={handleClearWishlist}
        onSelectCourse={setSelectedCourse}
        onClose={() => setWishlistOpen(false)}
      />

      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Toast message={toastMessage} onDismiss={() => setToastMessage('')} />
    </div>
  );
}
