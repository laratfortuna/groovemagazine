
// Message to browser to test script.
console.log('script working');


// FIND an element with a class of btn-1
const btn1 = document.querySelector('.btn-1');

// Tell that element to "listen" for a click.
// When that click happens, either add or remove 
// a class from the BODY element ('btn1-active');
btn1.addEventListener('click', function(){
    document.body.classList.toggle('menu-active');
});


// FIND an element with a class of btn-2
const btnsearch = document.querySelector('.btn-2');

// Tell that element to "listen" for a click.
// When that click happens, either add or remove 
// a class from the BODY element ('btn2-active');
btnsearch.addEventListener('click', function(){
  document.body.classList.toggle('search-active')
});


// FIND an element with a class of btn-3
const btn3 = document.querySelector('.btn-3');

// Tell that element to "listen" for a click.
// When that click happens, either add or remove 
// a class from the BODY element ('btn3-active');
btn3.addEventListener('click', function(){
  document.body.classList.toggle('header-menu-active')
});


// Dark Mode

jQuery(function($) {
  $('.dark-mode').click(function() {
      $('header, h1, body, section, h2 span, h2, h3, h4, a, footer, form').toggleClass('active-class');
      return false; 
  });
});





