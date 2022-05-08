export function dirReduc(arr: string[]): string[] {
  if (arr.length <= 1) return arr;

  let ans: string[] = [arr[0]];

  for (let i: number = 1; i < arr.length; ++i) {
    if (ans.length == 0) {
      ans.push(arr[i]);
    } else {
      switch (arr[i]) {
        case "NORTH":
          if (ans[ans.length - 1] === "SOUTH") ans.pop();
          else ans.push(arr[i]);
          break;
        case "SOUTH":
          if (ans[ans.length - 1] === "NORTH") ans.pop();
          else ans.push(arr[i]);
          break;
        case "EAST":
          if (ans[ans.length - 1] === "WEST") ans.pop();
          else ans.push(arr[i]);
          break;
        case "WEST":
          if (ans[ans.length - 1] === "EAST") ans.pop();
          else ans.push(arr[i]);
          break;
      }
    }
  }
  
  return ans;
}