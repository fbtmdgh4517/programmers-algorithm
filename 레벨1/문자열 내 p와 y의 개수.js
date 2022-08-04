function solution(s) {
    let p = 0;
    let y = 0;
    const string = s.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'p') {
            p++;
        }
        if (string[i] === 'y') {
            y++;
        }
    }

    if (p === y) {
        return true;
    } else {
        return false;
    }
}
