var student_marks = [23, 45, 67, 89, 90, 54, 34, 21, 34, 23, 19, 28, 10, 45, 86, 87, 9]
var list_length = (student_marks.length)
var index = 0
var less_than50 = 0
var more_than50 = 0
while (index < list_length){
	var marks = student_marks[index]
	if (marks < 50){
		less_than50 = less_than50 + 1
    }else{
		more_than50 = more_than50 + 1
    }
    index = index + 1
}
console.log( "Marks more than 50: ", (more_than50))
console.log( "Marks less than 50: ", (less_than50))