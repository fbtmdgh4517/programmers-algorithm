function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    let arrW = [];
    let arrH = [];

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            let temp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
        arrW.push(sizes[i][0]);
        arrH.push(sizes[i][1]);
    }
    maxW = Math.max.apply(null, arrW);
    maxH = Math.max(...arrH);
    return maxW * maxH;
}
