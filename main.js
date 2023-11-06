// 1) Напишите функцию JavaScript, которая принимает массив из списка названий стран в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.

// let arr = ["Россия", "Украина", "usa", "Германия", "Швеция"]

// const result = arr.reduce((acc, n) => {
//     if (acc.length < n.length) {
//         return n
//     }
//     return acc
// },'')

// console.log(result)

// 2) Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.

// const bank = 'alphabetical'


// function alphabetOrder(str) {
//     return str.split('').sort().join('')
// }

// console.log(alphabetOrder(bank))



// 3) Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// На выходе должно быть: [7,4,7,8]

// const vegetables = ['Капуста', 'Репа', 'Редискаaaa', 'Морковка']

// const result = vegetables.map((num) => num.length)

// console.log(result)

// 4) Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.

// function generateNumbers(start, len) {
//   const arr = []
//   for (let i = 0; i < len; i++) {
//     arr.push(i + start);
//   }
//   return arr;
// }

// console.log(generateNumbers(-9, 5));


//  Напишите функцию, которая возвращает новый объект без указанных значений.

const without = (object, ...args) => {
    
}