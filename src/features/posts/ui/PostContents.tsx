import React from "react";

interface PostContentsProps {
  content: string;
}

const PostContents = ({ content }: PostContentsProps) => {
  return (
    <div className="whitespace-pre-wrap text-base text-gray-700">{content}</div>
  );
};

export default PostContents;
