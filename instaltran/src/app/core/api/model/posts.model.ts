export interface PostResponse {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const initialPost: PostResponse = {
  id: 0,
  userId: 0,
  title: '',
  body: '',
}
