// Atividade 01 - 16/08/22
// - Crie um array com 100 numeros gerados aleatoriamente.
// - Insira mais 10 numeros no incio do array. ( um de cada vez)
// - Crue um 2 array com 50 numeros aleatorios.
// - Remova os 5 ultimos numeros desse array (um de cada vez)
// - Remova os numeros que estao entre as posiçoes de 10 e 20 desse array.
// - junte os 2 arrays anteriores
// - Faça com que cada elemento desse array resultante seja somado e 1 unidade.
// -  Crie um novo array apenas com os elementos pares do array anterior.
// - Crie um novo arrray apenas com os novos elementos pares do array anterior.
// -  Exiba a soma dos elementos do arrray de numeros pares (usar reduce)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(nElementos,max,min){
    return [...new Array(nElements)]
        

}

let array1 = [];
for (let i = 0 ; i < 100; i++){
  array1.push(getRandom(1,100));
}

console.log(array1);

// Adicionando +5
for (let i = 0 ; i < 5; i++){
    array1.unshift(getRandom(1,100));;
  }


console.log(array1)

let array2 = [];
for (let i = 0 ; i < 50; i++){
  array1.push(getRandom(1,100));
}

console.log(array2);


// Resolução do professor 

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateArray = (nElements, min, max) => {
  return [...new Array(nElements)]
  .map(() => randomInteger(min, max))
}


const a1 = generateArray(100, 0, 100)

console.log('Crie um array com 100 números gerados aleatoriamente (inteiros)')
console.log(a1, a1.length)

for (let index = 0; index < 10; index++) {
  const n = randomInteger(0, 100)
  a1.unshift(n)
}

console.log('Insira mais 10 números no início do array (um de cada vez)')
console.log(a1, a1.length)
  
const a2 = generateArray(50, 0, 100)

console.log('Crie um segundo array com 50 números aleatórios (inteiros)')
console.log(a2, a2.length)

for (let index = 0; index < 5; index++) {
  a2.pop()
}

console.log('Remova os 5 últimos números desse array (um de cada vez)')
console.log(a2, a2.length)
a2.splice(9, 11)

console.log('Remova os números que estão entre as posições 10 e 20 do array')
console.log(a2, a2.length)

const a3 = a1.concat(a2)
  console.log('Junte os 2 arrays anteriores')
  console.log(a3, a3.length)
  const a4 = a3.map(n => n + 1)
  console.log('Faça com que cada número desse array resultante seja somado em 1 unidade')
  console.log(a4, a4.length)
  const a5 = a4.filter(n => n % 2 == 0)
  console.log('Crie um novo array apenas com os números pares do array anterior')
  console.log(a5, a5.length)
  const sum = a5.reduce((prev, current) => prev + current, 0)
  console.log('Exiba a soma dos números contidos no array anterior de números pares (usar
  reduce)')
  console.log(sum)