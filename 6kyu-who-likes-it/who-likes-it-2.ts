export const likes = (a: string[]): string => {
    return {
        0: `no one likes this`,
        1: `${a[0]} likes this`,
        2: `${a[0]} and ${a[1]} like this`,
        3: `${a[0]}, ${a[1]} and ${a[2]} like this`,
        4: `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
    }[Math.min(4, a.length)] as string;
}