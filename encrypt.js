var readlineSync = require('readline-sync')

var alpha = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
var Sent = readlineSync.question("enput your sentence")
var sentence = Sent.toLowerCase();
var split=[]
for (let index = 0; index < sentence.length; index++) {
    split.push(sentence[index]);
    
}
var i=0
var sum_of_sentence=0
var string = ' '
var sentence_num = {}
var num=[]
while (i<split.length){
    if (split[i]==" "){

        sentence_num[sum_of_sentence]=string
        num.push(sum_of_sentence)
        string=' '
        sum_of_sentence = 0
        
    }else{
        sum_of_sentence = sum_of_sentence + (alpha[sentence[i]])
        string+=split[i]
    }

    i++
}
num.push(sum_of_sentence)
num.sort();
var list = []
sentence_num[sum_of_sentence]=string
var j=0
while (j<num.length){
    list.push(sentence_num[num[j]])
    j+=1
}
console.log(...list)
