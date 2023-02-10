import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FLATS_API_ENDPOINT } from '../../constants/constants';
import { IFlatsData } from '../../interfaces/IFlatsData';
import { Status } from '../../types/Status';

export const fetchFlats = createAsyncThunk<IFlatsData[]>('flats/get', async () => {
  const response = await fetch(FLATS_API_ENDPOINT);
  const flatsData: IFlatsData[] = await response.json();
  return flatsData;
});

interface IFlatsState {
  flatsData: IFlatsData[];
  status: Status;
}

const initialState: IFlatsState = {
  flatsData: [],
  status: 'loading',
};

export const flatSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlats.pending, (state) => {
      state.status = 'loading';
      state.flatsData = [];
    });
    builder.addCase(fetchFlats.fulfilled, (state, action) => {
      state.status = 'success';
      state.flatsData = action.payload;
    });
    builder.addCase(fetchFlats.rejected, (state) => {
      state.status = 'error';
      state.flatsData = [];
    });
  },
});

export default flatSlice.reducer;
