declare module 'next/image' {
  import * as React from 'react';
  const Image: React.ComponentType<any>;
  export default Image;
}

declare module 'next/navigation' {
  export function notFound(): void;
  export function redirect(to: string): void;
  export const useRouter: any;
}

declare module 'next' {
  export type Metadata = any;
}

declare module '*.css';

declare module 'next/link' {
  import * as React from 'react';
  const Link: React.ComponentType<any>;
  export default Link;
}
