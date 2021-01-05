var lstMonAn = document.querySelector(".list_monAn");
var flkty = new Flickity( lstMonAn, {
    cellAlign: 'left',
    prevNextButtons: false,
    contain: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1500,
    freeScroll: true
});

var lstThucUong = document.querySelector(".list_ThucUong");
var flk = new Flickity( lstThucUong, {
    cellAlign: 'left',
    prevNextButtons: false,
    contain: true,
    autoPlay: 1700,
    pageDots: false,
    wrapAround: true,
    freeScroll: true
});