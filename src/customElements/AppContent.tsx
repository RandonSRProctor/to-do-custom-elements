import { CustomElement } from './Types';

export function AppContent({ children, className }: CustomElement) {
  return <div className={className}>{children}</div>;
}
