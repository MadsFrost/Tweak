import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Command = "tasklist" | "taskitem" | "codeblock-ts";

interface CommandState {
  isCommandOpen: boolean;
  command: Command | string;
}

const initialState: CommandState = {
  isCommandOpen: false,
  command: "codeblock-ts",
};

export const command = createSlice({
  name: "command",
  initialState,
  reducers: {
    toggleCommand: (state) => {
      state.isCommandOpen = !state.isCommandOpen;
    },
    updateCommand: (state, action: PayloadAction<string>) => {
      state.command = action.payload;
      state.isCommandOpen = !state.isCommandOpen;
      console.log("New command!", state.command);
    },
  },
});

export const { toggleCommand, updateCommand } = command.actions;

export default command.reducer;
