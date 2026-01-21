// src/BlogSection.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_ALL_POSTS } from "../../Blog/data/postingDatas";

const sectionHeaderBase =
  "flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5 w-full";

const labelClass = "text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3";

const sectionTitleClass = "text-[20px] font-semibold tracking-[0.02em]";
const sectionSubTitleClass =
  "text-[13px] text-fg-muted leading-relaxed cursor-pointer";

// 컴포넌트 외부에서 랜덤 선택 (한 번만 실행)
const getRandomPosts = () => {
  const shuffled = [...MOCK_ALL_POSTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
};

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  // useState의 초기값으로만 랜덤 선택 (한 번만 실행됨)
  const [randomPosts] = useState(getRandomPosts);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };
  const handleViewAllClick = () => {
    navigate("/blog");
  };

  return (
    <section id="experience" className="mb-14">
      <div className={sectionHeaderBase}>
        <div className="w-full">
          <p className={labelClass}>Blog</p>
          <div className="w-full flex justify-between">
            <h2 className={sectionTitleClass}>기술 블로그</h2>

            {/* 블로그 전체 보기 버튼 */}
            <p className={sectionSubTitleClass} onClick={handleViewAllClick}>
              포스팅 전체 보기 →
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {randomPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => handlePostClick(post.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                handlePostClick(post.slug);
            }}
            className="group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer transition-colors hover:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/40"
          >
            <div className="grid md:grid-cols-[240px_1fr] md:h-[200px]">
              {/* 왼쪽 커버(있을 때만) */}
              {post.cover && (
                <div className="relative h-[180px] md:h-[200px] bg-(--bg-soft)">
                  <img
                    src={post.cover}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
                </div>
              )}

              <div className="p-6 md:overflow-hidden">
                <h3 className="text-[20px] font-semibold leading-snug mb-2 line-clamp-1">
                  {post.title}
                </h3>

                <p className="text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 8).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[12px] text-fg-muted">
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
