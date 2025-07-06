import { Card, CardContent } from "@/shared/ui/card";
import React from "react";

interface PostListCardProps {
  title: string;
}

const PostListCard = ({ title }: PostListCardProps) => {
  return (
    <Card className="hover:bg-accent cursor-pointer">
      <CardContent className="p-4 font-medium truncate">{title}</CardContent>
    </Card>
  );
};

export default PostListCard;
