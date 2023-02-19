const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//=============================================================//


//==============================================================================================//
function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add("scale-up-ver-center");
        }
    });
}


function onAnchor(entry){
   
        if(entry.isIntersecting){
            change.target.classList.add(".anchor_animation");
        
    };
}

let options = {
    threshold:[0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elementsTop = document.querySelectorAll(".scale_top");
let elementsBottom = document.querySelectorAll(".scale_card");
let anchorBtn = document.querySelector('.anchor');
let anchorObserver = new IntersectionObserver(onAnchor, options);

anchorObserver.observe(anchorBtn);

for(let elm of elementsTop){
    observer.observe(elm);
}

for(let elm of elementsBottom){
    observer.observe(elm);
}



//=========================================================================//


const circularProgress = document.querySelector(".members_circular_progress"),
      progressValue = document.querySelector(".progress_value");
    let timeOut = 0;
      if (window.innerWidth < 992) {
        timeOut = 2400;
      }else{
        timeOut = 800;
      }

    setTimeout(function(){
    let progressStartValue = 0,
    progressEndValue = 8029,
    speed = 20;
    degPercent = 1;    

let progress = setInterval(() => {
    
    progressStartValue +=94;
    Intl.NumberFormat('en-US').format(progressStartValue);
    
    if (degPercent < 84) {
        degPercent ++;
    }

   
    
    progressValue.textContent = Intl.NumberFormat('en-US').format(progressStartValue);
    circularProgress.style.background = `conic-gradient(white ${degPercent * 3.6}deg, rgb(7,7,32) 0deg)`;

    if (progressStartValue >= progressEndValue) {
        progressStartValue = progressEndValue;
        progressValue.textContent = Intl.NumberFormat('en-US').format(progressStartValue);
        clearInterval(progress);
    }
    
}, speed);
    },timeOut)


//=====================================================================================//

const popup = document.querySelector(".popup_menu");

function openPopup() {
    popup.classList.add("open_popup")
}

function closePopup(){
    popup.classList.remove("open_popup");
}

