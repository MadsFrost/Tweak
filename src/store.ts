import { configureStore } from '@reduxjs/toolkit'
import client from './state/client'
import command from './state/command'
import files from './state/files';
export const store = configureStore({
  reducer: {
    client: client,
    command: command,
    files: files
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch