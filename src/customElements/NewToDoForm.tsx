import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { addToDo, selectInputText } from '../redux/slices/toDoListSlice';
import { CustomElement } from './Types';

export function NewToDoForm({ children, className }: CustomElement) {
  const dispatch = useAppDispatch();
  const inputText = useAppSelector(selectInputText);
  return (
    <form
      className={className}
      onSubmit={e => {
        e.preventDefault();
        dispatch(addToDo(inputText));
      }}
    >
      {children}
    </form>
  );
}
