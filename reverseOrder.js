var places=["delhi", "gujrat", "rajasthan", "punjab", "kerala"]
var len = places.length-1
var rev = []
for (let index = 0; index < places.length; index++) {
    rev.push(places[len])
    len--
}
console.log(rev)