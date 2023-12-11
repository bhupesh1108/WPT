let arr=[1,2,3,4,5]
arr.push(10,11,12)//for adding element
arr.pop()
console.log(arr)
console.log(arr.pop())//for retrival of top element
console.log(arr.splice(0,2));//for retrival  (n,m) from nth element to m no of element 
arr.splice(1,0,22,23,24)// for adding element after 1st positon as m 0 so it dont remove any element
console.log(arr)