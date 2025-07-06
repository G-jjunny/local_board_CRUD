import { Comment } from "@/shared/store/types";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <p className=" my-2 text-sm text-muted-foreground">
        아직 댓글이 없습니다.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {comments.map((c) => (
        <li key={c.id} className="p-3 border rounded-md text-sm">
          <p>{c.content}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(c.createdAt).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
