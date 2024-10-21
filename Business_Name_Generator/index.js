/*
create a business name generator by combining list of adjectives and shop name and another word
 Adjectives:
 Crazy
 Amazing
 Fire

 Shop Name:
 Engine
 Foods
 Garments

 Another Word:
 Bros
 Limited
 Hub




/*
Create a business name generator by combining list of adjectives and shop name and another word
 Adjectives:
 Crazy
 Amazing
 Fire

 Shop Name:
 Engine
 Foods
 Garments

 Another Word:
 Bros
 Limited
 Hub using functions and strings in js
 */

let random = Math.random();
let first,second,third;

if(random<0.33){
    first = "Crazy";
}
else if(random<0.66 && random>=0.33){
    first="Awesome";
}
else{
    first="Fire";
}

//
if(random<0.33){
    second = "Engine";
}
else if(random<0.66 && random>=0.33){
    second="Foods";
}
else{
    second="Garments";
}

if(random<0.33){
    third = "Bros";
}
else if(random<0.66 && random>=0.33){
    third=" Limited";
}
else{
    third=" Hub";
}

console.log(`Your business name is ${first} ${second} ${third}`);


 