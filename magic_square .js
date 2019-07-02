var magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
]

var row = 0
var col = 0
var rightdiagonal = 0
var leftdiagonal = 0
// for row
for (let index = 0; index < magic_square.length; index++) {
    for (let index1 = 0; index1 < magic_square[index].length; index1++) {
        row=row+magic_square[index][index1]
    }
}
// for col
for (let index = 0; index < magic_square.length; index++) {
    for (let index1 = 0; index1 < magic_square[index].length; index1++) {
        sum=magic_square[index1][index]
        col=col+sum
    }
}
// for rightdiagonal
var j = 0
for (let index = 0; index < magic_square.length; index++) {
    rightdiagonal=rightdiagonal+magic_square[index][j]
    j++
}
// for leftdiagonal
j=2
for (let index = 0; index < magic_square.length; index++) {
    leftdiagonal=leftdiagonal+magic_square[index][j]
    j--    
}


if (nrow=== ncol && ncol===rightdiagonal && rightdiagonal===leftdiagonal) {

    console.log("This is magic square")    
} else {
    console.log("This is not magic square")
    
}
