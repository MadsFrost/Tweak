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
  selectedFile: File | undefined;
}

// Define the initial state using that type
const initialState: FileState = {
  files: [],
  selectedFile: undefined,
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

    selectFile: (state, action: PayloadAction<string>) => {
      const hasFile = state.files.find((file) => file.path === action.payload);

      if (hasFile) {
        state.selectedFile = hasFile;
      }
    },

    closeFile: (state, action: PayloadAction<string>) => {
      state.files = state.files.filter((file) => file.path !== action.payload);
      if (state.selectedFile?.path === action.payload) {
        state.selectedFile = undefined;
      }
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

export const { addFile, selectFile, closeFile } = files.actions;

export default files.reducer;
