import React, { useState } from "react";
import type { CareerItem, ProjectInCareer } from "../types";
import { careerData } from "./careerData";
import TechStackDisplay from "./TechStackDisplay";

interface CareerCardProps {
  career: CareerItem;
}

interface ProjectCardProps {
  project: ProjectInCareer;
  index: number;
}

/* ───────────────────────────────────────────
   Smooth accordion (CSS Grid 0fr ↔ 1fr)
   ─────────────────────────────────────────── */
const AccordionBody: React.FC<{
  open: boolean;
  children: React.ReactNode;
  durationMs?: number;
}> = ({ open, children, durationMs = 360 }) => (
  <div
    className={[
      "grid overflow-hidden transition-[grid-template-rows]",
      "ease-[cubic-bezier(.2,.8,.2,1)]",
      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
    ].join(" ")}
    style={{ transitionDuration: `${durationMs}ms` }}
  >
    <div className="min-h-0 overflow-hidden">
      <div
        className={[
          "transition-[opacity,transform] ease-[cubic-bezier(.2,.8,.2,1)]",
          "will-change-[opacity,transform]",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        ].join(" ")}
        style={{ transitionDuration: `${Math.max(220, durationMs - 80)}ms` }}
      >
        {children}
      </div>
    </div>
  </div>
);

/* ───────────────────────────────────────────
   성과 텍스트 내 수치 자동 하이라이트
   ─────────────────────────────────────────── */
const HighlightMetrics: React.FC<{ text: string }> = ({ text }) => {
  // 숫자+단위 패턴 (예: 2.3배, 450ms, 30%, 80,000건, 0.8초, 5분→30초)
  const pattern =
    /(\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)(\s*→\s*\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)?/g;

  const parts: { text: string; isMetric: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), isMetric: false });
    }
    parts.push({ text: match[0], isMetric: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isMetric: false });
  }

  if (parts.length === 0) return <>{text}</>;

  return (
    <>
      {parts.map((p, i) =>
        p.isMetric ? (
          <span
            key={i}
            className="font-semibold text-[var(--accent)]"
          >
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
};

/* ───────────────────────────────────────────
   Chevron Icon
   ─────────────────────────────────────────── */
const ChevronIcon: React.FC<{ expanded: boolean; className?: string }> = ({
  expanded,
  className = "w-4 h-4",
}) => (
  <svg
    className={[
      className,
      "shrink-0 text-fg-muted transition-transform duration-200",
      expanded ? "rotate-180" : "",
    ].join(" ")}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/* ───────────────────────────────────────────
   ProjectCard
   ─────────────────────────────────────────── */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={[
        "rounded-2xl border bg-[var(--bg-soft)] px-4 py-3",
        "transition-colors duration-200",
        isExpanded ? "border-gray-400" : "border-[var(--border-subtle)]",
        "hover:border-[var(--accent)]/50",
      ].join(" ")}
    >
      {/* ── 헤더: 항상 보이는 영역 ── */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((v) => !v)}
        className="w-full text-left cursor-pointer"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-[15px] font-semibold leading-snug">
              {project.name}
            </h4>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="text-[12px] text-fg-muted">{project.role}</span>
              <span className="text-[11px] text-fg-muted opacity-50">|</span>
              <span className="text-[11px] text-fg-muted">
                {project.period}
              </span>
            </div>
          </div>
          <ChevronIcon expanded={isExpanded} />
        </div>

        {/* ── Impact 한 줄 요약 (접힌 상태에서도 보임) ── */}
        {(project as any).impact && (
          <div
            className={[
              "mt-2 flex items-start gap-2 rounded-lg px-3 py-2",
              "bg-[var(--accent)]/[0.06] border border-[var(--accent)]/15",
            ].join(" ")}
          >
            <svg
              className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-[12px] leading-relaxed font-medium text-[var(--fg-default)]">
              {(project as any).impact}
            </span>
          </div>
        )}
      </button>

      {/* ── 펼쳐지는 상세 내용 ── */}
      <AccordionBody open={isExpanded} durationMs={360}>
        <div className="mt-3">
          {/* Description */}
          {project.description && (
            <p className="text-[12.5px] leading-relaxed text-fg-muted">
              {project.description}
            </p>
          )}

          {/* Tasks */}
          <div className="my-3 h-px bg-[var(--border-subtle)]/70" />
          <div className="text-[12px] font-semibold mb-2 text-fg-muted">
            주요 업무
          </div>
          <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted">
            {project.tasks.map((task, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40" />
                <span className="min-w-0">{task}</span>
              </li>
            ))}
          </ul>

          {/* Achievements - 강조 스타일 */}
          {project.achievements?.length ? (
            <>
              <div className="my-3 h-px bg-[var(--border-subtle)]/70" />
              <div className="rounded-xl bg-[var(--accent)]/[0.06] border border-[var(--accent)]/20 p-3">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <svg
                    className="w-3.5 h-3.5 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-[12px] font-semibold text-[var(--accent)]">
                    성과
                  </span>
                </div>
                <ul className="space-y-2 text-[12.5px] leading-relaxed">
                  {project.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span className="min-w-0 text-[var(--fg-default)]">
                        <HighlightMetrics text={a} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}

          {/* Tech Stack */}
          {project.techStack ? (
            <>
              <div className="my-3 h-px bg-[var(--border-subtle)]/70" />
              <TechStackDisplay techStack={project.techStack} />
            </>
          ) : null}
        </div>
      </AccordionBody>
    </article>
  );
};

/* ───────────────────────────────────────────
   CareerCard
   ─────────────────────────────────────────── */
const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="pb-8 last:pb-0">
      <header>
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((v) => !v)}
          className={[
            "w-full rounded-2xl border bg-[var(--bg-elevated)]",
            "px-4 py-3 transition-colors duration-200 cursor-pointer",
            isExpanded ? "border-gray-400" : "border-[var(--border-subtle)]",
            "hover:border-[var(--accent)]/50",
          ].join(" ")}
        >
          {/* 상단: 회사 정보 */}
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {career.companyLogo ? (
                <img
                  src={career.companyLogo}
                  alt={`${career.company} logo`}
                  className="w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1"
                  loading="lazy"
                />
              ) : (
                <div className="w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]" />
              )}

              <div className="min-w-0 text-left">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-[16px] font-bold leading-tight truncate">
                    {career.company}
                  </h3>
                  <span className="hidden sm:inline text-[12px] text-fg-muted">
                    {career.position}
                  </span>
                </div>
                {/* 부서 정보 */}
                {(career as any).department && (
                  <div className="text-[11px] text-fg-muted mt-0.5">
                    {(career as any).department}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-[12px] text-fg-muted uppercase tracking-wide">
                {career.period}
              </div>
              <ChevronIcon expanded={isExpanded} className="w-5 h-5" />
            </div>
          </div>

          {/* 부서 이동 맥락 배지 */}
          {(career as any).transition && (
            <div className="mt-2.5 flex items-center gap-2 text-left">
              <div
                className={[
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5",
                  "bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20",
                ].join(" ")}
              >
                <svg
                  className="w-3 h-3 text-[var(--accent)] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                <span className="text-[11px] font-medium text-[var(--accent)]">
                  {(career as any).transition}
                </span>
              </div>
            </div>
          )}
        </button>
      </header>

      <AccordionBody open={isExpanded} durationMs={420}>
        <div className="space-y-4 mt-5 ml-2.5">
          {career.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </AccordionBody>
    </section>
  );
};

/* ───────────────────────────────────────────
   CareerTab
   ─────────────────────────────────────────── */
const CareerTab: React.FC = () => (
  <div className="space-y-0">
    {careerData.map((career) => (
      <CareerCard key={career.id} career={career} />
    ))}
  </div>
);

export default CareerTab;
