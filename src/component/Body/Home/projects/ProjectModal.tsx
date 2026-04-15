import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import type { Project } from "./types";

/* ── Animation Variants ── */
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 28,
      stiffness: 380,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] as const },
  },
};

const contentContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const contentItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

/* ── Close Icon SVG ── */
const CloseIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <line x1="4" y1="4" x2="12" y2="12" />
    <line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);

/* ── Component ── */
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /* Focus trap — 모달 열릴 때 포커스를 모달로 이동 */
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  /* Escape 키 닫기 */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  /* Body 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
      {/* ── Glassmorphism Backdrop ── */}
      <motion.div
        className={
          "absolute inset-0 " +
          "bg-(--modal-backdrop) " +
          "backdrop-blur-xl " +
          "[-webkit-backdrop-filter:blur(24px)_saturate(1.4)]"
        }
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        aria-label="Close project detail"
      />

      {/* ── Modal Card ── */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={
          "relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto " +
          "rounded-2xl outline-none " +
          /* Surface */
          "bg-(--bg-elevated) " +
          /* Layered border + shadow for depth */
          "border border-(--border-subtle) " +
          "shadow-(--modal-shadow) " +
          /* Custom scrollbar */
          "[&::-webkit-scrollbar]:w-3 " +
          "[&::-webkit-scrollbar-track]:bg-transparent " +
          "[&::-webkit-scrollbar-track]:rounded-r-2xl " +
          "[&::-webkit-scrollbar-track]:my-2 " +
          "[&::-webkit-scrollbar-thumb]:bg-gray-500 " +
          "[&::-webkit-scrollbar-thumb]:rounded-full " +
          "[&::-webkit-scrollbar-thumb]:border-[3px] " +
          "[&::-webkit-scrollbar-thumb]:border-(--bg-elevated) " +
          "[&::-webkit-scrollbar-thumb:hover]:bg-gray-300"
        }
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* ── Inner Content ── */}
        <motion.div
          className="p-6 md:p-8"
          variants={contentContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div
            className="flex justify-between items-start mb-6"
            variants={contentItem}
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              {project.subtitle && (
                <p className="text-sm text-fg-muted">{project.subtitle}</p>
              )}
            </div>

            {/* Close Button — micro-interaction */}
            <button
              onClick={onClose}
              aria-label="모달 닫기"
              className={
                "relative p-2 rounded-full cursor-pointer " +
                "text-fg-muted " +
                "transition-all duration-250 ease-out " +
                "hover:text-fg " +
                "hover:bg-(--bg-soft) " +
                "hover:scale-110 " +
                "active:scale-95 " +
                /* Animated ring on hover */
                "before:absolute before:inset-0 before:rounded-full " +
                "before:border before:border-transparent " +
                "before:transition-all before:duration-300 " +
                "hover:before:border-(--border-hover) " +
                "hover:before:scale-110 before:scale-75 before:opacity-0 hover:before:opacity-100"
              }
            >
              <CloseIcon />
            </button>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            className="flex flex-wrap gap-4 text-xs text-fg-muted mb-8 p-4 bg-(--bg-soft) rounded-xl"
            variants={contentItem}
          >
            {project.period && <div>📅 {project.period}</div>}
            {project.team && (
              <>
                <div className="w-px h-3 bg-(--border-subtle) self-center" />
                <div>👥 {project.team}</div>
              </>
            )}
          </motion.div>

          {/* Body Content — staggered sections */}
          <div className="space-y-10 text-sm leading-relaxed text-fg-muted">
            {/* 1. Overview */}
            <motion.section variants={contentItem}>
              <h4 className="text-fg font-semibold text-base mb-3">
                🔎 프로젝트 개요
              </h4>
              <p>{project.overview}</p>
            </motion.section>

            {/* 2. Images */}
            {project.images && project.images.length > 0 && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  📸 Screen & Architecture
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {img.caption && (
                        <p className="text-xs text-center text-fg-muted">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 3. Why & Tech Decisions */}
            {project.why && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  💡 기술적 의사결정 (Why?)
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.why.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-(--border-subtle) bg-(--bg)"
                    >
                      <div className="font-medium text-fg mb-2">
                        {item.title}
                      </div>
                      <p className="text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 4. Role & Tasks */}
            {project.role && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  👩🏻‍💻 수행 역할 ( 기여도 {project.role.percentage} )
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.role.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* 5. Troubleshooting */}
            {project.troubleshooting && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  🚨 트러블 슈팅
                </h4>
                <div className="space-y-4">
                  {project.troubleshooting.map((ts, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[rgba(255,100,100,0.05)] border border-[rgba(255,100,100,0.1)]"
                    >
                      <div className="font-semibold text-fg mb-2">
                        {ts.title}
                      </div>
                      <div className="grid gap-2 text-xs">
                        <div>
                          <span className="font-medium text-(--fg)">문제:</span>{" "}
                          {ts.problem}
                        </div>
                        <div>
                          <span className="font-medium text-(--fg)">원인:</span>{" "}
                          {ts.cause}
                        </div>
                        <div>
                          <span className="font-medium text-(--fg)">해결:</span>{" "}
                          {ts.solution}
                        </div>
                        <div>
                          <span className="font-medium text-(--fg)">배움:</span>{" "}
                          {ts.learning}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 6. Results */}
            {project.results && (
              <motion.section variants={contentItem}>
                <h4 className="text-fg font-semibold text-base mb-3">
                  ✨ 성과
                </h4>
                <ul className="space-y-2">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <span className="text-yellow-500">🏆</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
