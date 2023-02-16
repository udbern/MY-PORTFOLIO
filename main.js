
const hamburger = document.querySelector("#hamburger")
const Menu = document.querySelector("#Menu")


hamburger.addEventListener("click", ()=>{
  Menu.classList.toggle("hidden")
  
})

Menu.addEventListener("click", ()=>{
  Menu.classList.toggle("hidden")
  
 
})






document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    })
  })
}) 


ScrollReveal().reveal('.headline');
