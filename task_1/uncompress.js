let str1 = "a" // "a"
let srt2 = "a5" // "aaaaa"
let str3 = "a2b3c7" // "aabbb"
let str4 = "a24b12c12" //

function uncompress(str) {
    let count = [0]
    let currentValue = []
    const tempArr = []
    const sourceArr = str.split('')

    if (sourceArr.length === 1) return str

    for (let i = 0; i < sourceArr.length; i++) {
        if (isNaN(sourceArr[+i])) {
            currentValue[0] = sourceArr[i]
        } else {
            if (!isNaN(sourceArr[i + 1])) {
                count[0] += sourceArr[i]
            } else {
                count[0] += sourceArr[i]
                for (let j = 0; j < +count[0]; j++) {
                    tempArr.push(currentValue[0])
                }
                count[0] = 0
            }
        }
    }
    return tempArr.join('')
}

console.log(uncompress(str1))
console.log(uncompress(srt2))
console.log(uncompress(str3))
console.log(uncompress(str4))
