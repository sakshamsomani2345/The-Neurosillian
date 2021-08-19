// const button=document.getElementsByClassName('btn');
// const links=document.querySelector('.nav-links')
// button.adddEventListener('click',function(){
// links.slideToggle(3000)
// })
$(document).ready(function () {
  $(".btn").click(function () {
    $(".nav-links").slideToggle(3000);
    $('.btn').toggleClass('change');
  });
});
$('.team-center').owlCarousel({
  loop:true,
  margin:10,
  smartSpeed:4000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('.customers-center').owlCarousel({
  loop:true,
  margin:10,
  smartSpeed:4000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})
