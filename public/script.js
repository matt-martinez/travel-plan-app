console.log('Script File Connected');

// Citation: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
// Learned from code in link above to create slideshow
$("#userImages > div:git(0)").hide();

setInterval(function() {
  $('#userImages > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#userImages');
}, 3000);
