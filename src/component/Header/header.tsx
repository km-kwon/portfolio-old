// src/Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onNavClick,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: string; label: string }[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "lab", label: "Lab" },
    // { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      // 블로그 페이지나 다른 페이지에서 클릭했을 때
      navigate("/");
      // 홈페이지로 이동한 후 스크롤
      setTimeout(() => {
        onNavClick(id);
      }, 100);
    } else {
      // 이미 홈페이지에 있을 때
      onNavClick(id);
    }
  };

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 h-(--header-height) z-20 border-b backdrop-blur-xl [html[data-theme='dark']_&]:border-white/5 [html[data-theme='light']_&]:border-black/5">
        <div className="max-w-[1040px] mx-auto h-full px-5 flex items-center justify-between gap-3">
          {/* LEFT */}
          <Link
            to="/"
            className="tracking-[0.08em] uppercase text-[14px] text-fg-muted hover:text-fg transition-colors cursor-pointer"
          >
            Frontend · UX
          </Link>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-4 text-[13px]">
            <Link
              to="/"
              className={`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${isHomePage ? "text-fg" : "text-fg-muted"}`}
            >
              Home
            </Link>

            {navItems.map(({ id, label }) => (
              <button
                key={id}
                className="px-2.5 py-1.5 rounded-full text-[13px] text-fg-muted border border-transparent cursor-pointer
                           transition-all duration-150 ease-out
                           hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px"
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            ))}
            <Link
              to="/blog"
              className={`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${
                           location.pathname === "/blog"
                             ? "text-fg"
                             : "text-fg-muted"
                         }`}
            >
              Blog
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* 햄버거 메뉴 버튼 (모바일) */}
            <button
              className="md:hidden w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)
                         flex items-center justify-center cursor-pointer
                         transition-all duration-150 ease-out
                         hover:bg-(--bg-soft) hover:border-(--accent)/50"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* 테마 토글 */}
            <button
              className="w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)
                         flex items-center justify-center cursor-pointer
                         transition-all duration-150 ease-out
                         hover:-translate-y-px hover:bg-(--bg-soft) hover:border-(--accent)/50"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="hidden sm:inline-flex text-[13px] px-4 py-2 rounded-full border border-(--border-subtle)
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50 hover:-translate-y-px
                         transition-all duration-150 ease-out"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-9998"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 모바일 슬라이드 메뉴 */}
      <div
        className={[
          "md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999",
          "bg-[#0a0a0a] [html[data-theme='light']_&]:bg-white",
          "border-l border-(--border-subtle)",
          "shadow-[-8px_0_24px_rgba(0,0,0,0.5)]",
          "transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <nav className="flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-2">
          <Link
            to="/"
            className={[
              "px-4 py-3 rounded-lg text-[14px] border border-transparent",
              "transition-all duration-150 ease-out",
              "hover:bg-(--bg-soft) hover:border-(--border-subtle)",
              isHomePage ? "text-fg bg-(--bg-soft)" : "text-fg-muted",
            ].join(" ")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className="px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left
                         transition-all duration-150 ease-out
                         hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:text-fg"
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}

          <Link
            to="/blog"
            className={[
              "px-4 py-3 rounded-lg text-[14px] border border-transparent",
              "transition-all duration-150 ease-out",
              "hover:bg-(--bg-soft) hover:border-(--border-subtle)",
              location.pathname === "/blog"
                ? "text-fg bg-(--bg-soft)"
                : "text-fg-muted",
            ].join(" ")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <div className="mt-4 pt-4 border-t border-(--border-subtle)">
            <button
              className="w-full text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50
                         transition-all duration-150 ease-out text-fg"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

/** 아이콘들도 헤더 안으로 포함 */
const SunIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const HamburgerIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Header;
