import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// This is an interface in the docs.  Curious if a type is okay.
type ToDoListState = {
  listContents: string[];
  inputText: string;
};

const initialState: ToDoListState = {
  listContents: ['This', 'is', 'the', 'initial', 'state'],
  inputText: '',
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
  },
});

export const { addToDo, updateInputText } = toDoListSlice.actions;

export const selectToDoListItems = (state: RootState) =>
  state.toDoListSlice.listContents;

export const selectInputText = (state: RootState) =>
  state.toDoListSlice.inputText;

export default toDoListSlice.reducer;
