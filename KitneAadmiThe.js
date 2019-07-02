var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var all_num_sum = 0
var all_num_count =0
var all_num_avg = 0
var odd_sum = 0
var even_sum = 0
var odd_count = 0
var even_count = 0
for (let index = 0; index < elements.length; index++) {
    if (elements[index]%2===0) {
        even_count++
        even_sum=even_sum+elements[index]
        var even_avg = even_sum/even_count
        all_num_sum+=elements[index]
        all_num_count++
        
    } else {
        odd_count++
        odd_sum=odd_sum+elements[index]
        var odd_avg = odd_sum/odd_count
        all_num_sum+=elements[index]
        all_num_count++
    }
    
}
all_num_avg=all_num_sum/all_num_count
console.log(odd_avg,"odd avg")
console.log(even_avg,"even avg")
console.log(all_num_count,"all count")
console.log(all_num_sum,"all sum")
console.log(all_num_avg,"all avg")