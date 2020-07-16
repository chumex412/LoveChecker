// ANIMATION WOW Activattion
$(function() {
  // Animate On Scroll
  new WOW().init();
});

// Slider - Magnific Popup
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$(function() {
  $("#sliders").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
      enabled:true
    }
  });
});