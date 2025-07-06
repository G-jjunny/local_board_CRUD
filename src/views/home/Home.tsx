"use-client";
import { ROUTES } from "@/app/routes";
import PostList from "@/features/posts/ui/PostList";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* 상단 헤더 */}
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">게시판</h1>
        <Link href={ROUTES.WRITE}>
          <Button>글 작성</Button>
        </Link>
      </header>

      {/* 게시글 목록 */}
      <PostList />
    </div>
  );
};

export default Home;
