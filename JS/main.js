const navSlide = () => {
    const menubtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-items');
    const navbar = document.querySelector('header');
    const navitems = document.querySelectorAll('.nav-items li')

    //Navtoggle
    menubtn.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        navbar.classList.toggle('nav-test');

        //animasi persatuan
        navitems.forEach((items,index) => {
            if(items.style.animation){
                items.style.animation = '';
            } else {
                items.style.animation = `navitemsFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

}

const SwitchIMG = () => {
    const Event = document.querySelector('.Event');
    const Title = document.querySelector('.Title');
    const head = document.querySelector('header');

    //toggle
    Event.addEventListener('click', () =>{
        Title.classList.toggle('Tittle-active');
        head.classList.toggle('head-active');       
    });

}

navSlide();
SwitchIMG();

