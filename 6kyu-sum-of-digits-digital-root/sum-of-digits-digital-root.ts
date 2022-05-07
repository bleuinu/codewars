export const digitalRoot = (n: number): number => {
    if (n < 10) return n;

    let sum: number = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return digitalRoot(sum);
};