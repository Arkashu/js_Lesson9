// Task#1
// let arr = [ 1, 2, 3];
// let arr2 = [4, 5, 6];
//  arr = arr.concat(arr2);
// console.log(arr)

//Task#2
// let arr = [ 1, 2, 3];
// arr.reverse();
// console.log(arr)

//Task#3
// let arr = [ 1, 2, 3];
// arr.push(3, 5, 6);
// console.log(arr)

//Task#4
// let arr = [ 1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr)

//Task#5
// let arr = ['js', 'css', 'jq'];
// console.log(arr[0])


//Task#6
// let arr = ['js', 'css', 'jq'];
// console.log(arr[arr.length-1])

//Task#7
// let arr = [1, 2, 3, 4, 5];
// let arrSL= arr.slice(0,3)
// console.log(arrSL)

//Task#8
// let arr = [1, 2, 3, 4, 5];
// let arrSL= arr.slice(3,5)
// console.log(arrSL)

//Task#9
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2)
// console.log(arr)

//Task#10
// let arr = [1, 2, 3, 4, 5];
// let arrSl = arr.slice(1,4);
// console.log(arrSl);


//Task#11
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//Task#12
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8,0, 'e')
// console.log(arr)

//Task13
// let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort())

//Task14
// let arr = [5, 6, 7, 8, 9]
// let result = 0;
// for (let i = 0; i <= arr.length-1; i++) {
//     result += arr[i];
// }
// console.log(result)

//Task15
// let arr = [5, 6, 7, 8, 9];
// let arrResult = [];
// for (let i = 0; i <= arr.length-1; i++) {
//     arr[i] = Math.pow(arr[i], 2);
//     arrResult[i] = arr[i]
// }
// console.log(arrResult)

//Task#16
// let arr = [1,-3, 5, 6,-7, 8, 9,-11];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0)
//         arr.splice(i, 1)
// }
// console.log(arr);

//Task17
// let arr = [1,-3, 5, 6,-7, 8, 9,-11];
// for (let i = arr.length-1; i >= 0 ; i--) {
//     if (arr[i] % 2 !== 0)
//         arr.splice(i, 1)
//  }
// console.log(arr)

//Task#18
// let arr =['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// for (let i = arr.length-1; i >= 0 ; i--) {
//     if (arr[i].length <6)
//         arr.splice(i, 1)
// }
// console.log(arr)