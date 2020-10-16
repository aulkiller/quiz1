var i = 0;
var arr = [
    "url(../images/fakeBG.jpg)",
    "url(../images/3rd.jpg)",
    "url(../images/4th.jpg)",
    "url(../images/trueBG.jpg)",
];

const SwitchIMG = () => {
    const Event = document.querySelector('.Event');
    const Title = document.querySelector('.Title');
    const head = document.querySelector('header');

    //toggle
    Event.addEventListener('click', () =>{
        /*Alternative Method utilizing css and Randomizer */
        // Title.classList.toggle('Tittle-active');
        // head.classList.toggle('head-active');  
        // i = Math.floor((Math.random() * 3));
        if (i > 3){
            i=0;
            head.style.backgroundImage="none";
        } else {
            Title.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"+arr[i];
            head.style.backgroundImage="linear-gradient(rgba(255, 255, 255, 0.690), rgba(255, 255, 255, 0.690)),"+arr[i];
            i++;
        }
    });

}

SwitchIMG();