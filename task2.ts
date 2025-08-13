function sumTopTwo(arr: number[]): number {
    if (arr.length < 2) throw new Error("At least 2 elements");
    let max1 = -Infinity;
    let max2 = -Infinity;

    for (const num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 + max2;
}

console.log(sumTopTwo([1, 4, 2, 3, 5]));
