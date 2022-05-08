export function positiveSum(arr:number[]):number {
    let sum: number = 0;
    arr.forEach((x) => {
      if(x>0) sum += x;
    })
    return sum;
  }