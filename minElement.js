var array = [50, 40, 23, 70, 2, 56, 12, 5, 10, 7]
var min = array[0];
for (let i=0; i<array.length; i++){
    if (array[i]<min){
        min = array[i]
    }
}
console.log(min)