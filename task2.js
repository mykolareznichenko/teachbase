//Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

function compareArrays(arr1, arr2) {
   for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      console.log(arr1[i] === arr2[i])
   }
}

compareArrays([1, 2, 3], [1, 2, 3])
console.log("=================")

compareArrays([1, 2, 4], [1, 2, 3])
console.log("=================")

compareArrays([1, 2, 3, 4], [1, 2, 3])
console.log("=================")

compareArrays([1, 2, 3], [1, 2, 3, 4])
console.log("=================")