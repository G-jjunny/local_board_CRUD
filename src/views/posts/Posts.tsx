import { ROUTES } from "@/app/routes";
import CommentForm from "@/features/posts/ui/CommentForm";
import CommentList from "@/features/posts/ui/CommentList";
import PostContents from "@/features/posts/ui/PostContents";
import PostHeader from "@/features/posts/ui/PostHeader";
import { usePostStore } from "@/shared/store/postStore";
import { useParams, useRouter } from "next/navigation";

const Posts = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { posts, deletePost } = usePostStore();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <p className="text-center text-muted-foreground mt-10">
        존재하지 않는 게시글입니다.
      </p>
    );
  }

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deletePost(post.id);
      router.push(ROUTES.HOME);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      {/* 게시글 헤더 */}
      <PostHeader title={post.title} handleDelete={handleDelete} />
      <div className=" w-full h-[2px] bg-muted-foreground" />

      {/* 게시글 내용 */}
      <PostContents content={post.content} />

      {/* 게시글 댓글 */}
      <div className=" flex flex-col gap-2">
        <h2 className="font-semibold mt-6">댓글</h2>
        <CommentList comments={post.comments} />
        <CommentForm postId={post.id} />
      </div>
    </main>
  );
};

export default Posts;
