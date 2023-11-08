import { CustomElement } from './Types';

export function AppHeader({ children, className }: CustomElement) {
  return <div className={className}>{children}</div>;
}
