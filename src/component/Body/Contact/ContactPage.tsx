import React, { useEffect } from "react";

const pageBg =
  "relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden";

const bgDecor =
  "pointer-events-none absolute inset-0 " +
  // subtle grid + glow (works in both themes)
  "bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] " +
  "[mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]";

const cardBase =
  "relative rounded-3xl border border-(--border-subtle) bg-(--bg-elevated)/70 p-6 " +
  "backdrop-blur-xl " +
  "shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-all duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(0,0,0,0.55)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:bg-white/70 " +
  "[html[data-theme='light']_&]:shadow-[0_10px_26px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]";

const cardHighlight =
  "pointer-events-none absolute inset-0 rounded-3xl " +
  "bg-[radial-gradient(900px_240px_at_10%_0%,rgba(255,255,255,0.14),transparent_55%)] " +
  "[html[data-theme='light']_&]:bg-[radial-gradient(900px_240px_at_10%_0%,rgba(17,24,39,0.06),transparent_55%)]";

const labelClass =
  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted";

const pill =
  "inline-flex items-center rounded-full border border-(--border-subtle) " +
  "bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted " +
  "[html[data-theme='light']_&]:bg-[#f5f5fb]";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={pageBg}>
      <div className={bgDecor} />
      <div className="max-w-[760px] mx-auto relative">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className={`${pill} gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className={labelClass}>Contact</span>
            </span>
          </div>

          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4">
            함께 이야기해요
          </h1>

          <p className="text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto">
            프로젝트 제안, 협업, 채용 어떤 주제든 좋습니다.
            <br className=" md:block" />
            가능한 빠르게 확인하고 답변 드릴게요.
          </p>

          {/* quick stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className={pill}>평균 응답 24시간 이내</span>
            <span className={pill}>Seongnam, KR</span>
            <span className={pill}>Remote 협업 가능</span>
          </div>
        </section>

        {/* Contact Cards */}
        <div className="grid gap-5">
          {/* 소개 카드 */}
          {/*  <div
            className={`${cardBase} text-[14px] text-fg-muted leading-[1.85]`}
          >
            <div className={cardHighlight} />
            <h2 className="text-[16px] font-medium text-fg mb-3 relative">
              어떤 도움이 필요하신가요?
            </h2>
            <p className="relative">
              새 제품을 기획 중이거나, 기존 서비스를 재설계하고 싶다면
              <strong className="text-fg"> “무엇을 해결하고 싶은지” </strong>
              부터 함께 정리할 수 있어요.
            </p>
            <p className="mt-3 relative">
              프론트엔드 개발, 사이드 프로젝트 협업 등 많은 영역에서 함께하고
              싶습니다.
            </p>
          </div> */}

          {/* 연락처 카드 */}
          <div className={cardBase}>
            <div className={cardHighlight} />
            <div className="flex items-center justify-between mb-4 relative">
              <h2 className="text-[16px] font-medium text-fg">연락 채널</h2>
              <span className={pill}>가장 빠른 답변: Email</span>
            </div>

            <div className="grid gap-3 relative">
              <ContactItem
                label="Email"
                value="lanos5019@ajou.ac.kr"
                href="mailto:you@example.com"
                icon={<MailIcon />}
              />
              <ContactItem
                label="Phone"
                value="010-3465-9425"
                href="tel:010-3465-9425"
                icon={<PhoneIcon />}
              />
              <ContactItem
                label="GitHub"
                value="@km-kwon"
                href="https://github.com/km-kwon"
                external
                icon={<GitHubIcon />}
              />
              <ContactItem
                label="NPM"
                value="@kwon-kyoungmin"
                href="https://www.npmjs.com/~kwon-kyoungmin"
                external
                icon={<NIcon />}
              />
              <ContactItem
                label="Apply"
                value="Resume (PDF)"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="resume.pdf"
                icon={<ResumeIcon />}
              />
            </div>
          </div>

          {/* 추가 정보 카드 */}
          <div className={cardBase}>
            <div className={cardHighlight} />
            <h2 className="text-[16px] font-medium text-fg mb-4 relative">
              응답 안내
            </h2>

            <div className="grid md:grid-cols-2 gap-4 relative">
              <InfoStat
                icon={<ClockIcon />}
                title="평균 응답 시간"
                value="24시간 이내"
                sub="최대한 빠르게 회신 드리겠습니다."
              />
              <InfoStat
                icon={<LocationIcon />}
                title="위치"
                value="대한민국, 성남"
                sub="원격 협업도 가능합니다."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface ContactItemProps {
  label: string;
  value: string;
  external?: boolean;
  href?: string;
  icon?: React.ReactNode;
  download?: boolean | string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  label,
  value,
  href,
  external,
  icon,
  download,
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    download={download}
    className="group relative flex items-center gap-3 rounded-2xl px-4 py-3
               border border-(--border-subtle) bg-(--bg-soft)
               [html[data-theme='light']_&]:bg-[#f5f5fb]
               hover:border-(--accent)/35 hover:bg-(--bg-elevated)
               transition-all duration-150 ease-out"
  >
    <div
      className="w-9 h-9 rounded-full bg-(--bg-elevated) border border-(--border-subtle)
                    flex items-center justify-center shrink-0
                    group-hover:border-(--accent)/35 transition-colors"
    >
      {icon}
    </div>

    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-fg-muted uppercase tracking-wider">
          {label}
        </span>
        {external && <span className={pill}>External</span>}
      </div>
      <div className="text-[14px] font-medium truncate group-hover:text-fg transition-colors">
        {value}
      </div>
    </div>

    {download ? (
      <DownloadIcon
        className="w-4 h-4 text-fg-muted group-hover:text-fg transition-colors shrink-0
                   group-hover:translate-y-0.5 transition-transform"
      />
    ) : (
      <ArrowUpRightIcon
        className="w-4 h-4 text-fg-muted group-hover:text-fg transition-colors shrink-0
                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    )}
  </a>
);

const InfoStat: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
}> = ({ icon, title, value, sub }) => (
  <div
    className="flex items-start gap-3 rounded-2xl p-4 border border-(--border-subtle) bg-(--bg-soft)
                  [html[data-theme='light']_&]:bg-[#f5f5fb]"
  >
    <div
      className="w-10 h-10 rounded-full bg-(--bg-elevated) border border-(--border-subtle)
                    flex items-center justify-center shrink-0"
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[12px] font-medium text-fg">{title}</p>
      <p className="text-[14px] font-semibold text-fg mt-1">{value}</p>
      <p className="text-[12px] text-fg-muted mt-1 leading-relaxed">{sub}</p>
    </div>
  </div>
);

// Icons
const ClockIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-fg-muted"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-fg-muted"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? ""}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 17L17 7"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 7h7v7"
    />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? ""}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4v12m0 0l-4-4m4 4l4-4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
    />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-fg-muted"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-fg-muted"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l9 6 9-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

const GitHubIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-fg-muted"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 .9 2 .9 1.2 2.1 3.1 1.5 3.9 1.1.1-.9.5-1.5.8-1.9-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z" />
  </svg>
);

export const ResumeIcon: React.FC<{ className?: string }> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-newspaper-icon lucide-newspaper"
  >
    <path d="M15 18h-5" />
    <path d="M18 14h-8" />
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
    <rect width="8" height="4" x="10" y="6" rx="1" />
  </svg>
);

export const NIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "w-4 h-4"}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    {/* Rounded badge */}
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    {/* Bold N */}
    <path
      d="M8 16V8l8 8V8"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactPage;
