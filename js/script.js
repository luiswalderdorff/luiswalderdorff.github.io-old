
// Slow Scroll on link click
const $scrollLink = $(".scroll");

$scrollLink.click(function(event) {
  event.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top
  }, 1000 )
})

// // Header sticky on scroll
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickyFunction()};
//
// // Get the header
// var header = document.querySelector(".main-nav");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;

  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function stickyFunction() {
  //   if (window.pageYOffset > sticky && $(window).width() >= 768) {
  //     header.classList.add("sticky");
  //   } else if (window.pageYOffset <= sticky || $(window).width() < 768) {
  //     header.classList.remove("sticky");
  //   }
  // }
  //
  // // Active link switching
  // $(window).scroll(function() {
  //   const scrollbarLocation = $(this).scrollTop();
  //
  //   $scrollLink.each(function() {
  //     const $sectionOffset = $(this.hash).offset().top;
  //
  //     if ($sectionOffset <= scrollbarLocation) {
  //       $(this).parent().siblings().children().removeClass("active");
  //       $(this).addClass("active");
  //     }
  //   })
  // })
