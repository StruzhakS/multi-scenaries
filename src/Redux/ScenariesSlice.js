import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstOption: '',
  secondOption: '',
  thirdOption: '',
  fourthOption: '',
};

const scenariesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirstOption: (state, { payload }) => {
      state.firstOption = payload;
    },
    setSecondOption: (state, { payload }) => {
      state.secondOption = payload;
    },
    setThirdOption: (state, { payload }) => {
      state.thirdOption = payload;
    },
    setFourthOption: (state, { payload }) => {
      state.fourthOption = payload;
    },
  },
});

export const { setFirstOption, setSecondOption, setThirdOption, setFourthOption } =
  scenariesSlice.actions;

export default scenariesSlice.reducer;
