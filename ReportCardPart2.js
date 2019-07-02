
var  marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]]
var total = 0
for (let index = 0; index < marks.length; index++) {
    var len = marks[index].length
    for (let index1 = 0; index1 < marks[index].length; index1++) {
        total=total+(marks[index][index1])
        
    }
    console.log(Math(total/len))
    total = 0
    
}
// console.log(total)