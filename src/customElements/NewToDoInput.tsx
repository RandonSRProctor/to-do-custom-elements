import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import {
  updateInputText,
  selectInputText,
} from '../redux/slices/toDoListSlice';
import { CustomElement } from './Types';

export function NewTodoInput({ className }: CustomElement) {
  const dispatch = useAppDispatch();
  const inputText = useAppSelector(selectInputText);
  return (
    <input
      className={className}
      value={inputText}
      onChange={e => dispatch(updateInputText(e.target.value))}
    ></input>
  );
}
