import React from "react";
import {
  cardBase,
  sectionHeaderBase,
  labelClass,
  sectionTitleClass,
  sectionSubTitleClass,
  chipClass,
} from "../../../../styles/tokens";


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="mb-20">
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>About</p>
          <h2 className={sectionTitleClass}>개발자로서의 가치관</h2>
        </div>
        <p className={sectionSubTitleClass}>
          최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을
          추구합니다.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
        {/* Card 1 */}
        <div className={cardBase}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-[16px] font-bold">
              안전한 혁신 (Safe Innovation)
            </h3>
          </div>
          <div className="text-[14px] text-fg-muted leading-[1.75]">
            <p>
              새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서
              <strong className="text-fg"> "기술이 미칠 영향"</strong>을 한번 더 고려합니다.
              <br />
              <br />
              보안을 전공하며 익힌 <strong className="text-fg">Risk Management</strong> 사고방식을
              개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의
              시나리오를 먼저 방어합니다.
            </p>
            <ul className="mt-4 pl-4 list-disc space-y-2.5 text-fg-muted">
              <li>
                사용자 피해 방지를 최우선으로 하는 설계
                <span className="block text-[12px] text-fg-dimmed mt-0.5">
                  → CCU2 Log Monitor에서 메모리 누수 방어 로직을 먼저 설계한 후 기능 개발 착수
                </span>
              </li>
              <li>
                통제 가능한 리스크 안에서의 과감한 기술 도전
                <span className="block text-[12px] text-fg-dimmed mt-0.5">
                  → VTDM 레거시 리팩터링 시 DDD 도입으로 의존성을 단계적으로 분리
                </span>
              </li>
              <li>
                보안적/비판적 사고를 통한 견고한 아키텍처 구축
                <span className="block text-[12px] text-fg-dimmed mt-0.5">
                  → RSA/AES 하이브리드 암호화 메신저에서 Wireshark로 평문 노출 0건 검증
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className={cardBase}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-[16px] font-bold">일하는 태도</h3>
            <span className={chipClass}>Mindset</span>
          </div>
          <div className="text-[14px] text-fg-muted leading-[1.75]">
            <p className="mb-2">
              <strong className="text-fg">"팀의 심리적 안전지대"</strong>가 되고자 합니다.
            </p>
            <ul className="mt-1.5 pl-4 list-disc space-y-2.5">
              <li>
                '나'보다 '우리(Team)'의 이익을 먼저 고려
              </li>
              <li>
                문제 발생시 즉각적인 원인 분석 및 해결책 탐색
                <span className="block text-[12px] text-fg-dimmed mt-0.5">
                  → DLT 로그 분석 도구에서 1M 로그 검색 병목을 Web Worker로 2초 내 해결
                </span>
              </li>
              <li>
                끝까지 파고드는 집요함
                <span className="block text-[12px] text-fg-dimmed mt-0.5">
                  → 80K logs/sec 환경에서 Log Consistency 이슈를 끝까지 추적해 Race Condition 해결
                </span>
              </li>
              <li>동료가 안심하고 등을 맡길 수 있는 신뢰 구축</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
