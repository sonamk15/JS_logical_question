
var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
var len = n.length
var new_list = []
for (let index = 0; index < len; index++) {
   for (let index1 = 0; index1 < len; index1++) {
       sum = (n[index]+n[index1])
        if (sum===number) {
            new_list.push([n[index],n[index1]])
            delete n[index];
        }
    }
}
console.log(new_list)
