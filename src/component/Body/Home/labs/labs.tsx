// src/WorkerLab.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import FibWorker from "./worker/fibWorker?worker";
import {
  cardBase,
  sectionHeaderBase,
  labelClass,
  sectionTitleClass,
  sectionSubTitleClass,
  chipClass,
} from "../../../../styles/tokens";

type FibWorkerResponse = {
  result: number;
  time: number;
};

/* ── Experiment 1: Web Worker Fibonacci ── */
const FibonacciExperiment: React.FC = () => {
  const [fibResult, setFibResult] = useState<number | null>(null);
  const [calcTime, setCalcTime] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [uiCounter, setUiCounter] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new FibWorker();
    workerRef.current = worker;

    worker.onmessage = (e: MessageEvent<FibWorkerResponse>) => {
      setFibResult(e.data.result);
      setCalcTime(e.data.time);
      setIsCalculating(false);
    };

    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setUiCounter((c) => (c + 2) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const runWorkerTask = () => {
    if (!workerRef.current) return;
    setIsCalculating(true);
    setFibResult(null);
    setCalcTime(null);

    workerRef.current.postMessage({
      type: "CALCULATE_FIBONACCI",
      number: 45,
    });
  };

  return (
    <div className={cardBase}>
      <div className="grid items-center gap-5 md:grid-cols-2">
        {/* 좌측: 컨트롤 패널 */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-[15px] font-medium">Fibonacci Calculator</h3>
            <span className={chipClass}>Worker Thread</span>
          </div>

          <p className="text-[13px] text-fg-muted leading-[1.7] mb-5">
            &apos;계산 시작&apos;을 누르면{" "}
            <strong>DP가 아닌 피보나치 수열(45번째)</strong>을 계산합니다.
            메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측
            애니메이션은 멈추지 않습니다.
          </p>

          <button
            onClick={runWorkerTask}
            disabled={isCalculating}
            className={
              "w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-lg " +
              "border border-(--accent-border) " +
              "bg-(--accent-subtle) text-fg " +
              "enabled:hover:bg-(--accent)/10 enabled:hover:border-(--accent) enabled:hover:-translate-y-0.5 " +
              "transition-all duration-300 ease-out " +
              "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            }
          >
            {isCalculating ? (
              <>
                <span className="inline-flex h-4 w-4 items-center justify-center">
                  <span className="h-3 w-3 rounded-full border border-current border-t-transparent animate-spin" />
                </span>
                <span>계산 중...</span>
              </>
            ) : (
              "▶ 무거운 계산 시작 (Fib 45)"
            )}
          </button>
        </div>

        {/* 우측: 시각화 패널 */}
        <div className="relative flex flex-col items-center justify-center min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden">
          <div className="absolute top-3 right-3 text-[10px] text-fg-muted">
            Main Thread UI
          </div>

          <div
            className="w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]"
            style={{ transform: `rotate(${uiCounter}deg)` }}
          />
          <span className="text-[11px] text-fg-muted">
            ▲ UI Frame (Always Running)
          </span>

          <div className="w-full h-px my-4 bg-(--border-subtle)" />

          <div className="text-center">
            <div className="text-[11px] text-fg-muted">Result (Fib 45)</div>
            <div className="text-[24px] font-semibold my-1">
              {fibResult !== null ? fibResult.toLocaleString() : "-"}
            </div>
            <div className="text-[10px] text-fg-muted">
              {calcTime !== null ? `Time: ${calcTime.toFixed(1)}ms` : "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Experiment 2: Virtual Scroll vs Naive DOM ── */
const ITEM_HEIGHT = 32;
const VIEWPORT_HEIGHT = 240;
const TOTAL_ITEMS = 10_000;

const VirtualScrollExperiment: React.FC = () => {
  const [mode, setMode] = useState<"idle" | "naive" | "virtual">("idle");
  const [naiveTime, setNaiveTime] = useState<number | null>(null);
  const [virtualTime, setVirtualTime] = useState<number | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const runNaive = useCallback(() => {
    setMode("naive");
    setNaiveTime(null);
    const start = performance.now();

    // Force a synchronous layout by creating real DOM nodes
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNaiveTime(performance.now() - start);
      });
    });
  }, []);

  const runVirtual = useCallback(() => {
    setMode("virtual");
    setVirtualTime(null);
    setScrollTop(0);
    const start = performance.now();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVirtualTime(performance.now() - start);
      });
    });
  }, []);

  const reset = useCallback(() => {
    setMode("idle");
    setNaiveTime(null);
    setVirtualTime(null);
    setScrollTop(0);
  }, []);

  // Virtual scroll 계산
  const startIdx = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT) + 2;
  const endIdx = Math.min(startIdx + visibleCount, TOTAL_ITEMS);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className={cardBase}>
      <div className="grid items-center gap-5 md:grid-cols-2">
        {/* 좌측: 컨트롤 */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-[15px] font-medium">Virtual Scroll</h3>
            <span className={chipClass}>Rendering Opt.</span>
          </div>

          <p className="text-[13px] text-fg-muted leading-[1.7] mb-5">
            <strong>{TOTAL_ITEMS.toLocaleString()}개</strong> 항목을 렌더링합니다.
            Naive DOM은 모든 요소를 생성하지만, Virtual Scroll은{" "}
            <strong>뷰포트 내 요소만</strong> 렌더링하여 성능을 확보합니다.
          </p>

          <div className="flex gap-2 mb-3">
            <button
              onClick={runNaive}
              disabled={mode === "naive"}
              className={
                "flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer " +
                "transition-all duration-200 " +
                "disabled:opacity-60 disabled:cursor-not-allowed " +
                (mode === "naive"
                  ? "border-red-400/40 bg-red-500/10 text-red-400"
                  : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg")
              }
            >
              Naive DOM
            </button>
            <button
              onClick={runVirtual}
              disabled={mode === "virtual"}
              className={
                "flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer " +
                "transition-all duration-200 " +
                "disabled:opacity-60 disabled:cursor-not-allowed " +
                (mode === "virtual"
                  ? "border-(--accent-border) bg-(--accent-subtle) text-(--accent)"
                  : "border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg")
              }
            >
              Virtual Scroll
            </button>
          </div>

          {mode !== "idle" && (
            <button
              onClick={reset}
              className="w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
            >
              초기화
            </button>
          )}
        </div>

        {/* 우측: 시각화 */}
        <div className="relative flex flex-col min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden">
          <div className="absolute top-3 right-3 text-[10px] text-fg-muted z-10">
            {mode === "idle"
              ? "대기 중"
              : mode === "naive"
                ? `Naive · ${TOTAL_ITEMS.toLocaleString()} DOM nodes`
                : `Virtual · ${endIdx - startIdx} DOM nodes`}
          </div>

          {mode === "idle" && (
            <div className="flex-1 flex items-center justify-center text-[13px] text-fg-muted">
              왼쪽 버튼을 눌러 비교해 보세요
            </div>
          )}

          {mode === "naive" && (
            <div
              className="overflow-y-auto flex-1"
              style={{ maxHeight: VIEWPORT_HEIGHT }}
            >
              {Array.from({ length: TOTAL_ITEMS }, (_, i) => (
                <div
                  key={i}
                  className="flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30"
                  style={{ height: ITEM_HEIGHT }}
                >
                  <span className="w-12 text-fg-dimmed font-mono text-[10px]">
                    {i + 1}
                  </span>
                  <span>Row Item #{i + 1}</span>
                </div>
              ))}
            </div>
          )}

          {mode === "virtual" && (
            <div
              ref={scrollRef}
              className="overflow-y-auto flex-1"
              style={{ maxHeight: VIEWPORT_HEIGHT }}
              onScroll={handleScroll}
            >
              <div
                style={{ height: TOTAL_ITEMS * ITEM_HEIGHT, position: "relative" }}
              >
                {Array.from({ length: endIdx - startIdx }, (_, i) => {
                  const idx = startIdx + i;
                  return (
                    <div
                      key={idx}
                      className="absolute left-0 right-0 flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30"
                      style={{
                        height: ITEM_HEIGHT,
                        top: idx * ITEM_HEIGHT,
                      }}
                    >
                      <span className="w-12 text-fg-dimmed font-mono text-[10px]">
                        {idx + 1}
                      </span>
                      <span>Row Item #{idx + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 결과 비교 바 */}
          {(naiveTime !== null || virtualTime !== null) && (
            <div className="flex gap-3 px-4 py-3 border-t border-(--border-subtle) bg-(--bg-soft)">
              {naiveTime !== null && (
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-fg-dimmed">Naive</div>
                  <div className="text-[14px] font-semibold text-red-400">
                    {naiveTime.toFixed(1)}ms
                  </div>
                </div>
              )}
              {virtualTime !== null && (
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-fg-dimmed">Virtual</div>
                  <div className="text-[14px] font-semibold text-(--accent)">
                    {virtualTime.toFixed(1)}ms
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Section Container ── */
export const WorkerLab: React.FC = () => {
  return (
    <section id="lab" className="mb-20">
      <div className={sectionHeaderBase}>
        <div>
          <p className={labelClass}>Lab</p>
          <h2 className={sectionTitleClass}>프론트엔드 실험실</h2>
        </div>
        <p className={sectionSubTitleClass}>
          성능 최적화 기법을 라이브 데모로 직접 체험해 보세요.
        </p>
      </div>

      <div className="grid gap-5">
        <FibonacciExperiment />
        <VirtualScrollExperiment />
      </div>
    </section>
  );
};
