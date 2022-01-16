const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var divs = document.querySelectorAll('.path'), i;
        for (i = 0; i < divs.length; ++i) {
            if(entry.isIntersecting){
                divs[i].classList.add('path-animation');
            }else {
                divs[i].classList.remove('path-animation'); 
            }
        }
    });
});

const productObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            /* entry.target.parentElement.classList.add(entry.target) */
            console.log(entry.target)
        } else {
            /* entry.target.parentElement.classList.remove('anis') */
        }
        /* var divs = document.querySelectorAll('.path'), i;
        for (i = 0; i < divs.length; ++i) {
            if(entry.isIntersecting){
                divs[i].classList.add('path-animation');
            }else {
                divs[i].classList.remove('path-animation'); 
            }
        } */
    });
})


observer.observe(document.querySelector('.numbers'));

document.querySelectorAll('.card').forEach(el => {
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            var colorClass = entry.target.dataset.transitionColor ? entry.target.dataset.transitionColor : "none";
            if(entry.isIntersecting){
                entry.target.parentElement.classList.add(colorClass)
            } else {
                entry.target.parentElement.classList.remove(colorClass)
            }
        });
    }).observe(el)
})



