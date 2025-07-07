import { ROUTES } from "@/app/routes";
import { Button } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PostHeaderProps {
  title: string;
  handleDelete: () => void;
}

const PostHeader = ({ title, handleDelete }: PostHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className=" flex gap-2 items-center">
        <Link href={ROUTES.HOME}>
          <ArrowLeft className=" cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <Button variant="destructive" onClick={handleDelete}>
        삭제
      </Button>
    </div>
  );
};

export default PostHeader;
