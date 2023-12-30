// // function printmyName(){
// // console.log("Hi My name is Saurabh");
// // }

// // function printMyAddress(printmyName){
// //     printmyName;
// // }

// // printMyAddress(printmyName())


// const arr = [2,6,9,1];

// function arraySum(arr){
//     let tsum =0;
//     arr.forEach(element => {
//         tsum+=element
//     });
//     return tsum
// }

// function evenOdd(num){
//     return num%2===0?"even":"odd";
// }

// console.log(arraySum(arr));
// console.log(evenOdd(78));

// console.log("sun of elements array is: " ,evenOdd(arraySum(arr)))
// // Array sum

// // summ even/odd


// // evenOdd(arraySum(arr))

// // /ternary operator

// // if( num%2===0){
// //     console.log("even");
// // }
// // else{
// //     console.log("odd");
// // }
// // ?
// let  num =2
// //
// console.log( num===5?"sahi hai":"galat hai");




// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });

//   console.log(myPromise);

const func3 = async()=>{
    let data = await fetch("https://api.github.com/users");
    console.log(data);
}

const func2 = ()=>{
 fetch("https://api.github.com/users")
    .then((response)=>{console.log(response.status);})
    .catch((err)=>{console.log(err.response.data);})
    .finally()
}

func2();


// hello
// err

//statusCode