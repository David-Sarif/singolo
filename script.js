const nav=document.getElementById('nav');
const portfolioFilter=document.getElementById('portfolio-filter');
const portfolioList=document.getElementById('portfolio-list');
const phoneVertical=document.getElementById('phone-vertical');
const phoneHorizontal=document.getElementById('phone-horizontal');
const BlackScreenVertical=document.getElementById('black-screen-vertical');
const BlackScreenHorizontal=document.getElementById('black-screen-horizontal');
const ArrowLeft=document.getElementById('arrow-left');
const ArrowRight=document.getElementById('arrow-right');
const Slide1=document.getElementById('slide-1');
const Slide2=document.getElementById('slide-2');
const SliderContainer=document.getElementById('slider-container');


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

portfolioFilter.addEventListener('click', (event) =>  {
    portfolioFilter.querySelectorAll('a').forEach(elem => elem.classList.remove('filter-element-active'));
    event.target.classList.add('filter-element-active');
    portfolioFilter.classList.remove('filter-element-active');
    if (portfolioList.classList.contains('portfolio-list-shuffle')){
        portfolioList.classList.remove('portfolio-list-shuffle');
    }
    else {
        portfolioList.classList.add('portfolio-list-shuffle');
    }
}
)

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

