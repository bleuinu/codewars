export function isIsogram(str: string): boolean {
    let freq: Array<boolean> = new Array<boolean>(26).fill(false);
    for(let i: number = 0; i<str.length; i+=1) {
      let index: number = (str[i].toLowerCase().charCodeAt(0)) - 97;
      if(freq[index] == true) return false;
      freq[index] = true;
    }
    return true;
  }