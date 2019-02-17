var btnAdd = document.getElementById('addBtn');
var inputText = document.getElementById('inputText');
var todoList = document.getElementById('todolist');
var pend = document.getElementById('pending_list');
var done = document.getElementById('done_list');
var count = 0;
var add = 0;



var newArr = [];


function addNewItem(list){
  var newlist = document.createElement('li');
    newlist.classList += "pending";
  var delBtn = document.createElement('button');
  var span = document.createElement('span');
  var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList += 'touch';

  delBtn.innerText = "X";
  newlist.innerText = inputText.value;
  if(inputText.value === undefined || inputText.value === " " || !inputText.value){
    return false;
  }
  list.appendChild(newlist);
  newlist.appendChild(span);
  newlist.appendChild(delBtn);
  newlist.appendChild(check);

  newArr.push(newlist)


  delBtn.onclick = function(){

    list.removeChild(newlist);
    if(check.checked === true){
      count--;
      done_list.innerText = count;
    } else{
      add--;
      pending_list.innerText = add;
    }
  }

  check.onclick = function(){

  if(check.checked === true){
    count++;
    done_list.innerText = count;
    add--;
    pending_list.innerText = add;
  } else{
    add++;
    pending_list.innerText = add;
    count--;
    done_list.innerText = count;
  }
}
}


function clickButton(){
  btnAdd.onclick = function(){
  addNewItem(todoList);
  add++;
  pending_list.innerText = add;


}
}

/*function update(){
var galbi = document.getElementsByClassName('pending').length;
pending_list.innerText = galbi;

}*/


function init(){
clickButton();

}

init();
