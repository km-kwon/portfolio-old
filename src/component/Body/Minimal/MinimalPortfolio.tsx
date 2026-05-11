import React from "react";
import { careerData } from "../Home/skills/career/careerData";
import { openSourceData } from "../Home/skills/opensource/openSourceData";
import { gdscActivity } from "../Home/activity/data/GDSC";
import { icsLabActivity } from "../Home/activity/data/ICSLab";
import { samteoActivity } from "../Home/activity/data/Samtor";
import { likelionActivity } from "../Home/activity/data/lion";
import { whoisMentorActivity } from "../Home/activity/data/Whois";
import { studentCouncilActivity } from "../Home/activity/data/majorClub";
import { mogangProject } from "../Home/projects/data/Mogang/mogangData";
import { ssangsangProjects } from "../Home/projects/data/Ssang-sang/ssang-sangData";
import sureLogo from "../Home/skills/career/assets/SURE_LOGO.png";
import type { Activity } from "../Home/activity/types";
import type { Project } from "../Home/projects/types";

const activities: Activity[] = [
  gdscActivity,
  likelionActivity,
  icsLabActivity,
  samteoActivity,
  whoisMentorActivity,
  studentCouncilActivity,
];

const featuredProjects: Project[] = [mogangProject, ssangsangProjects];

const sectionLabel = (n: string, label: string) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="text-[11px] font-mono text-fg-dimmed">{n}</span>
    <span className="h-px w-8 bg-(--border-subtle)" />
    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-fg-muted">
      {label}
    </span>
  </div>
);

const Row: React.FC<{
  left: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ left, children, className = "" }) => (
  <div
    className={
      "grid grid-cols-[120px_1fr] gap-6 md:gap-10 py-6 border-b border-(--border-subtle) last:border-b-0 " +
      className
    }
  >
    <div className="text-[11px] font-mono text-fg-dimmed leading-relaxed uppercase tracking-wide pt-0.5">
      {left}
    </div>
    <div className="min-w-0">{children}</div>
  </div>
);

const MinimalPortfolio: React.FC = () => {
  return (
    <main className="min-h-screen bg-(--bg) text-fg">
      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* ───── Intro ───── */}
        <section className="mb-28">
          <div className="text-[11px] font-mono text-fg-dimmed mb-6 uppercase tracking-[0.2em]">
            Kwon Kyung-Min — Frontend / Simulation
          </div>
          <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.25] tracking-tight mb-8">
            안전한 혁신을 설계하는
            <br />
            프론트엔드 엔지니어.
          </h1>
          <p className="text-[15px] text-fg-muted leading-[1.8] max-w-[600px] mb-10">
            초당 8만 건 로그 실시간 시각화, 100만 행 데이터 2초 탐색.
            <br />
            사이버보안 전공의 시각으로 견고한 인터페이스를 만들고,
            <br />
            현재는 자율주행 시뮬레이션 도메인으로 영역을 확장하고 있습니다.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-mono">
            <a
              href="mailto:lanos0609@gmail.com"
              className="text-fg-muted hover:text-fg transition-colors border-b border-transparent hover:border-fg-muted"
            >
              lanos0609@gmail.com
            </a>
            <a
              href="https://github.com/km-kwon"
              target="_blank"
              rel="noreferrer"
              className="text-fg-muted hover:text-fg transition-colors border-b border-transparent hover:border-fg-muted"
            >
              github.com/km-kwon
            </a>
            <span className="text-fg-dimmed">Seongnam, KR (KST)</span>
          </div>
        </section>

        {/* ───── Stats ───── */}
        <section className="mb-28">
          {sectionLabel("01", "Highlights")}
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {[
              { v: "80K", u: "logs/sec", d: "실시간 처리" },
              { v: "2s", u: "", d: "100만 행 탐색" },
              { v: "30%", u: "", d: "레거시 코드 절감" },
            ].map((s) => (
              <div key={s.d}>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[40px] font-bold leading-none tracking-tight">
                    {s.v}
                  </span>
                  {s.u && (
                    <span className="text-[12px] font-mono text-fg-muted">
                      {s.u}
                    </span>
                  )}
                </div>
                <div className="mt-3 text-[12px] text-fg-dimmed">{s.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Career ───── */}
        <section className="mb-28">
          {sectionLabel("02", "Career")}
          <div>
            {careerData.map((career) => (
              <div key={career.id} className="mb-16 last:mb-0">
                <Row
                  left={career.period}
                  className="!border-b-0 !py-0 mb-4"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    {career.companyLogo && (
                      <img
                        src={career.companyLogo}
                        alt=""
                        className="w-4 h-4 object-contain opacity-60"
                      />
                    )}
                    <span className="text-[12px] font-mono text-fg-muted">
                      @ {career.company}
                    </span>
                  </div>
                  <h2 className="text-[20px] font-bold leading-tight">
                    {career.position}
                  </h2>
                  <div className="text-[12px] text-fg-dimmed mt-1">
                    {career.department}
                  </div>
                  {career.transition && (
                    <p className="text-[12.5px] text-fg-muted mt-3 leading-relaxed max-w-[540px]">
                      ↳ {career.transition}
                    </p>
                  )}
                </Row>

                {/* Projects within career */}
                <div className="grid grid-cols-[120px_1fr] gap-6 md:gap-10">
                  <div />
                  <div className="border-l border-(--border-subtle) pl-6 space-y-8">
                    {career.projects.map((proj, i) => (
                      <article key={i}>
                        <div className="text-[11px] font-mono text-fg-dimmed mb-1.5 uppercase tracking-wide">
                          {proj.period} · {proj.role}
                        </div>
                        <h3 className="text-[15.5px] font-semibold leading-snug mb-2">
                          {proj.name}
                        </h3>
                        <p className="text-[13px] text-fg-muted leading-[1.75] mb-4">
                          {proj.impact}
                        </p>
                        {proj.achievements && (
                          <ul className="space-y-1.5 text-[13px] text-fg-muted leading-relaxed">
                            {proj.achievements.map((a, j) => (
                              <li key={j} className="flex gap-2.5">
                                <span className="text-fg-dimmed shrink-0">·</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {proj.techStack && (
                          <div className="mt-4 text-[11.5px] font-mono text-fg-dimmed leading-relaxed">
                            {[
                              ...proj.techStack.languages,
                              ...proj.techStack.libs,
                            ].join(" · ")}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Selected Projects ───── */}
        <section className="mb-28">
          {sectionLabel("03", "Selected Projects")}
          <div>
            {featuredProjects.map((p) => (
              <Row key={p.id} left={p.period}>
                <h3 className="text-[17px] font-semibold leading-tight mb-1">
                  {p.title}
                </h3>
                <div className="text-[12px] text-fg-dimmed font-mono mb-3">
                  {p.team}
                </div>
                <p className="text-[13px] text-fg-muted leading-[1.8] mb-4 max-w-[600px]">
                  {p.summary}
                </p>
                {p.highlights && (
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4">
                    {p.highlights.map((h) => (
                      <div key={h.label}>
                        <span className="text-[18px] font-bold leading-none">
                          {h.value}
                        </span>
                        <span className="ml-2 text-[11.5px] text-fg-dimmed">
                          {h.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="text-[11.5px] font-mono text-fg-dimmed leading-relaxed">
                  {p.tags.join(" · ")}
                </div>
              </Row>
            ))}
          </div>
        </section>

        {/* ───── Open Source ───── */}
        <section className="mb-28">
          {sectionLabel("04", "Open Source")}
          <div>
            {openSourceData.map((pkg) => (
              <Row key={pkg.id} left={`v${pkg.version}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[15px] font-mono font-semibold leading-tight break-all">
                    {pkg.name}
                  </h3>
                  <div className="flex gap-4 text-[12px] font-mono shrink-0">
                    {pkg.githubUrl && (
                      <a
                        href={pkg.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-fg-muted hover:text-fg transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {pkg.npmUrl && (
                      <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-fg-muted hover:text-fg transition-colors"
                      >
                        NPM ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[13px] text-fg-muted leading-[1.8] mb-3 max-w-[600px]">
                  {pkg.description.replace(/[“”]/g, "")}
                </p>
                <div className="text-[11.5px] font-mono text-fg-dimmed">
                  {pkg.techStack.join(" · ")}
                </div>
              </Row>
            ))}
          </div>
        </section>

        {/* ───── Activities ───── */}
        <section className="mb-28">
          {sectionLabel("05", "Activities")}
          <div>
            {activities.map((a) => (
              <Row key={a.id} left={a.period.join(" — ")}>
                <h3 className="text-[14.5px] font-semibold leading-tight mb-1">
                  {a.title}
                </h3>
                <div className="text-[12px] text-fg-muted mb-2">
                  {a.subTitle}
                </div>
                <p className="text-[12.5px] text-fg-muted leading-[1.8] max-w-[600px]">
                  {a.result}
                </p>
              </Row>
            ))}
          </div>
        </section>

        {/* ───── Footer ───── */}
        <footer className="pt-16 border-t border-(--border-subtle)">
          <div className="flex flex-wrap justify-between gap-6 text-[12px] font-mono text-fg-dimmed">
            <div className="flex items-center gap-2.5">
              <img
                src={sureLogo}
                alt=""
                className="w-3.5 h-3.5 object-contain opacity-40"
              />
              <span>© 2026 Kwon Kyung-Min</span>
            </div>
            <div className="flex gap-6">
              <a
                href="mailto:lanos0609@gmail.com"
                className="hover:text-fg transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/km-kwon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-fg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MinimalPortfolio;
