export class G964 {
    public static primeFactors = (n: number) => {
        let mymap: Map<number, number> = new Map<number, number>();

        while (n % 2 === 0) {
            if (!mymap.has(2)) mymap.set(2, 1);
            else mymap.set(2, (mymap.get(2) as number + 1));
            n >>= 1;
        }

        for (let i: number = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                if (!mymap.has(i)) mymap.set(i, 1);
                else mymap.set(i, mymap.get(i) as number + 1);
                n = Math.floor(n / i);
            }
        }

        if (n > 2) {
            mymap.set(n, 1);
        }

        let str: string = '';
        for (let kv of mymap) {
            if (kv[1] === 1)
                str += `(${kv[0]})`;
            else
                str += `(${kv[0]}**${kv[1]})`;
        }

        console.log(str);
        return str;
    }
}

G964.primeFactors(7775460);
G964.primeFactors(7919);
G964.primeFactors(17*17*93*677);