import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from '../../interfaces/IFilterState';
import { IFlatsData } from '../../interfaces/IFlatsData';

interface IFiltersState {
  filterState: IFilterState;
  sortState: string;
  filteredFlatsData: IFlatsData[];
}

const initialState: IFiltersState = {
  filterState: {
    city: '',
    roomsCount: '',
    district: '',
    metro: '',
    minPrice: '',
    maxPrice: '',
  },
  sortState: '',
  filteredFlatsData: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<Record<string, string>>) => {
      state.filterState = { ...state.filterState, ...action.payload };
    },
    setSortValue: (state, action) => {
      state.sortState = action.payload;
    },
    resetFilter: (state) => {
      state.filterState = { ...initialState.filterState };
      state.sortState = '';
    },
    setSortedFlats: (state) => {
      state.filteredFlatsData = state.filteredFlatsData.sort((a, b) => {
        if (state.sortState === 'asc') {
          return a.price - b.price;
        } else if (state.sortState === 'desc') {
          return b.price - a.price;
        }
        return a.id - b.id;
      });
    },
    setFilteredFlats: (state, action) => {
      state.filteredFlatsData = action.payload;
    },
  },
});

export const { setFilterValue, setSortValue, resetFilter, setFilteredFlats, setSortedFlats } =
  filterSlice.actions;

export default filterSlice.reducer;
