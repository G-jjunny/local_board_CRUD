export interface Comment {
  id: string;
  content: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}
