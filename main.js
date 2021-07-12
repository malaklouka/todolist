let inputs=document.getElementById('myInput')
console.log(inputs)
var i;
let lists=document.getElementById('listtodo')
console.log(lists)
mylists=document.getElementsByClassName('mylist')
let adds=document.getElementById('addBtn')
adds.addEventListener('click',function(){
  var t1=document.createTextNode(inputs.value); /*create the new elmnt */
  t1.innerText=inputs.Value;

  if (inputs.value === '') { /*vide*/
    alert("nothing to add");
  } else {
    inputs.value = "";/*clear inputs */

    lists.appendChild(t1);
    
let delButton = document.createElement("button");
delButton.innerHTML = '<i class="fa fa-trash"></i>';
delButton.classList.add("delButton");
console.log(delButton)
lists.appendChild(delButton);
  //APPEND TO LIST

  let dels=document.querySelectorAll('.delButton')
console.log(dels)
  for (const del of dels) {
      del.addEventListener('click',function () {
    dels.previousSibling.remove()
  
      })}

  }

})










/*
mylists=document.getElementsByClassName("mylist")
console.log(mylists)

















  /*delete added

let dels=document.querySelectorAll('.delete-btn')
for (const del of dels) {
    del.addEventListener('click',function () {
  del.parentNode.parentNode.parentNode.remove()
  
    })
}

*/

/*

let adds=document.querySelector("addlist")
let btns = document.getElementsByClassName("todo")


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/












/*
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/