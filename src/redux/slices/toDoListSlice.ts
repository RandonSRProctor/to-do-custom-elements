import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// This is an interface in the docs.  Curious if a type is okay.
type ToDoListState = {
  listContents: string[];
  inputText: string;
  page: 'main' | 'sign-in';
  dbResponse: string;
};

const initialState: ToDoListState = {
  listContents: ['This', 'is', 'the', 'initial', 'state'],
  inputText: '',
  page: 'main',
  dbResponse: 'Does it work?',
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.listContents = [...state.listContents, action.payload];
      state.inputText = '';
    },
    updateInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    changePage: (state, action: PayloadAction<'main' | 'sign-in'>) => {
      state.page = action.payload;
    },
    updateDBResponse: (state, action: PayloadAction<string>) => {
      state.dbResponse = action.payload;
    },
  },
});

export const { addToDo, updateInputText, changePage, updateDBResponse } =
  toDoListSlice.actions;

export const selectToDoListItems = (state: RootState) =>
  state.toDoListSlice.listContents;

export const selectInputText = (state: RootState) =>
  state.toDoListSlice.inputText;

export const selectPage = (state: RootState) => state.toDoListSlice.page;

export const selectDBResponse = (state: RootState) =>
  state.toDoListSlice.dbResponse;

export default toDoListSlice.reducer;
