import type { CareerItem } from "../types";
import sureLogo from "./assets/SURE_LOGO.png";

export const careerData: CareerItem[] = [
  {
    id: "career-1",
    company: "SURESOFTTECH",
    companyLogo: sureLogo,
    position: "Frontend Developer",
    period: "2023.03 - 현재",
    projects: [
      {
        name: "차량 통합 제어기(CCU2) Log Monitor & Analyzer",
        period: "2024.07 - 2025.06",
        role: "Frontend Lead / 아키텍처 설계",
        description:
          "DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하여 차량 상태를 진단하는 Electron 기반 Log Analyzer. 기존 DLT-Viewer 한계를 극복하고 비전문가도 쉽게 분석 가능한 UX/성능 중심 데스크톱 앱 구축.",
        tasks: [
          "아키텍처 재설계: 기존 웹 뷰어(Web)를 Electron 데스크톱 앱으로 마이그레이션하여 시스템 접근성 및 성능 강화",
          "비동기 파이프라인 구축: ZeroMQ와 IPC 통신을 활용해 대용량 로그 수집/처리 간 병목 현상 및 데이터 유실 방지",
          "렌더링 엔진 튜닝: TraceTable 라이브러리의 내부 캐싱 로직을 오버라이딩하여 불필요한 리렌더링 차단",
          "UX 고도화: 가상 스크롤(Virtual Scrolling) 및 gridBufferDataObj 활용 로직을 구현해 수십만 건 탐색 시 지연 시간 0.2초 미만 달성",
          "데이터 정합성 관리: Zustand 기반의 전역 상태 관리 및 커스텀 스토어(CustomStore) 설계로 실시간 데이터 동기화 이슈 해결",
        ],
        achievements: [
          " 성능 최적화: 렌더링 성능 2.3배 향상(1.04s → 450ms) 및 메모리 사용량 30% 절감(3.3GB → 2.0GB)",
          " 업무 효율화: 로그 분석 소요 시간 90% 단축(5분 → 30초) 및 분석 정확도 98% 확보",
          " 대용량 처리: 초당 80,000건 이상의 로그 데이터를 UI 멈춤(Freezing) 없이 실시간 시각화",
          " 안정성 확보: 테스트 코드 도입 및 스크립트 모듈화를 통해 기능 추가 시 장애 발생률 90% 감소",
          " 차트 개선: Aggregation 기법 적용으로 차트 렌더링 속도 85% 개선(3.2s → 0.48s)",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Electron", "Node.js"],
          libs: ["ZeroMQ", "DevExtreme", "Zustand", "TailwindCSS"],
          patterns: [
            "이벤트 버스(useEventOn)",
            "CustomStore",
            "무한 스크롤 버퍼링",
          ],
        },
      },

      {
        name: "사용자 정의 필터링 기반 DLT 로그 분석 툴",
        period: "2025.07 - 2025.09",
        role: "Frontend Lead / 성능 최적화",
        description:
          "수백만 건 로그(DLT/CSV)를 실시간에 가깝게 시각화하고 사용자 맞춤 UI·필터링으로 분석 효율을 극대화하는 Electron 기반 로그 분석 툴. 현업 분석가 워크플로우 단축과 정확도 향상에 집중.",
        tasks: [
          "가상 스크롤 엔진 최적화: DevExtreme DataGrid 기반의 가상 스크롤을 고도화하여 대용량 데이터 렌더링 병목 해소",
          "스트리밍 파이프라인 구축: Node.js의 Stream 처리를 적용해 메모리 오버헤드 없이 대용량 데이터를 안정적으로 파일 시스템에 기록",
          "UI/UX 커스터마이징: rc-dock 라이브러리를 활용해 사용자 작업 환경(패널 배치)을 저장·복원할 수 있는 도킹 레이아웃 시스템 구현",
          "프로세스 자동화: IPC 통신을 활용하여 필터 파일 자동 생성 및 외부 DLT 뷰어 실행 과정을 원클릭으로 통합",
          "기술 문서화: 정규식 호환성, UI 렌더링 이슈 등 반복되는 문제의 해결 과정을 문서화하여 팀 내 개발 생산성 기여",
        ],
        achievements: [
          " 초고속 데이터 처리: 100만 건 이상의 대용량 로그 로딩 및 탐색 시 평균 응답 속도 2초 이내 달성",
          " 리소스 최적화: 스트리밍 방식(Stream API) 도입으로 대용량 CSV 내보내기(Export) 시 메모리 사용량 60% 절감",
          " 데이터 입출력 성능: 100만 행의 데이터를 3초 이내에 파일로 변환 및 저장하는 고속 Export 구현",
          " 업무 효율성 증대: 맞춤형 레이아웃 및 외부 뷰어 연동 자동화로 반복 작업을 제거하여 업무 워크플로우 30~40% 단축",
          " 운영 안정성: 정밀한 시간(μs) 동기화 및 트러블슈팅 `플레이북` 도입으로 이슈 대응 속도 향상",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Electron", "Node.js"],
          libs: ["rc-dock", "DevExtreme DataGrid", "Recharts"],
          patterns: [
            "IPC 통신",
            "가상 스크롤(Virtual Scrolling)",
            "스트리밍 데이터 처리",
          ],
        },
      },

      {
        name: "차량제어 시험산출물 관리 시스템 고도화(VTDM)",
        period: "2025.09 - 현재",
        role: "Frontend Developer / 유지보수·아키텍처 개선",
        description:
          "차량 테스트/평가 산출물을 클라우드에서 통합 관리하는 웹 플랫폼(SaaS) 유지보수 및 고도화. 레거시 기술 부채로 인한 유지보수 난이도와 대용량 조회 성능 문제를 해결하기 위해 도메인 중심 재설계 및 렌더링 최적화 주도.",
        tasks: [
          "아키텍처 리팩토링: 기존 구조를 DDD(Domain-Driven Design)로 재편하고, 공통 로직을 커스텀 훅으로 추상화, 유지보수성 강화",
          "스레드 최적화: 무한 스크롤의 DOM 연산 로직을 Web Worker로 분리하여 메인 스레드 블로킹(Blocking) 현상 및 UI 끊김 제거",
          "상태 관리 개선: 불필요한 Global State를 Local State로 전환하고 렌더링 트리거를 통합 관리하여 성능 병목 해소",
          "시각화 모듈 개발: AgGrid 및 AgChart를 커스터마이징하여 대시보드 내 시스템 로그 모니터링 및 분석 차트 구현",
          "보안 시스템 구축: 화이트리스트 기반 접근 제어 및 이슈 대응(Hotfix) 프로세스를 정립하여 데이터 보안성 확보",
        ],
        achievements: [
          "코드 경량화: 도메인 주도 설계(DDD) 및 모듈화 도입으로 전체 코드베이스(LOC) 30% 절감",
          "렌더링 성능: 컴포넌트 의존성 최적화로 불필요한 리렌더링 80% 감소 (5회 → 1회)",
          "UX 최적화: 연산 부하 분산 처리를 통해 대용량 리스트 스크롤 시 프레임 드랍(Frame Drop) 0% 달성",
          "운영 안정성: 전역 상태(Global State) 의존도 축소로 사이드 이펙트에 의한 버그 발생률 최소화",
        ],
        techStack: {
          languages: ["React(TypeScript)", "Node.js"],
          libs: ["AgGrid", "AgChart"],
          patterns: [
            "Domain-Driven Design(DDD)",
            "Web Worker",
            "Custom Hooks",
            "Docker",
            "Spring Boot 협업",
          ],
        },
      },
    ],
  },
];
