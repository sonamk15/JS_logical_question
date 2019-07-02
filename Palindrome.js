var name=[ 'n', 'i', 't', 'i', 'n' ]
var len = name.length-1
for (let index = 0; index < name.length; index++) {
    if (name[index]!=name[len]) {
        result = ("Palindrome nahi hai")
        break
    }else{
        result = ("Palindrome hai")

    }
    len--
}
console.log(result)