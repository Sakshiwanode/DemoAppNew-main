
import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    phoneNumber: null,
    otp:null,
    colorScheme: null,
   
  },
  reducers: {
    PhoneNumber: (state, action) => {
      state. phoneNumber = action.payload;
    },  
    Otp: (state, action) => {
      state. otp = action.payload;
    }, 
    theme: (state, action) => {
      state.colorScheme = action.payload;
    },
  },
});
export const isDarkTheme = (state: any) =>
  state.appState.colorScheme === 'dark';

export const { PhoneNumber, Otp,theme} = appStateSlice.actions;

export default appStateSlice.reducer;