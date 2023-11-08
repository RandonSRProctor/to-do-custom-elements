import { CustomElement } from './Types';
import Hamburger from '../assets/hamburger-svgrepo-com.svg';

export function HamburgerIcon({ className }: CustomElement) {
  return <img className={className} src={Hamburger} />;
}
