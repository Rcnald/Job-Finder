const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('header nav ul');

const body = document.querySelector('body');

mobileMenu.addEventListener('click', toggleMobileMenu);


function toggleMobileMenu(){
    navMenu.classList.toggle('active');
    setInterval(screenWidth, 200)
}

function screenWidth(){
    let widthScreen = body.offsetWidth;
    let heightScreen = body.offsetHeight;
    
    if(widthScreen <= 1100 && mobileMenu.nextElementSibling !== null){
        navMenu.style.height = heightScreen + "px"
    }else if(widthScreen > 1100 && (navMenu.getAttribute('class') == 'active')){
        navMenu.classList.remove('active');
        navMenu.style.height = "auto"
    }else{
        navMenu.style.height = "auto"
    }

}
document.onkeydown = function(event){
if(event.key === 'Escape' && (navMenu.getAttribute('class') == 'active')){
        navMenu.classList.remove('active');
        console.log(event.key)
    }
}