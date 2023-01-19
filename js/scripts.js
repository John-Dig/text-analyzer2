//Business Logic
//let string = "this this this is a sample string string";
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