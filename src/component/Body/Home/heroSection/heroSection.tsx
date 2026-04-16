import React from "react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const labelClass =
  "text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-2";

const InfoCard = ({ title, value }: { title: string; value: string }) => (
  <div
    className="rounded-xl p-3 bg-(--bg-soft) border border-(--border-subtle)
      transition-all duration-300 hover:border-(--border-hover)"
  >
    <div className="text-[11px] text-fg-dimmed mb-1">{title}</div>
    <div className="text-[13px] font-medium text-fg">{value}</div>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section
      id="top"
      className="grid gap-10 mb-20 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start"
    >
      {/* HERO LEFT */}
      <div className="pt-2">
        <p className={labelClass}>Identity Profile</p>
        <h1 className="text-[clamp(28px,4vw,36px)] font-bold leading-tight mb-4 tracking-tight">
          안전한 혁신을 설계하는
          <br />
          프론트엔드 엔지니어,{" "}
          <span className="text-(--accent)">권경민</span>입니다.
        </h1>
        <p className="text-[15px] text-fg-muted leading-[1.75] max-w-[520px] mb-8">
          <strong className="text-fg font-semibold">3년간</strong> 실시간 데이터 시각화
          (<strong className="text-fg font-semibold">80K logs/sec</strong>)와
          대규모 레거시 리팩터링을 경험했습니다.
          <br />
          사이버보안 전공의{" "}
          <strong className="text-fg font-semibold">비판적 사고</strong>로,
          견고하면서도 사용자 중심의 인터페이스를 만듭니다.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Safety First",
            "Risk Management",
            "Team Ownership",
            "Frontend Core",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1.5 rounded-full
                border border-(--border-subtle) text-fg-muted bg-(--bg-soft)
                transition-colors duration-300
                hover:border-(--border-hover) hover:text-fg"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <button
            className="text-[13px] px-5 py-2.5 rounded-lg
                       bg-(--accent) text-white font-semibold
                       hover:bg-(--accent-hover)
                       transition-all duration-300 ease-out
                       cursor-pointer"
            onClick={() => onScrollTo("skills")}
          >
            경력 바로가기
          </button>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-[13px] px-4 py-2.5 rounded-lg
                       border border-(--border-subtle) bg-(--bg-elevated)
                       text-fg-muted font-medium
                       hover:border-(--accent)/40 hover:text-fg
                       transition-all duration-300 ease-out"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v12m0 0l-4-4m4 4l4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" />
            </svg>
            이력서 (PDF)
          </a>
          <button
            className="inline-flex items-center gap-1.5 text-[13px] text-fg-muted
                       hover:text-(--accent) transition-colors duration-300 ease-out cursor-pointer"
            onClick={() => onScrollTo("about")}
          >
            <span>소개 더 보기</span>
            <span className="text-[14px] translate-y-px">↳</span>
          </button>
        </div>
      </div>

      {/* HERO RIGHT */}
      <aside
        className="rounded-2xl border border-(--border-subtle)
                   bg-(--bg-elevated)
                   flex flex-col gap-4 text-[13px] p-5
                   transition-all duration-300
                   hover:border-(--border-hover)
                   [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[17px] font-bold tracking-tight font-display">Kwon Kyung-Min</div>
            <div className="text-[12px] text-fg-muted mt-0.5">
              Frontend Engineer · Security Researcher
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-(--accent-border) text-[11px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse" />
            <span className="text-(--accent) font-medium">Building</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <InfoCard title="Focus" value="실시간 데이터 시각화, UI 아키텍처" />
          <InfoCard title="Strength" value="비판적 사고, 리스크 관리" />
          <InfoCard title="Based in" value="Seongnam, KR (KST)" />
        </div>

        <p className="text-[12px] text-fg-dimmed mt-1 leading-relaxed">
          최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링
          최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다.
        </p>
      </aside>
    </section>
  );
};

export default HeroSection;
