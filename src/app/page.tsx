"use client";

import { usePostStore } from "@/shared/store/postStore";
import Home from "@/views/home/Home";
import { useEffect } from "react";

export default function Page() {
  const initialize = usePostStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, []);
  return <Home />;
}
