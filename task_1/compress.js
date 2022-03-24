let str1 = "a" // "a"
let srt2 = "aaa" // "a3"
let str3 = "aabbb" // "a2b3"
let str4 = "aaabcc" // "a3b1c2"

function compress(str) {
    let count = 1
    let result
    const tempArr = []
    const sourceArr = str.split('')

    if (sourceArr.length === 1) return str

    for (let i = 0; i < sourceArr.length; i++) {
        let currentValue = sourceArr[i]
        let nextValue = sourceArr[i + 1]

        if (currentValue === nextValue && i !== sourceArr.length - 1) {
            count++
        } else {
            if (i === sourceArr.length - 1 ) {

            } else {
                tempArr.push(currentValue)
                tempArr.push(count)
                count = 1
            }
        }
    }
    result = tempArr.join('')
    console.log(sourceArr)
    return result
}

console.log(compress(str1))
console.log(compress(srt2))
console.log(compress(str3))
console.log(compress(str4))