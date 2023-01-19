//Business Logic
let string = "this this this is a sample string string";
function wordCounter(string){
let stringArray = string.split(" ");
let wordArray = [];
let nbr = 1;
stringArray.forEach(function(el) {
  stringArray.forEach(function(el2){ 
    if(el === el2){
      wordArray.push(el);
      wordArray.push(nbr);
      nbr ++
    }
    else
      wordArray.push(el)
      nbr 
  });
});
return wordArray;
}

//new code
function wordCounter(text){
  let textArray = text.split(" ");
  let newArray = [];
  let p = 0;
  textArray.foreach(function(el) {
    if(newArray.find(el) = false){
      newArray.push(el);
      newArray.push(1);
    } 
    else {
      p = newArray.findIndex(el);
      newArray[p + 1] = + 1;
    }
    console.log(newArray);
  });
}