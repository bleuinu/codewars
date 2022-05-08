export class Challenge {
    static solution(n: number) {
        const fact5: number = Math.floor((n - 1) / 5);
        const fact3: number = Math.floor((n - 1) / 3);
        const fact15: number = Math.floor((n - 1) / 15);

        const sum5: number = (5 * fact5 * (fact5 + 1)) / 2;
        const sum3: number = (3 * fact3 * (fact3 + 1)) / 2;
        const sum15: number = (15 * fact15 * (fact15 + 1)) / 2;

        return sum5 + sum3 - sum15;
    }
}