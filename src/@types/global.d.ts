declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.json';

declare module 'lightense-images' {
  function init(query: string): void
  export = init
}
