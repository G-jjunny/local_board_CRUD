import WriteForm from "@/features/write/ui/WriteForm";
import React from "react";

const Wirte = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">게시글 작성</h1>
      <WriteForm />
    </div>
  );
};

export default Wirte;
