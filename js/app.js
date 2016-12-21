//Problem: User when clicking on image goes to a dead end (poor user experience)
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $("<div id='overlay'></div>"); /* we want to use and reffer to the div a few times in our code, so we assign it to a variable here. By adding $() we made the div a jQuery representation of the object. So now it's an object. And we named var '$overlay' so we can see that it's jQuery object */
var $image = $("<img>");
var $caption = $("<p></p>");

// Add an image to overlay
$overlay.append($image); /*attaching img to the overlay*/

// Add a caption to overlay подпись
$overlay.append($caption); /*caption goes after the image*/

// Add overlay
$("body").append($overlay); /*here we append (attach) a div with id="overlay" to our html body. 'overlay' already containes img */
 
// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update the overlay with the image linked in the link
  $image.attr("src", imageLocation); /*So we get the image location from the link that we just clicked on and then we set the source attribute for the image location.*/
  // Show the overlay
  $overlay.show();
  
  // Get alt attribute (which is child's attribute) and set caption подпись
  var captionText = $(this).children("img").attr("alt"); /* "this" - is the anchor or the link that we've just clicked on, and its children and we use its CSS selector "img" */
  $caption.text(captionText);
});
  
//When the overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});
  





