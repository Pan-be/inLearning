const permutation = (letter) => {
    let word
    for (let i = 1; i <= letter.length; i++) {
        if (!word) {
            word = i
            continue
        }
        word *= i
    }

    return word

}

console.log(permutation("hello"));