const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    
    if (mySrc === "./images/firefox icon.png") {
        myImage.setAttribute("src", "./images/fireFox2.png")
    }else{
        myImage.setAttribute("src", "./images/firefox icon.png")
    }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `fire fox the engine for searching the world, ${myName}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `fire fox the engine for searching the world, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  