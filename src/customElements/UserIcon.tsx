import { CustomElement } from './Types';
import User from '../assets/user-profile-svgrepo-com.svg';
import { changePage } from '../redux/slices/toDoListSlice';
import { useAppDispatch } from '../redux/hooks/hooks';

export function UserIcon({ className }: CustomElement) {
  const dispatch = useAppDispatch();
  return (
    <img
      onClick={() => dispatch(changePage('sign-in'))}
      className={className}
      src={User}
    />
  );
}
