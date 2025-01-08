//navbar
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      navbar.classList.add('bg-black');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-black');
    }
  });


//arrow
var topArrow = document.querySelector('#scroll')

window.addEventListener('scroll' , function(){
    console.log(this.document.documentElement.scrollTop)
    if(this.document.documentElement.scrollTop > 190){
        topArrow.style.display= "block"
    }
    else  topArrow.style.display= "none"
})