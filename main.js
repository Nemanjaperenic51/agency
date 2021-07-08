$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 50) {
        $('.sticky').addClass('stickyadd')
    }else {
        $('.sticky').removeClass('stickyadd')
    }
});

////////////////////////////////////////////////////
////////////////////////////////////////////////////

const naslov = 'Full digitalna usluga'
let i = 0

const kuckanje = () => {
    if(i < naslov.length) {
        document.querySelector('.tipkajucinaslov').innerHTML += naslov.charAt(i);
        i++;
        setTimeout(kuckanje, 150);
    }
}

kuckanje()
