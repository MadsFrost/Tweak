import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface File {
  name: string;
  path: string;
  content: string;
  created?: number;
  lastEdit?: number;
}

export interface FileState {
  files: File[];
}

// Define the initial state using that type
const initialState: FileState = {
  files: [],
};

export const files = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<File[] | undefined>) => {
      const files = action.payload;
      console.log(files);
      if (files) {
        state.files = [...files, ...state.files];
      }
    },

    selectFile: (state, action: PayloadAction<Pick<File, "path">>) => {},

    closeFile: (state, action: PayloadAction<string>) => {
      state.files = state.files.filter((file) => file.path !== action.payload);
    },
    updateFile: (state, action: PayloadAction<File>) => {
      state.files = state.files.map((file) => {
        if (file.path === action.payload.path) {
          return action.payload;
        }
        return file;
      });
    },
  },
});

export const { addFile } = files.actions;

export default files.reducer;
