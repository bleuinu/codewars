export class Challenge {
    static solution(n: number) {
        let sum: number = 0;

        for (let i: number = 3; i < n; ++i) {
            if (i % 3 === 0 || i % 5 === 0) sum += i;
        }

        return sum;
    }
}