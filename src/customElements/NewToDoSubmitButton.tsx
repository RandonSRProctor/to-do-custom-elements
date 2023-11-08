import { CustomElement } from './Types';

export function NewToDoSubmitButton({ children, className }: CustomElement) {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
}
