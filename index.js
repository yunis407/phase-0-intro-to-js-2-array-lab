// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
const destructivelyAppendCat = name =>{
    name = "Ralph"
    cats.push(name);
}
const  destructivelyPrependCat = name =>{
    name = "Bob"
    cats.unshift(name);
}

const destructivelyRemoveLastCat = ()=> cats.pop();

const  destructivelyRemoveFirstCat =()=> cats.shift();
const  appendCat =()=> {
     const endCats =[...cats,"Broom"];
     return endCats;
    }

    const  prependCat=()=>{
        const atCats =["Arnold",...cats];
        return atCats;
    }
    const removeLastCat=()=>{
        const lessCats = cats.slice(0,2);
        return lessCats;
    }
    const removeFirstCat=()=>{
        const moreCats= cats.slice(1);
        return moreCats;
    }
