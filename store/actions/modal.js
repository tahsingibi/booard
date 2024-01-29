import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: [],
};

export const { reducer, actions } = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    create: (state, action) => {
      state.modals = [...state.modals, action.payload];
    },
    close: (state, action) => {
      if (action.payload) {
        state.modals = state.modals.filter((item) => item.id != action.payload);

        return;
      }

      const filtered = state.modals.slice(0, -1);
      state.modals = filtered;
    },

    closeAll: (state) => {
      state.modals = [];
    },
  },
});
