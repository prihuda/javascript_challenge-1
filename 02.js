const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

const y = [...first, ...second, ...third]
y.join("")
const x = y.toString()
const result = x.replace(/,/g, " ")
console.log(result)