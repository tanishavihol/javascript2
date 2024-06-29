// function getcheese(){
//     setTimeout(()=>{
//     const cheese='ch1';
//    return cheese;
//   },2000)
// }
const ticket=new Promise(function(resolve,reject){
const isBoarded=true;
if(isBoarded){
    resolve('you are not in the flight')
   }
   else{
    reject("your flight has been cancelled")
   }
})
   ticket.then((data)=>{
 console.log('wohoo',data);
})
   .catch((data)=>{
console.log("oh no",data);
});

