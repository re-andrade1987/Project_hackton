$('.btn').on('click', function(e) {
    e.preventDefault();
    $('.lista').slideToggle('slow');
  });
  
  $('.menu-link').each(function() {
    $(this).on('click', function() {
      $('#lista').slideToggle('slow');
    });
    
});
