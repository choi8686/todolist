var btnAdd = document.getElementById('addBtn');
var inputText = document.getElementById('inputText');
var todoList = document.getElementById('todolist');
var pend = document.getElementById('pending_list');
var done = document.getElementById('done_list');
var count = 0; //done count;
var add = 0; // pending count;


//add new item in todolist.
function addNewItem(list){
  var newlist = document.createElement('li');
  //make a class because of font-size. in fact, not necessary.
      newlist.classList += "pend-ing";
  var delBtn = document.createElement('button');
      delBtn.classList += "delete";
      delBtn.innerText = "delete";
  var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      check.classList += 'touch';
  var label = document.createElement('label');
      label.classList += "through"

//for prevent add empty item in todolist.
  if(inputText.value === undefined || inputText.value === " " || !inputText.value){
    return false;
  }
//add in list with elements.
  label.innerText = inputText.value;
  list.appendChild(newlist);
  newlist.appendChild(delBtn);
  newlist.appendChild(check);
  newlist.appendChild(label);

//delete button.
  delBtn.onclick = function(){
    //remove item in todolist.
    list.removeChild(newlist);
    //if checkbox is checked and deleted, done count will decrease.
    if(check.checked === true){
      count--;
      done_list.innerText = count;
    }
    //if checkbox isn't checked, pending count will decrease.
    else{
      add--;
      pending_list.innerText = add;
    }
  }

//checkbox button.
  check.onclick = function(){
  //checked means goal a todo, so increase done count and decrease pending count.
  if(check.checked === true){
    count++;
    done_list.innerText = count;
    add--;
    pending_list.innerText = add;
  }
//when you cancel checked, back to before.
  else{
    add++;
    pending_list.innerText = add;
    count--;
    done_list.innerText = count;
  }

}
}

//add button.
function clickButton(){
  btnAdd.onclick = function(){
    //prevent count 'pending count' if you are not write in textbox.
    if(inputText.value === ""){
        pending_list.innerText = add;
    }
    //when you write item in textbox.
    else{
      addNewItem(todoList);
    //reset textbox.
      inputText.value = "";
      add++;
      pending_list.innerText = add;
    }
}
}
clickButton();

/*tried another way to count and update in display.

function update(){
var galbi = document.getElementsByClassName('pending').length;
pending_list.innerText = galbi;
}

*/
