let navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach( a => {
    a.addEventListener('click', function(){
        navlinks.forEach( a => a.classList.remove('active'));
        this.classList.add('active');
    })
})
