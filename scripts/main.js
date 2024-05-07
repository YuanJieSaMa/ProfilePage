let heading = document.querySelector("h1");
let newuser = document.querySelector("#user")
let whoami = document.querySelector("#whoami")
let Image = document.querySelector("img")
Image.onclick = function () {
    let Src = Image.getAttribute("src");
    if (Src === "./images/01.webp") {
        Image.setAttribute("src", "./images/02.webp");
    }
    else {
        Image.setAttribute("src", "./images/01.webp");
    }
};

function user() { 
    let username = prompt("Tell me your name");
    if (!username) { user(); }
    else {
        localStorage.setItem("name", username)
        heading.textContent = "Welcome to my page, " + username;
    }
}

if (!localStorage.getItem("name")) {
    user();
}
else {
    heading.textContent = "Welcome to my page, " + localStorage.getItem("name");
}

newuser.onclick = function () {
    user();
}

whoami.onclick = function () {
    alert("I am Kai/元解")
}
