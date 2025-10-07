import { Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  content: string;
  tags: string[];
  author: string;
}
