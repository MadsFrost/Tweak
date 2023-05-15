import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CommandState {
    isCommandOpen: boolean;
}
  
  const initialState: CommandState = {
    isCommandOpen: false
  }
  
  export const command = createSlice({
    name: 'command',
    initialState,
    reducers: {
        toggleCommand: (state) => {
            state.isCommandOpen = !state.isCommandOpen;
        }
    },
  })
  
  export const { toggleCommand } = command.actions;
  
  export default command.reducer;