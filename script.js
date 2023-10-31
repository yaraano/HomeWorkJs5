// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
//
// let arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.map(el => el * el))




// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let arr = [1, 2, 3, 0, 4, 5, 6]

// console.log(arr.every(el => el > 0))



// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
//
// let arr = [1, 2, 3, 0, 4, 5, 6]
//
// function myFunction(arr) {
//     if (arr.every(el => el >= 0)) {
//         return 'отрицательных чисел нету'
//     } else {
//         return 'отрицательные числа есть'
//     }
// }
// console.log(myFunction([1, 2, 3, 0, 4, 5, 6]))
// console.log(myFunction([1, 2, -3, 0, 4, -5, -6]))



// Дан массив с числами. Оставьте в нем только отрицательные числа.

// let arr = [1, 2, -3, 0, 4, 5, -6]
//
// console.log(arr.filter(el => el < 0))




// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun' ,'even']
// console.log(arr.filter(el => el.length > 5))
// console.log(arr.filter(el => el.length >= 5))




// Дан массив с числами. Оставьте в нем только четные числа.

// let arr =[1, -2, 3, 0, 4, -5, 6]
// console.log(arr.filter(el => el % 2 === 0))


// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let arr = [1,2, -3, 0, -4, 5, -6];
// console.log(arr.filter(el => el < 0).length)




// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// let arr1 = [1,2,3,4]
// let arr2 =  ['a','b','c','d']
// let a = arr1.push(...arr2)
// console.log(arr1)



// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']

// let arr = [2, 3, 4, 5]
// let str = 'hello world'
// let b = arr.push(...str.split('###'))
// console.log(arr)


// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']


// let arr = [2, 3, 4, 5]
// let str = 'hello world'
// let b = arr.push(...str.split(''))
// console.log(arr)


// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

//
// let arr1 = [2, 3, 4, 5]
// let str = 'hello world'
// let arr2 = str.split('')
// console.log([...arr1 , ...arr2  ,...arr1])
//
