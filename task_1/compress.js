let str1 = "a" // "a"
let srt2 = "aaa" // "a3"
let str3 = "aabbb" // "a2b3"
let str4 = "aaabcc" // "a3b1c2"
let str5 = "aaabccw" // "a3b1c2w1"

function compress(str) {
    let count = 1
    const tempArr = []
    const sourceArr = str.split('')

    if (sourceArr.length === 1) return str

    for (let i = 0; i < sourceArr.length - 1; i++) {
        let currentValue = sourceArr[i]
        let nextValue = sourceArr[i + 1]

        if (currentValue === nextValue) {
            if (i === sourceArr.length - 2) {
                tempArr.push(currentValue)
                tempArr.push(count + 1)
                break
            }
            count++
        } else {
            if (i === sourceArr.length - 2) {
                tempArr.push(nextValue)
                tempArr.push(1)
                break
            }
            tempArr.push(currentValue)
            tempArr.push(count)
            count = 1
        }
    }
    return tempArr.join('')
}

console.log(compress(str1))
console.log(compress(srt2))
console.log(compress(str3))
console.log(compress(str4))
console.log(compress(str5))
