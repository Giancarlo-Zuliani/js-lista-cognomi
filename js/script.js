
//Array name list
var array = ['Rossi' , 'Bianchi' , 'Verdi' , 'Tizio' ,  'Caio' , 'Duzioni', 'Balsano']
var list = [];
//index
var index = 0 ;
var display = false;

//function for capitalize first letter of user input name;
function upperCaseFirstLetter(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//populating the new array;
while( index < array.length){
  list.push(array[index]);
  index++;
};

//sorting function;
function sortArray(){
  //reset index;
  index=0;

  let userInput = document.querySelector('#nameinput');

  //check if textfield is empty;
  if (userInput.value != "") {
    let name = upperCaseFirstLetter(userInput.value);

    //insert the new string into array
    list.push(name);
    array.push(name);
    list.sort();
    //clear textfield
    userInput.value = "";

    //find index number of new string;
    let uList = document.getElementById('list');
    uList.innerHTML = "";
    let position = list.indexOf(name) + 1 ;
    document.getElementById('orderednum').innerHTML = position;

    //while cicle for print out list item;
    while(index < list.length){
      uList.innerHTML += "<li>" + list[index] + "</li>";
      index++;
    }

    index=0;
    ul = document.getElementById('unlist');
    ul.innerHTML ="";

    while(index < array.length){
      ul.innerHTML += "<li>" + array[index] + "</li>";
      index++;
    }

    if(!display){
      appear()
      display = true;
    }

    document.getElementById('unorderednum').innerHTML = array.length  ;
  }
};

function appear(){
  document.querySelector('aside').classList.toggle('show');
}
