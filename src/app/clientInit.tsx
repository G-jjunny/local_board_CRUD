"use client";

import { useEffect } from "react";
import { usePostStore } from "@/shared/store/postStore";

export default function ClientInit() {
  const initialize = usePostStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, []);

  return null;
}
