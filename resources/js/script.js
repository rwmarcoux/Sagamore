$(window).load(function(){
    
    /* Scroll on buttons */
     $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    
    $('.js--scroll-to-construction').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-construction').offset().top}, 1000);
    });
    
    $('.js--scroll-to-commercial').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-commercial').offset().top}, 1000);
    });
    
    /* Animations on load */
    
    $('.js--wp-1').removeClass('hide').addClass('animated fadeInLeft');
    
    /* Animations on scroll */
    
    /* Fade In Left/Right */
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '80%',
        duration: 'slow',
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '80%',
        duration: 'slow',
    });
    
    /* Fade In Up */  
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    /*   Image Caption   */
    
    
});