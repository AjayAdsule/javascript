let city ="mumbAi"
// it will returmn in form of uppercase
city.toUpperCase()
'MUMBAI'
// it will returmn in form of lowercase
city.toLowerCase()
'mummbai'

city[4]
'A'
// the major diffrence betwwen #charat and #At is #charat does not support negative chararcter
city.charAt(1)
'u'
city.at(1)
'u'
city.charAt(-1)
''
city.at(-1)
'i'


let a="AJAY"
let b="ajay"
// for example you are trying to login in Email and you enter in all in upper case but
// you accecpt in lower the method is below
a.toLowerCase()==b.toLowerCase()
true
a.toUpperCase()==b.toLocaleUpperCase()
true

let c="ajay is devloper"
// slicing
c.length
16
c.slice(0,10)
'ajay is de'
c.slice(5,16)
'is devloper'
// if you want to first letter is uppercase or remaining in lowercase you can use this method
c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()
// console.log(c)
'Ajay is devloper'

let d=" ajay "
// you can remove start space and end space
d.trim()
'ajay'

// you can remove only start and end space 
d= " ajay ."
d.trim()
'ajay .'

// you can reomove all space below are syntax (/space/g,""this is nothing in paranthesis) 
d.replace(/ /g,"")
'ajay'

// you can also replace with the help of replaceall 
d.replaceAll(' ','')
'ajay.'


// Replace
var k="I am learning javascript"
k.replace("javascript","js")
'I am learning js'
// you can replace first existing character
var k=" javascript I am learning javascript"
k.replace("javascript","js")
'js I am learning javascript'
// you can replace all character through global replace the syntax is (/at starting)(/g at end)
k.replace(/javascript/g,"js")

// you can also use replaceall option
k.replaceAll('javascript','js')
' js I am learning js'