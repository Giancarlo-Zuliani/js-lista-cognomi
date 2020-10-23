
//Array name list
var array = ['Rossi' , 'Bianchi' , 'Verdi' , 'Tizio' ,  'Caio' , 'Duzioni', 'Balsano']
var list = [];
//index
var index = 0 ;

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
    //sort;
    list.sort();
    //clear textfield;
    userInput.value = "";
    //clear list;
    let unorderedList = document.getElementById('list');
    //find index number of new string;
    let position = list.indexOf(name) + 1 ;
    document.getElementById('position').innerHTML = position;
    //while cicle for print out list item;
    unorderedList.innerHTML = "";
    while(index < list.length){
      unorderedList.innerHTML += "<li>" + list[index] + "</li>";
      index++;
    }
  }
};
