const escola = "Cod3r"
console.log(escola.charAt(4)) //traz o valor da posição
console.log(escola.charAt(5)) //vai retornar vazio
console.log(escola.charCodeAt(3)) //retornar o valor na tabela ASCII

console.log(escola.indexOf('3')) //localizar  uma ocorrencia na estring
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"))

console.log(escola.replace(3, 'e'))

console.log('Ana,,Maria,Pedro'.split(','))