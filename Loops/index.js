console.log("I am tutorial on Loops");

// let a =1 ;
// for (let i = 0; i < 100; i++) {
//    console.log(a + i);
   
    
// }

// let obj = {
//     name:"Harshu",
//     role:"Developer",
//     company:"AI-Tech-tures"
    
// }
// for (const key in   obj) {
   
//         const element = obj[key];
        
//         console.log(key);
// }
// for (const c of "Harry") {
//     console.log(c);
    
// }

//  let i =0;
//  while(i<6){
//     console.log(i);
//     i++;
    
//  }
 let i =0;
 do{
    console.log(i);
    i++;
 }while(i<6)

// practice set 3
    //print marks of students in object using loop
    let obj ={
        harry:98,
        Rohan:70,
        akash:7

       
    }
    

    for (const marks in obj) {
        console.log(marks + " : "+ obj[marks]);
        
    }

    // 3

    let correctNo = 7;
    let guessNo;

    while(guessNo != correctNo){
        guessNo = prompt("Enter a No: ");

        if(guessNo!=correctNo){
            alert("Try Again");
    }
    }
    console.log("Welcome "+guessNo +" It is correct No");
    


        //4
        function mean_number(num1,num2,num3,num4,num5){
            return (num1+num2+num3+num4+num5)/2;
        }
     result =   mean_number(2,2,3,4,5);
     console.log("Result is " + result);
     