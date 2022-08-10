// Array is collection of homogenius as well as Hetrogenius datatype
// Homohenius exampkle
var a= ['ajay','vijay','vinit','jayesh','mahesh'] //>>Array of string
var b =[10,25,14,12,14,1,] //array of number
var c=[true,false,true,true,false] //array of Boolean
var d=['ajay',10,true,'mahesh',14,'sagart',true] //>> hetrogenius datatype


// Example
var city=['mumbai','delhi','kolkata']
// It will give length of array
city.length
3
// It will print 1 index in city
city[1]
'delhi'
// It will push in city goa
// push always add the value at the end of array
city.push('goa')
city
(4) ['mumbai', 'delhi', 'kolkata', 'goa']
// unshift add at stating
city.unshift('assam')
city
(4) ['assam', 'mumbai', 'delhi', 'kolkata']
// Pop remove last sentence in array
city.pop()
'goa'
city
(3) ['mumbai', 'delhi', 'kolkata']
// shift remove first value
city.shift()
'mumbai'
city
(2) ['delhi', 'kolkata']


// splice method
// city.splice(startindex,deleteindex,add index)
city.splice(1,0,'ranchi')

city
(4) ['mumbai', 'ranchi', 'delhi', 'kolkata']

var city=['mumbai','delhi','kolkata','goa','banglore']
city.splice(1,2,'karnataka','kerla')
(2) ['delhi', 'kolkata']
city
(5) ['mumbai', 'karnataka', 'kerla', 'goa', 'banglore']

// it is method to find it is array or not
Array.isArray(city)
true