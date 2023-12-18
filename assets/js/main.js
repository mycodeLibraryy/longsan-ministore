let navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach( a => {
    a.addEventListener('click', function(){
        navlinks.forEach( a => a.classList.remove('active'));
        this.classList.add('active');
    })
})

$(document).on('click', '.value-control', function () {
    var action = $(this).attr('data-action')
    var min = $(this).attr('data-min')
    var max = $(this).attr('data-max')
    var target = $(this).attr('data-target')
    var value = parseFloat($('[id="' + target + '"]').val());
    if (action == "plus") {
        if (value < max) {
            value++;
        } 
    }
    if (action == "minus") {
        if (value > min) {
            value--;
        } 
    }
    $('[id="' + target + '"]').val(value)
})