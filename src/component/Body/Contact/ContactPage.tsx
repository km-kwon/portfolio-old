import React from "react";

const cardBase =
  "rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-6 shadow-[0_14px_34px_rgba(0,0,0,0.32)] " +
  "transition-transform transition-shadow transition-colors duration-200 ease-out " +
  "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 " +
  "[html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] " +
  "[html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]";

const labelClass =
  "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-2";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-[calc(var(--header-height)+48px)] pb-20 px-5">
      <div className="max-w-[720px] mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <p className={labelClass}>Contact</p>
          <h1 className="text-[32px] md:text-[40px] font-semibold tracking-tight mb-4">
            함께 이야기해요
          </h1>
          <p className="text-[15px] text-fg-muted leading-relaxed max-w-md mx-auto">
            새로운 프로젝트, 협업, 채용 등 어떤 주제든 편하게 연락 주세요.
            <br />
            가능한 빠르게 답변 드리겠습니다.
          </p>
        </section>

        {/* Contact Cards */}
        <div className="grid gap-5">
          {/* 소개 카드 */}
          <div className={`${cardBase} text-[14px] text-fg-muted leading-[1.8]`}>
            <h2 className="text-[16px] font-medium text-fg mb-3">
              어떤 도움이 필요하신가요?
            </h2>
            <p>
              새 제품을 기획 중이거나, 기존 서비스를 재설계하고 싶다면
              <strong className="text-fg"> "무엇을 해결하고 싶은지" </strong>를
              함께 정리하는 단계부터 도울 수 있습니다.
            </p>
            <p className="mt-3">
              프론트엔드 개발, UX 디자인, 사이드 프로젝트 협업 등
              다양한 영역에서 함께할 수 있습니다.
            </p>
          </div>

          {/* 연락처 카드 */}
          <div className={cardBase}>
            <h2 className="text-[16px] font-medium text-fg mb-4">
              연락 채널
            </h2>
            <div className="grid gap-3">
              <ContactItem
                label="Email"
                value="you@example.com"
                href="mailto:you@example.com"
              />
              <ContactItem
                label="GitHub"
                value="@your-id"
                href="https://github.com/your-id"
                external
              />
              <ContactItem
                label="LinkedIn"
                value="/in/your-id"
                href="https://linkedin.com/in/your-id"
                external
              />
            </div>
          </div>

          {/* 추가 정보 카드 */}
          <div className={cardBase}>
            <h2 className="text-[16px] font-medium text-fg mb-4">
              응답 안내
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-(--bg-soft) border border-(--border-subtle) flex items-center justify-center shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-fg">평균 응답 시간</p>
                  <p className="text-[12px] text-fg-muted mt-0.5">24시간 이내</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-(--bg-soft) border border-(--border-subtle) flex items-center justify-center shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-fg">위치</p>
                  <p className="text-[12px] text-fg-muted mt-0.5">대한민국, 서울</p>
                </div>
              </div>
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
  href: string;
  external?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value, href, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="flex items-center justify-between gap-3 rounded-full px-4 py-3
               border border-(--border-subtle) bg-(--bg-soft)
               [html[data-theme='light']_&]:bg-[#f5f5fb]
               hover:border-(--accent)/30 hover:bg-(--bg-elevated)
               transition-all duration-150 ease-out group"
  >
    <span className="text-[12px] text-fg-muted uppercase tracking-wider">
      {label}
    </span>
    <span className="text-[13px] font-medium truncate group-hover:text-fg transition-colors">
      {value}
    </span>
    {external && (
      <svg
        className="w-3.5 h-3.5 text-fg-muted group-hover:text-fg transition-colors shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    )}
  </a>
);

const ClockIcon: React.FC = () => (
  <svg className="w-4 h-4 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg className="w-4 h-4 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default ContactPage;
