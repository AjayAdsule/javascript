//var a={}  //we can define object in curly bracket
var b=[]  //we can define array in square  bracket


var a={
    name:"ajay",
    age:"22",
    education:"B.com",
}
a.name
'ajay'
a.age
'22'
//we can add more property with the help of below syntax 
a.course="full stack"
'full stack'
a
{name: 'ajay', age: '22', education: 'B.com', course: 'full stack'}

//if ypui want to print only key
for (key in a){
    console.log(key)
}
name
age
education
course

//if you want to print only value
for (key in a){
    console.log(a[key])
ajay
22
B.com
full stack


//json= javascript object natation
//way to represent the data

var movie=[
    {
        'name':'avenger',
        'rating':'4.5',
        'date':'26'
    },
    {
        'name':'Thor',
        'rating':'4.4',
        'date':'28'
    }
]
for (data of movie){
    console.log(data.name)
}
avenger
Thor