import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

interface PostsState {
  items: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (newPost: Post) => {
  const res = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error';
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;
