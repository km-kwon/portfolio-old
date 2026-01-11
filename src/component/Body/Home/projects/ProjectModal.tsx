import React from "react";
import type { Project } from "./types";

interface ProjectModalProps {
  project: Project;
  isVisible: boolean;
  fromOffset: { x: number; y: number } | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isVisible,
  fromOffset,
  onClose,
}) => {
  return (
    <div
      className={
        "fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-200 " +
        (isVisible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close project detail"
      />

      {/* Modal Card */}
      <div
        className={
          "relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl " +
          "border border-(--border-subtle) bg-(--bg-elevated) " +
          "shadow-[0_20px_60px_rgba(0,0,0,0.7)] " +
          "transition-[transform,opacity] duration-200 " +
          // 커스텀 스크롤바 스타일
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
        style={
          fromOffset
            ? {
                transform: isVisible
                  ? "translate3d(0,0,0) scale(1)"
                  : `translate3d(${fromOffset.x}px, ${fromOffset.y}px, 0) scale(0.9)`,
                transformOrigin: "center center",
              }
            : undefined
        }
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              {project.subtitle && (
                <p className="text-sm text-fg-muted">{project.subtitle}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-(--bg-soft) transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-xs text-fg-muted mb-8 p-4 bg-(--bg-soft) rounded-xl">
            {project.period && <div>📅 {project.period}</div>}
            {project.team && (
              <>
                <div className="w-px h-3 bg-(--border-subtle) self-center" />
                <div>👥 {project.team}</div>
              </>
            )}
            {/* {project.links.length > 0 && (
              <>
                <div className="w-px h-3 bg-(--border-subtle) self-center" />
                <div className="flex gap-2">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-fg"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            )} */}
          </div>

          {/* Body Content */}
          <div className="space-y-10 text-sm leading-relaxed text-fg-muted">
            {/* 1. Overview */}
            <section>
              <h4 className="text-fg font-semibold text-base mb-3">
                🔎 프로젝트 개요
              </h4>
              <p>{project.overview}</p>
            </section>

            {/* 2. Images */}
            {project.images && project.images.length > 0 && (
              <section>
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
              </section>
            )}

            {/* 3. Why & Tech Decisions */}
            {project.why && (
              <section>
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
              </section>
            )}

            {/* 4. Role & Tasks */}
            {project.role && (
              <section>
                <h4 className="text-fg font-semibold text-base mb-3">
                  👩🏻‍💻 수행 역할 ( 기여도 {project.role.percentage} )
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.role.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 5. Troubleshooting */}
            {project.troubleshooting && (
              <section>
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
              </section>
            )}

            {/* 6. Results */}
            {project.results && (
              <section>
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
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
