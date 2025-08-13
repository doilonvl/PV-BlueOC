function mostFrequent(arr: string[]): string[] {
    if (arr.length === 0) return [];

    const count: Record<number, number> = {};
    let maxFre = 0;

    for (const str of arr) {
        const len = str.length;
        const newCount = (count[len] || 0) + 1;
        count[len] = newCount;
        if (newCount > maxFre) maxFre = newCount;
    }

    return arr.filter(str => count[str.length] === maxFre);
}

console.log(mostFrequent(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
