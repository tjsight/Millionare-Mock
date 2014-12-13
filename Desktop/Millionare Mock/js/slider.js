$(document).ready(function(){
 
var counter = 0,
  $items = document.querySelectorAll('.diy-slideshow figure'),
  numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('show');
[].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

$items[itemToShow].classList.add('show');    
};
 
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
})();  
 