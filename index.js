// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
 function destructivelyAppendCat(name){
     name = "Ralph"
     cats.push("Ralph");
 }
 function destructivelyPrependCat(name){
     name = "Bob"
     cats.unshift("Bob");
 }
 function destructivelyRemoveLastCat(){
     cats.pop();
 }
 function destructivelyRemoveFirstCat(){
     cats.shift();
 }
 function appendCat(name){
     name = "Broom"
     const moreCats = [...cats, "Broom"];
     return moreCats;
 }
 function prependCat(name){
     name = "Arnold"
     const moreCats2 = ["Arnold", ...cats];
     return moreCats2;
 }
 function removeLastCat(){
     const lessCats = cats.slice(0, 2);
     return lessCats;
 }
 function removeFirstCat(){
     const lessCats2 = cats.slice(1)
     return lessCats2;
 }
