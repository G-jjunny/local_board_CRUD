import WriteForm from "@/features/write/ui/WriteForm";
import WriteHeader from "@/features/write/ui/WriteHeader";
import React from "react";

const Wirte = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <WriteHeader />
      <WriteForm />
    </div>
  );
};

export default Wirte;
