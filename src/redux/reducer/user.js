/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';

const initialModel = {
  userInfo: {},
  isLogged: false,
  role: 1,
  connectedAuthServer: false,
};

export const Slice = createSlice({
  name: 'user',
  initialState: initialModel,
  reducers: {
    reset() {
      return {
        userInfo: {},
        isLogged: false,
        role: 1,
        connectedAuthServer: false,
      };
    },
  },
});

export const userSliceActions = Slice.actions;
export default Slice.reducer;
