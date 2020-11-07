let sayHello=function(name){
    console.log("greeting message to the "+name)
    console.log(`hey ${name}`)
} 
//sayHello('John')


let fullNameMaker=function(firstname,lastname){
    console.log('welcome')
    console.log(`happy to have you, ${firstname} ${lastname}`)
}
//fullNameMaker('john','doe')

let myAdder=function(num1,num2){
    let added=num1+num2
    return added

}
// let result=myAdder(3,5)
// console.log(result)

let myMultiplier=function(num1,num2){
   return  num1*num2

}
//console.log(myMultiplier(3,5))

let guestUser=function(name='unname',courrseCount=0){
    return 'Hello '+ name + ' and your course count is '+courrseCount
}
console.log(guestUser('john',1))


