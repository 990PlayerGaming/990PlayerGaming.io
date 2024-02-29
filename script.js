
function CambiaTema(){
    if(document.getElementById("bg").style.backgroundColor != "white"){
        document.getElementById("bg").style.backgroundColor = "white"
        document.getElementsById("majoscritta").style.color = "black"
        
        
    }else{
        document.getElementById("bg").style.backgroundColor = "#1E2935"
    }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive")
  }

