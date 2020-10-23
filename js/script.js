//Array name list

var arr = ['Rossi' , 'Bianchi' , 'Verdi' , 'Tizio' ,  'Caio' , 'Duzioni', 'Balsano']

//function for capitalize first letter of user input name;

function upperCaseFirstLetter(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//sorting function

function sortArray(){
  let startingArray = arr;
  let userInput = document.querySelector('#nameinput');
  if (userInput.value != "") {


  let name = upperCaseFirstLetter(userInput.value);

  arr.push(name);

  arr.sort();

  console.log(arr);

  userInput.value = "";
  console.log('starting' + startingArray);
  }
}
