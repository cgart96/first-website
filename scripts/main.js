let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bill-Cosby-625x302.jpg') {
      myImage.setAttribute ('src','images/bill-cosby-behind-bars.jpg');
    } else {
      myImage.setAttribute ('src','images/Bill-Cosby-625x302.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Billy C is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Billy C is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }