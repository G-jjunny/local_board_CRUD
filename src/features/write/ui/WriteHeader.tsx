"use client";

import { ROUTES } from "@/app/routes";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const WriteHeader = () => {
  return (
    <div className=" flex gap-2 items-center">
      <Link href={ROUTES.HOME}>
        <ArrowLeft className=" cursor-pointer" />
      </Link>
      <h1 className="text-2xl font-bold">게시글 작성</h1>
    </div>
  );
};

export default WriteHeader;
