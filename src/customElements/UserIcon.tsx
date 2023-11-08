import { CustomElement } from './Types';
import User from '../assets/user-profile-svgrepo-com.svg';

export function UserIcon({ className }: CustomElement) {
  return <img className={className} src={User} />;
}
