// nav
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
})
 cancelBtn.addEventListener('click', ()=>{
    menu.classList.remove("active")
    menuBtn.classList.remove("hide");
})

//sticky nav

function fixNav(){
   navbar.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', fixNav);


//slider
const person = document.querySelector('.person');
const profession = document.querySelector('.profession h1');
const names = document.querySelector('.name h2');

const imgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
const professionH1 = ['dietician','personal trainer', 'yoga instructor'];
const namesH2 = ['Ella Williams', 'Katie Purple', 'James Porter'];

let activeElement = 0;
let timeChange = 4000;

function changeImg(){
    activeElement++;
    if(activeElement == imgs.length){
        activeElement = 0;
    }

    person.src= imgs[activeElement];
    profession.textContent = professionH1[activeElement];
    names.textContent = namesH2[activeElement];
}

setInterval(changeImg, timeChange);

// animation 1
const about = document.querySelector('.about');

function scrollAppear(){
    const about = document.querySelector('.about');
    const aboutPosition = about.getBoundingClientRect().top;
    const windowHeight = window.innerHeight/2;

    if(aboutPosition < windowHeight){
        about.classList.add('active-appear');
    }else
    about.classList.remove('active-appear');
}
window.addEventListener('scroll', scrollAppear)

//animation 2
const reveals = document.querySelectorAll('.reveal');

function reveal(){
    reveals.forEach(function(item){
        let revealPosition = item.getBoundingClientRect().top;
        let revealPositionPercent = (revealPosition/ window.innerHeight) * 100;

        if(revealPositionPercent <= 30){
            item.classList.add('active-blocks')
        }else {
            item.classList.remove('active-blocks')
        }
    })
}
window.addEventListener('scroll', reveal)

// gallery
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
    this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// form
const firstNameInput= document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const btn = document.querySelector('.btn');
btn.addEventListener("click", displayDetails);

btn.disabled = true;
let letters = /^[A-Za-z]+$/;

function displayDetails(){
const gender = document.querySelector("input[name=gender]:checked").value;
}

function validate (){
const isLengthValid  = lastNameInput.value.length >= 3 && firstNameInput.value.length >= 3;
const isLettersValid = lastNameInput.value.match(letters) && firstNameInput.value.match(letters);
const isEmptyValid = lastNameInput.value !== '' && firstNameInput.value !== '';

if (isLengthValid && isLettersValid && isEmptyValid) {
  btn.disabled = false;

} else {
  btn.disabled = true;
 }
}

firstNameInput.addEventListener('input', validate);
lastNameInput.addEventListener('input', validate);



