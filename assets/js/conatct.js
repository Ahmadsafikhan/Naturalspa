
window.onscroll=function(){
    myfunction()
};
var navbar = document.getElementById("mynavbar");
function myfunction(){
    if(window.pageYOffset>=100){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
}
