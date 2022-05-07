// https://mathworld.wolfram.com/DigitalRoot.html

export function digitalRoot(n: number): number {
    return (n - 1) % 9 + 1;
}