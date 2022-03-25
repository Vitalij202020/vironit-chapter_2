let sentence1 = "Пришла зима, запахло…" //7
let sentence2 = "Ghbdtn, z r dfv bp Hjccbb" //0
let sentence3 = "длинношеее" // 5

function countVowelLetters(str) {
    const arr = str.match(/[aeiouауоиэые]/gi)
    return arr ? arr.length : 0
}

console.log(countVowelLetters(sentence1))
console.log(countVowelLetters(sentence2))
console.log(countVowelLetters(sentence3))
