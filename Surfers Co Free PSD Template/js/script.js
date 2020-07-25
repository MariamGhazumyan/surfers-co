

let slayds = $('.photo__')

for (let i = 0; i < slayds.length; i++) {
   let slayd = slayds[i];
   console.log(slayd)
  
   $(slayd).on('mouseup', event => {
      $('#_photo_').attr('src', `${$(slayd).attr('src')}`);
      $('#_photo_').addClass('big-size')
   })

}



$('#burger_menu').on('click', event => {
   $('.header_navbar-mobail').toggleClass('active')
 
   let loop = $('.header_navbar-mobail')
   $(document).mouseup(e => {
      if (!loop.is(e.target)
         && loop.has(e.target).length === 0) {
         $(loop).removeClass('active')
      }
   });
})




 $(document).ready(function(){
   $('.carousel__inner').slick({
      infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
    });
 });
