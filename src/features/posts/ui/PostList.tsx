"use client";

import { usePostStore } from "@/shared/store/postStore";
import { Card, CardContent } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const PostList = () => {
  /* Zustand 상태 */
  const posts = usePostStore((s) => s.posts);

  /* 🔍 검색어 상태 */
  const [keyword, setKeyword] = useState("");

  /* 최신순 정렬 + 제목 필터링 → Memoize */
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

      {/* ── 게시글 카드 리스트 ─────────────── */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">게시글이 없습니다.</p>
        )}

        {filtered.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <Card className="hover:bg-accent cursor-pointer">
              <CardContent className="p-4 font-medium truncate">
                {post.title}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostList;
