//Array name list

var array = ['Rossi' , 'Bianchi' , 'Verdi' , 'Tizio' ,  'Caio' , 'Duzioni', 'Balsano']

var list = [];

var index = 0 ;
//function for capitalize first letter of user input name;

function upperCaseFirstLetter(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//sorting function

function sortArray(){
  //populating new array;

  while( index < array.length){
    list.push(array[index]);
    index++
  }

  let userInput = document.querySelector('#nameinput');

  if (userInput.value != "") {
    let name = upperCaseFirstLetter(userInput.value);
    list.push(name);
    list.sort();
    userInput.value = "";
    console.log(list);
  }
}
