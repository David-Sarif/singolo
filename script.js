
const nav=document.getElementById('nav');
const portfolioFilter=document.getElementById('portfolio-filter');
const portfolioList=document.getElementById('portfolio-list');

const homeLink=document.getElementById('home_link');
const servicesLink=document.getElementById('services_link');
const portfolioLink=document.getElementById('portfolio_link');
const aboutLink=document.getElementById('about_link');
const contactLink=document.getElementById('contact_link');

// for portfolio shuffle
let portfolioArray = Array.from(document.querySelectorAll('#portfolio-list>li'))
// for toggling phones
const phoneVertical=document.getElementById('phone-vertical-click-zone');
const phoneHorizontal=document.getElementById('phone-horizontal-click-zone');
// for slider
const ArrowLeft=document.getElementById('arrow-left');
const ArrowRight=document.getElementById('arrow-right');
const burgerButton=document.getElementById('burger-button');
const burgerBackground=document.getElementById('burger_background');

const slides = document.querySelectorAll('.slider-img');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n){
    currentSlide = (n+slides.length) % slides.length;
}

function hideSlide(direction){
    isEnabled=false;
    slides[currentSlide].classList.add(direction)
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active',direction);
    })
}

function showSlide(direction){
   
    slides[currentSlide].classList.add('next', direction)
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('next',direction);
        this.classList.add('active');
        isEnabled=true;
    })
}

function previousSlide(n){
    hideSlide('to-right');
    changeCurrentSlide(n-1);
    showSlide('from-left');

}

function nextSlide(n){
    hideSlide('to-left');
    changeCurrentSlide(n+1);
    showSlide('from-right');

}

ArrowRight.addEventListener('click',function(){

    if (isEnabled){
        previousSlide(currentSlide);
    }
}
)

ArrowLeft.addEventListener('click',function(){

    if (isEnabled){
        nextSlide(currentSlide);
    }
}
)

// for modal form
const form=document.getElementById('form')
const ButtonSubmit=document.getElementById('button_submit');
const ButtonClose=document.getElementById('button_close')
const MessageBlock=document.getElementById('message-block')
const modalSubject = document.getElementById('modal_subject');
const modalDescription=document.getElementById('modal_description');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function toggleScreen(event){
    let screen=event.target.nextElementSibling
    if (screen.classList.contains('visually-hidden'))
        screen.classList.remove('visually-hidden')
    else screen.classList.add('visually-hidden')  
}

function shufflePictures(event){
    portfolioFilter.querySelectorAll('a').forEach(elem => elem.classList.remove('filter-element-active'));
    event.target.classList.add('filter-element-active');

    shuffle(portfolioArray);

    document.querySelector('#portfolio-list').append(...portfolioArray);
}

document.addEventListener('scroll',onScroll);

function onScroll(event){
    const curPos=window.scrollY;
    const sections=document.querySelectorAll('section');
    const links=nav.querySelectorAll('a');

    sections.forEach((elem)=>{
        if ((elem.offsetTop-95)<=curPos && (elem.offsetTop+elem.offsetHeight)> curPos){
            links.forEach((a) => {
                a.classList.remove('nav-active');
                if (elem.getAttribute('class')===a.getAttribute('href').substring(1)){
                    a.classList.add('nav-active')
                }
            })
        }           
    })
    if (curPos<197 && window.innerWidth<768){
        nav.querySelectorAll('a')[0].classList.add('nav-active');
        nav.querySelectorAll('a')[1].classList.remove('nav-active');

    }
    else if (curPos<600&& window.innerWidth<768){
        nav.querySelectorAll('a')[1].classList.add('nav-active');
        nav.querySelectorAll('a')[0].classList.remove('nav-active');

    }
     else if (curPos<600 ){
        nav.querySelectorAll('a')[0].classList.add('nav-active');
        nav.querySelectorAll('a')[1].classList.remove('nav-active');

    }
  
}

// shuffling portfolio images
document.getElementById('portfolio__btn-all').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-web').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-graphic').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-artwork').addEventListener('click', shufflePictures)
// toggling phones
phoneVertical.addEventListener('click', toggleScreen);
phoneHorizontal.addEventListener('click', toggleScreen)


// modal form

form.addEventListener('submit', (event) =>  {
    const subject=document.getElementById('contact-subject').value.toString().trim();
    const description=document.getElementById('contact-text').value.toString().trim();
    event.preventDefault();

    if (subject=='')
        modalSubject.innerText='Без темы ';  
    else    
        modalSubject.innerText='Тема: '+subject;
    
    if (description=='')
        modalDescription.innerText='Без описания ';
    
    else   
        modalDescription.innerText='Описание: '+description;           
    MessageBlock.classList.remove('visually-hidden');

}
)

ButtonClose.addEventListener('click', (event) =>  {
    MessageBlock.classList.add('visually-hidden');
    document.getElementById('modal_subject').innerText='Без темы';
    document.getElementById('modal_description').innerText='Без описания';
    document.getElementById('contact-text').value=''
    document.getElementById('contact-subject').value=''
    document.getElementById('form').reset();
}
)

// mobile side menu
burgerButton.addEventListener('click', toggleBurger )
function toggleBurger(){
if (nav.style.display=='')
{
    nav.style.display='block';
    burgerBackground.classList.remove('visually-hidden');
    burgerButton.classList.add('rotate')
}

else if (nav.style.display=='block'){
    nav.style.display=''
    burgerBackground.classList.add('visually-hidden');
    burgerButton.classList.remove('rotate')
}
}

burgerBackground.addEventListener('click', function() {
    burgerBackground.classList.add('visually-hidden');
    toggleBurger()
}
)

homeLink.addEventListener('click', function() {
    if (window.innerWidth<768)
    toggleBurger()
}
)
servicesLink.addEventListener('click', function() {
    if (window.innerWidth<768)
    toggleBurger()
}
)
portfolioLink.addEventListener('click', function() {
    if (window.innerWidth<768)
    toggleBurger()
}
)
aboutLink.addEventListener('click', function() {
    if (window.innerWidth<768)
    toggleBurger()
}
)
contactLink.addEventListener('click', function() {
    if (window.innerWidth<768)
    toggleBurger()
}
)









