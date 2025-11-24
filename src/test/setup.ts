import '@testing-library/jest-dom'

// Polyfill for global
declare const global: typeof globalThis;
if (typeof global === 'undefined') {
  Object.assign(globalThis, { global: globalThis });
}