export function positiveSum(arr: number[]): number {
  return arr.reduce((acc, x) => acc + (x > 0 ? x : 0), 0)
}