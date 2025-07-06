import { create } from "zustand";
import { Comment, Post } from "./types";
import { loadFromLocalStorage, saveToLocalStorage } from "../lib/storage";

interface PostState {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
  addComment: (postId: string, comment: Comment) => void;
  initialize: () => void;
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  addPost: (post) => {
    const updated = [post, ...get().posts];
    set({ posts: updated });
    saveToLocalStorage("posts", updated);
  },
  deletePost: (id) => {
    const updated = get().posts.filter((p) => p.id !== id);
    set({ posts: updated });
    saveToLocalStorage("posts", updated);
  },
  //   addComment: (postId, comment) => {
  //     const updated = get().posts.map((p) =>
  //       p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
  //     );
  //     set({ posts: updated });
  //     saveToLocalStorage('posts', updated);
  //   },
  addComment: (postId, comment) => {
    const updated = get().posts.map((p) => {
      if (p.id === postId) {
        const newComments: Comment[] = [...p.comments, comment];
        return { ...p, comments: newComments };
      }
      return p;
    });

    set({ posts: updated });
    saveToLocalStorage("posts", updated);
  },
  initialize: () => {
    const local = loadFromLocalStorage("posts");
    if (local) set({ posts: local });
  },
}));
