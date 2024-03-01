
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

//Temi
const storageKey = 'theme-preference'

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

const reflectPreference = () => {
document.firstElementChild
    .setAttribute('data-theme', theme.value)

document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}