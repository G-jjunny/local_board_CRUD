import z from "zod";

export const WriteFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "제목은 두 글자 이상 입력해주세요." })
    .max(50),
  description: z.string().min(1, { message: "내용을 입력해 주세요." }),
});
