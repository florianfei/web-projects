var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h4');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Longzhu-Logo.png') {
      myImage.setAttribute ('src','images/IM_Logo.png');
    } else {
      myImage.setAttribute ('src','images/Longzhu-Logo.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to this testpage, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to this testpage, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}