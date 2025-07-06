"use client";

import { usePostStore } from "@/shared/store/postStore";
import { Input } from "@/shared/ui/input";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import PostListCard from "./PostListCard";
import { ROUTES } from "@/app/routes";

const PostList = () => {
  const posts = usePostStore((s) => s.posts);

  const [keyword, setKeyword] = useState("");

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return posts
      .filter((p) => p.title.toLowerCase().includes(kw))
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)); // 최신순
  }, [posts, keyword]);

  return (
    <section className="space-y-4">
      {/* ── 검색 입력 ─────────────────────── */}
      <Input
        placeholder="제목 검색..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full md:w-1/2"
      />
      <div className=" w-full h-[2px] bg-muted-foreground"></div>

      {/* ── 게시글 카드 리스트 ─────────────── */}
      <div className="flex flex-col gap-2">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">게시글이 없습니다.</p>
        )}

        {filtered.map((post) => (
          <Link href={`${ROUTES.POST_DETAIL(post.id)}`} key={post.id}>
            <PostListCard title={post.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostList;
