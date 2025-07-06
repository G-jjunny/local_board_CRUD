"use client";

import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { WriteFormSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFInput from "@/shared/ui/RHFInput";
import { Form } from "@/shared/ui/form";
import RHFTextarea from "@/shared/ui/RHFTextarea";
import { Button } from "@/shared/ui/button";
import { usePostStore } from "@/shared/store/postStore";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes";

const WriteForm = () => {
  const form = useForm<z.infer<typeof WriteFormSchema>>({
    resolver: zodResolver(WriteFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const addPost = usePostStore((state) => state.addPost);
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof WriteFormSchema>) => {
    addPost({
      id: uuid(),
      title: values.title,
      content: values.description,
      createdAt: new Date().toISOString(),
      comments: [],
    });

    router.push(ROUTES.HOME);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-4"
      >
        <RHFInput
          form={form}
          label="제목"
          name="title"
          placeholder="제목을 입력해주세요."
          type="text"
        />
        <RHFTextarea
          form={form}
          placeholder="내용을 입력해주세요."
          name="description"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default WriteForm;
