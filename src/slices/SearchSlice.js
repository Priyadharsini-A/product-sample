
import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchQuery: (state, action) => {
      return action.payload;
    },
    clearSearchQuery: () => {
      return '';
    },
  },
});

export const { setSearchQuery, clearSearchQuery } = SearchSlice.actions;
export default SearchSlice.reducer;
