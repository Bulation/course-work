import { Article } from '../types/Article';

export interface INewsData {
  articles: Article[];
  status: string;
  totalResults: number;
}
