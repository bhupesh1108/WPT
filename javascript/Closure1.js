function counterFactory(){
let cnt=0
function counter(){
cnt++
return cnt
}
return counter
}
let x=counterFactory()

console.log(x(),x(),x())
cnt=22
console.log(x(),x(),x())