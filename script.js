
const nav=document.getElementById('nav');
const portfolioFilter=document.getElementById('portfolio-filter');
const portfolioList=document.getElementById('portfolio-list');
// for portfolio shuffle
let portfolioArray = Array.from(document.querySelectorAll('#portfolio-list>li'))
// for toggling phones
const phoneVertical=document.getElementById('phone-vertical');
const phoneHorizontal=document.getElementById('phone-horizontal');
const BlackScreenVertical=document.getElementById('black-screen-vertical');
const BlackScreenHorizontal=document.getElementById('black-screen-horizontal');
// for slider
const ArrowLeft=document.getElementById('arrow-left');
const ArrowRight=document.getElementById('arrow-right');
const Slide1=document.getElementById('slide-1');
const Slide2=document.getElementById('slide-2');
const SliderContainer=document.getElementById('slider-container');

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

function shufflePictures(event){
    portfolioFilter.querySelectorAll('a').forEach(elem => elem.classList.remove('filter-element-active'));
    event.target.classList.add('filter-element-active');

    shuffle(portfolioArray);

    document.querySelector('#portfolio-list').append(...portfolioArray);
}

function ShowSlide2()
{

    Slide2.classList.remove('visually-hidden');
    Slide1.classList.add('visually-hidden');
    SliderContainer.classList.remove('slider-container-red');
    SliderContainer.classList.add('slider-container-blue');
}

function ShowSlide1()
{

    Slide1.classList.remove('visually-hidden');
    Slide2.classList.add('visually-hidden');
    SliderContainer.classList.add('slider-container-red');
    SliderContainer.classList.remove('slider-container-blue');
}


nav.addEventListener('click', (event) =>  {
    nav.querySelectorAll('a').forEach(elem => elem.classList.remove('nav-active'));
    event.target.classList.add('nav-active');
}
)

// shuffling portfolio images
document.getElementById('portfolio__btn-all').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-web').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-graphic').addEventListener('click', shufflePictures)
document.getElementById('portfolio__btn-artwork').addEventListener('click', shufflePictures)


phoneVertical.addEventListener('click', (event) =>  {
    if (BlackScreenVertical.classList.contains('visually-hidden'))
    {
        BlackScreenVertical.classList.remove('visually-hidden')}
    else
        BlackScreenVertical.classList.add('visually-hidden')
}
)
BlackScreenVertical.addEventListener('click', (event) =>  {
    if (BlackScreenVertical.classList.contains('visually-hidden'))
    {
        BlackScreenVertical.classList.remove('visually-hidden')}
    else
        BlackScreenVertical.classList.add('visually-hidden')
}
)
phoneHorizontal.addEventListener('click', (event) =>  {
    if (BlackScreenHorizontal.classList.contains('visually-hidden'))
    {
        BlackScreenHorizontal.classList.remove('visually-hidden')}
    else
        BlackScreenHorizontal.classList.add('visually-hidden')

}
)
BlackScreenHorizontal.addEventListener('click', (event) =>  {
    if (BlackScreenHorizontal.classList.contains('visually-hidden'))
    {
        BlackScreenHorizontal.classList.remove('visually-hidden')}
    else
        BlackScreenHorizontal.classList.add('visually-hidden')

}
)

ArrowLeft.addEventListener('click', (event) =>  {
    if (Slide2.classList.contains('visually-hidden'))
    
        ShowSlide2()

    else
        ShowSlide1()
    

}
)
ArrowRight.addEventListener('click', (event) =>  {
    if (Slide2.classList.contains('visually-hidden'))   
        ShowSlide2()   
    else
        ShowSlide1()   
}
)

// modal form

form.addEventListener('submit', (event) =>  {
    const subject=document.getElementById('contact-subject').value.toString().trim();
    const description=document.getElementById('contact-text').value.toString().trim();
    event.preventDefault();

    if (subject==''){
        modalSubject.innerText='Без темы ';
    }
    
    else   { 
        modalSubject.innerText='Тема: '+subject;
    }
    if (description==''){
        modalDescription.innerText='Без описания ';
    }
    else    {
                modalDescription.innerText='Описание: '+description;
                
    }
    
    MessageBlock.classList.remove('visually-hidden');

   
    

}
)
ButtonClose.addEventListener('click', (event) =>  {

    MessageBlock.classList.add('visually-hidden');
    document.getElementById('modal_subject').innerText='Без темы';
    document.getElementById('modal_description').innerText='Без описания';
    document.getElementById('contact-text').value=''
    document.getElementById('contact-subject').value=''
    // document.getElementById('form').reset();
    

}
)