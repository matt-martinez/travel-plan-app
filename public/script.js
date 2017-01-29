console.log('Script File Connected');

// Citation: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
// Learned from code in link above to create slideshow
$("#tripPics > div:git(0)").hide();

setInterval(function() {
  $('#tripPics > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#tripPics');
}, 3000);
