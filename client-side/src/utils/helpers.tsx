export const sum = (a: number, b: number): number => a + b;


export const delay = (ms: number) => {
  return new Promise<void>((r) => setTimeout(() => r(), ms));
};