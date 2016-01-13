$(document).ready(function(){
 $('.slick').slick({
   lazyLoad: "ondemand",
   centerMode: true,
   centerPadding: '60px',
   slidesToShow: 1 ,
   slidesToScroll: 1,
   prevArrow: "<img class='prevarrow' src='assets/prevarrow.png' />",
   nextArrow: "<img class='nextarrow' src='assets/nextarrow.png'/>"
  });
});
