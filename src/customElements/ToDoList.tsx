import { CustomElement } from './Types';

export function ToDoList({ children, className }: CustomElement) {
  return <div className={className}>{children}</div>;
}
