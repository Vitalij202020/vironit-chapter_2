let str1 = "a" // "a"
let srt2 = "a5" // "aaaaa"
let str3 = "a2b3" // aabbb
let str4 = "a2b1c3" // "aabccc"

// function uncompress(str) {
//     let count = [0]
//     let currentValue = []
//     const tempArr = []
//     const sourceArr = str.split('')
//
//     if (sourceArr.length === 1) return str
//
//     for (let i = 0; i < sourceArr.length; i++) {
//         if (isNaN(sourceArr[+i])) {
//             currentValue[0] = sourceArr[i]
//         } else {
//             if (!isNaN(sourceArr[i + 1])) {
//                 count[0] += sourceArr[i]
//             } else {
//                 count[0] += sourceArr[i]
//                 for (let j = 0; j < +count[0]; j++) {
//                     tempArr.push(currentValue[0])
//                 }
//                 count[0] = 0
//             }
//         }
//     }
//     return tempArr.join('')
// }


// replace more easy way
function uncompress(str) {
    if (str.length === 1) return str
    const regex = /[a-z][1-9]/g;
    const temp = str.match(regex)

    const result = temp.map((item) => {
        let value = item[0]
        let count = +item[1]
        let strResult = ''

        while (count > 0) {
            strResult += value
            count--
        }
        return strResult
    })
    return result.join('')
}

console.log(uncompress(str1))
console.log(uncompress(srt2))
console.log(uncompress(str3))
console.log(uncompress(str4))
