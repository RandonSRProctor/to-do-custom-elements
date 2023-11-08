import { CustomElement } from './Types';

export function Gutter({ children, className }: CustomElement) {
  return <div className={className}>{children}</div>;
}
