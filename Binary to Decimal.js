var binary_number = [1, 0, 0, 1, 1, 0, 1, 1]
var len = binary_number.length-1
var j = 1
var total = 0
for (let index = 0; index<binary_number.length ; index++) {
    if (binary_number[len] != 0){
        total=total+(binary_number[len]*j)
        j=j+j

    }else{
        j=j+j
    }
    
    len--
 
    
}
console.log(total)