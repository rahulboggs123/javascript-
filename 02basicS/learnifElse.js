/*if(true){
    console.log('i am inside if block')
    console.log('i am still in if block')

}else
{
    console.log("i am in else block")
}*/

var whoIsHere='user'
if(whoIsHere==='user'){
    console.log('Greeting message for user')
    console.log("allow access to view all courses")
}else if (whoIsHere==='teacher')
{
    console.log('Greeting message for teacher')
    console.log("allow access to his courses")
}else
{
console.log('Message:please verify your email')
console.log('send user an email for verification')
}


//grade problem
let grade=5
if (grade===10){
    console.log("amazing")

}else if(grade===5){
    console.log('good')

}else if(grade===3){
    console.log('poor')
}else{
    console.log('fail')
}