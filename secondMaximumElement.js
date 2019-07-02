var array = [50, 40, 23, 70,59, 56, 12, 5, 10, 7]
var max = 0
var sec_max = 0
for (let index = 0; index < array.length; index++) {
    if (array[index]>max) {
       max = array[index]
    }
}
for (let index = 0; index < array.length; index++) {
    if (array[index]<max && sec_max<array[index] ) {
       sec_max = array[index]
    }
}

console.log(max)
console.log(sec_max)