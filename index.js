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
        /* var path = entry.target.querySelector('.path');
        if(entry.isIntersecting){
            path.classList.add('path-animation');
            return;
        }
        path.classList.remove('path-animation'); */
    });
});

observer.observe(document.querySelector('.numbers'));