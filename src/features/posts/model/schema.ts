import z from "zod";

export const CommentFormSchema = z.object({
  comment: z.string().min(1, { message: "댓글을 입력해주세요." }).max(50),
});
