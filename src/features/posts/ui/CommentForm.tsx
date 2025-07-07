import { Form } from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { CommentFormSchema } from "../model/schema";
import { usePostStore } from "@/shared/store/postStore";
import RHFTextarea from "@/shared/ui/RHFTextarea";
import { Button } from "@/shared/ui/button";
import { v4 as uuid } from "uuid";

interface CommentFormProps {
  postId: string;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const form = useForm<z.infer<typeof CommentFormSchema>>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues: {
      comment: "",
    },
  });
  const addComment = usePostStore((s) => s.addComment);

  const onSubmit = (values: z.infer<typeof CommentFormSchema>) => {
    addComment(postId, {
      id: uuid(),
      content: values.comment,
      createdAt: new Date().toISOString(),
    });

    form.setValue("comment", "");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-4"
      >
        <RHFTextarea form={form} name="comment" placeholder="댓글 남기기" />
        <div className=" flex justify-end gap-2">
          <Button type="submit">등록</Button>
        </div>
      </form>
    </Form>
  );
};

export default CommentForm;
