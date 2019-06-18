$(".main").onepage_scroll({
    sectionContainer: ".section",
    easing: "ease",
    animationTime: 1000,             
    pagination: true,                
    updateURL: false,                
    loop: false,                    
    keyboard: true,                  
    responsiveFallback: false,
    direction: "vertical"            
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.comment-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});