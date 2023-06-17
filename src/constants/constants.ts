import { Article } from '../types/Article';

export const INITIAL_PAGES_COUNT = 12;
export const NEWS_COUNT_PER_PAGE = 9;
export const FLATS_LIST_COUNT_PER_PAGE = 3;
export const FLATS_TILE_COUNT_PER_PAGE = 6;
export const PAGE_RANGE_DISPLAYED = 7;
export const MARGIN_PAGES_DISPLAYED = 1;
export const NEWS_API_ENDPOINT =
  'https://rss-news-api.onrender.com/everything?apiKey=83b895de0ec6457eb3c3e8334047d479&sources=lenta';
export const FLATS_API_ENDPOINT = 'https://63dd0d53df83d549ce9983d3.mockapi.io/flat';
export const SITE_URL = import.meta.env.BASE_URL; // получение адреса сайта из env переменной
export const PLACEHOLDER_ARTICLE: Article = {
  id: 0,
  author: 'No author',
  title: 'No title',
  description: 'No description',
  publishedAt: 'No date',
  source: {
    id: 'No id',
    name: 'No name',
  },
  url: 'No url',
  urlToImage: '/img/placeholder.png',
  content: 'No content',
};
export const MIN_NAME_LENGTH = 3;
