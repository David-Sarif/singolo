const nav=document.getElementById('nav');
const portfolioFilter=document.getElementById('portfolio-filter');
const portfolioList=document.getElementById('portfolio-list');

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