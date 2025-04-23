
// Define types for our application
export type Mood = 'happy' | 'sad' | 'moody' | 'cozy' | 'angry';

export interface Memory {
  id: string;
  title: string;
  mood: Mood;
  image?: string;
  content: string;
  createdAt: string;
  userId: string;
  userName: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  memories: number;
  happyMemories: number;
  sadMemories: number;
  moodyMemories: number;
  cozyMemories: number;
  angryMemories: number;
}
