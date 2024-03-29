//Make the DIV element draggagle:
dragElement(document.getElementById("box"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



var upkey = document.querySelector('.fa-caret-up');
var downkey = document.querySelector('.fa-caret-down');
var leftkey = document.querySelector('.fa-caret-left');
var rightkey = document.querySelector('.fa-caret-right');

upkey.addEventListener('click', function () {

  var target = this.parentNode;
  var curTop = getComputedStyle(target).top;
  var newTop = parseInt(curTop) - 10 + 'px';
  target.style.top = newTop;

})

downkey.addEventListener('click', function () {

  var target = this.parentNode;
  var curTop = getComputedStyle(target).top;
  var newTop = parseInt(curTop) + 10 + 'px';
  target.style.top = newTop;

})

leftkey.addEventListener('click', function () {

  var target = this.parentNode;
  var curTop = getComputedStyle(target).left;
  var newTop = parseInt(curTop) - 10 + 'px';
  target.style.left = newTop;

})

rightkey.addEventListener('click', function () {

  var target = this.parentNode;
  var curTop = getComputedStyle(target).left;
  var newTop = parseInt(curTop) + 10 + 'px';
  target.style.left = newTop;

})

// Drag and drop part

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

//drag and drop part

var minimize = document.querySelector('.fa-minus');

minimize.addEventListener('click', function () {

  var target = this.parentNode;
  var min = getComputedStyle(target).height;
  // var newTop = parseInt(min) - 280 + 'px';
  target.style.height = 5 + '%';
  target.querySelector('.view').style.display='none';
  target.querySelector('.view').style.background;
  target.style.background = 'silver';
  // debugger;
})

var maximize = document.querySelector('.fa-window-maximize');
maximize.addEventListener('click', function () {
  var target = this.parentNode;
  var max = getComputedStyle(target).height;
  target.style.height = 100 + '%';
  var maximize = getComputedStyle(target).width;
  target.style.width = 100 + '%';
  target.style.top=0;
  target.style.left=0;
  target.style.background = 'linear-gradient(to right, #81d8f6 , #2867be)';
  target.querySelector('.view').style.display='block';

})

var cross = document.querySelector('.fa-window-close');

cross.addEventListener('click', function () {

  var target = this.parentNode;
  var del = getComputedStyle(target).display;
  target.style.display = "none";
})
