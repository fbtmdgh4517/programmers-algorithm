function solution(s) {
    const sArr = [];

    for (let i = 0; i < s.length; i++) {
        sArr.push(s[i]);
    }

    sArr.sort(function (a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
    });

    return sArr.join('');
}
