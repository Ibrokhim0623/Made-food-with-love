let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 60){
        document.getElementById("scroll-top").classList.add("active");
    } else{
        document.getElementById("scroll-top").classList.remove("active");
    }
}

function loaded(){
    document.querySelector(".loader").classList.add("fade-top");
}
function fadeTop(){
    setInterval(loaded, 3000);
}

window.onload = fadeTop();