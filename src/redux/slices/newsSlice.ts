import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../types/Article';
import {
  NEWS_API_ENDPOINT,
  INITIAL_PAGES_COUNT,
  PLACEHOLDER_ARTICLE,
} from '../../constants/constants';
import { Status } from '../../types/Status';
import { INewsData } from '../../interfaces/INewsData';

const validateArticle = (news: Article) => {
  const validatedArticle = { ...news };
  Object.keys(news).map((key) => {
    if (!news[key as keyof typeof news]) {
      validatedArticle[key as keyof typeof validatedArticle] =
        PLACEHOLDER_ARTICLE[key as keyof typeof news];
    }
  });
  return validatedArticle;
};

export const fetchArticles = createAsyncThunk('news/get', async () => {
  const response = await fetch(NEWS_API_ENDPOINT);
  const json: INewsData = await response.json();
  return json.articles.map((news, i) => {
    return {
      ...validateArticle(news),
      id: i,
    };
  });
});

interface INewsState {
  filteredNewsData: Article[];
  allNewsData: Article[];
  status: Status;
  pagesCount: number;
}

const initialState: INewsState = {
  filteredNewsData: [],
  allNewsData: [],
  status: 'loading',
  pagesCount: INITIAL_PAGES_COUNT,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.filteredNewsData = state.allNewsData.filter((news) =>
        news.title.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = 'loading';
      state.allNewsData = [];
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = 'success';
      state.allNewsData = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = 'error';
      state.allNewsData = [];
    });
  },
});

export const { setSearchValue } = newsSlice.actions;

export default newsSlice.reducer;
