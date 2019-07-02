var array=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var count = 0
for (let index = 0; index < array.length; index++) {
    if (20<array[index] && array[index]<40) {
        count+=1
    }
}
console.log(count)