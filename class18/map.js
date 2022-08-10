// map is use to iterate over the array of element
// it always return the same length of output as input array
// it is use to apply the logics(aad, sub,multiple)


var a=[10,32,21485,45,4,985,4,476,465,015,4,5,8,]
a.map((data)=>{return data*2})
console.log(a.map)



// Filter is use to filter out the data
// it may or may not return the same length of output as input Array
// filter only return those data for which output and condition is true

var a=[10,32,21485,45,4,985,4,476,465,015,4,0,5,8,]
a.filter((data)=>{return data*2})
(13) [10, 32, 21485, 45, 4, 985, 4, 476, 465, 13, 4, 5, 8]

// In this condition we add 0 
// 0 except are condition are true 
var a=[10,32,21485,45,4,985,4,476,465,015,4,0,5,8,]
a.filter((data)=>{return data*2})
(13) [10, 32, 21485, 45, 4, 985, 4, 476, 465, 13, 4, 5, 8]