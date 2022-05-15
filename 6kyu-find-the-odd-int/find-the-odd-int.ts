export const findOdd = (xs: number[]): number => {
  let map: Map<number, number> = new Map<number, number>();
  let ans = 0;
  xs.forEach((x: number) => {
    if (map.has(x)) {
      map.set(x, (map.get(x) as number) + 1);
    } else {
      map.set(x, 1);
    }
  });

  map.forEach((v, k, map) => {
    if (v % 2 == 1) {
      ans = k;
    }
  });

  return ans;
};

/*
// One-liner!
export const findOdd = (xs: number[]): number => {
  return xs.reduce( (a,b)=> a^b);
};
*/

/*
// I like this one!
return xs.find(a => xs.filter(b => b === a).length % 2 === 1) || 0;
*/