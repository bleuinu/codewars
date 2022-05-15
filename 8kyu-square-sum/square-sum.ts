export function squareSum(numbers: number[]): number {
    return numbers.map((x) => x*x).reduce((t, x) => t+x, 0);
}