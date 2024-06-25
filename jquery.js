
//jQuery (https://jquery.com/download) (https://api.jquery.com/)
//jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. By abstracting many of the complexities of JavaScript, jQuery allows developers to write less code to achieve more functionality.
//Script placement: Include script tag in your HTML file just below your scriptJs
//$('h1').css('color', 'blue');

//if - Script placement within HTML Head
$document.ready(function(){
    $('h1').css('color', 'blue');
});
//$ Selector - All
//MANIPULATING STYLES WITH jQuery
$('bio.h1').css('color', 'orangered');

//Get the current value of the css property
console.log($('h1').css('color'));
console.log($('h1').css('font-size'));

//Getting value vs Setting Value
//Getting value - single property - console.log($('h1').css('color'));
//Setting value - double property - console.log($('h1').css('color', 'pink'));

//BEST PRACTICE: Keeping JS for functionality, CSS for styling and HTML as a building block independently
//To add class in jQuery
$('h1').addClass('bigTitle');

//Remove class
$('h1').removeClass('bigTitle');

//Add multiple classes
$('h1').addClass('bigTitle fontweight backg');

//Check if an element has a particular class
console.log($('h1').hasClass('bigTitle'));


//MANIPULATING TEXT WITH jQuery
//A. .text notation
$('h1').text('Welcome');

//B. Update innerHTML using jQuery
$('h1').html("<em>Yooo</em>");


//MANIPULATING ATTRIBUTE WITH jQuery (Get and set attributes using jQuery)
console.log($('img').attr('src'));  //Get
$('img').attr('src', 'coding.jpg');  //Set
$('a').attr('href', 'https://www.google.com');  //Set
$('h2').attr('class', 'bigTitle'); 

//ADDING EVENT LISTENERS TO ELEMENTS USING jQuery
//METHOD A
$('button').click(function(){       //No need for looping throug all buttons here as jQuery selects All item using the $ sign.
    $('button').css('color', 'purple')
});

$('input').keypress(function(event){       //No need for looping throug all buttons here as jQuery selects All item using the $ sign.
   console.log(event.key)
});
//Detect keypress on the entire document
$(document).keypress(function(event){       //NOTE: No quotation mark around the document selector;
    console.log(event.key);
})

$(document).keypress(function(event){ //Display any keypress on the screen
    $('h1').html(event.key)
});


//METHOD B (The on method)
$('button').on('click', function(event){
    $('h1').html('You Clicked')
});


//ADDING NEW ELEMENTS ON A PAGE USING jQuery
$('h1').before('<p>Hello, my name is Raya</p>');    //Before the opening tag of the selected element.
$('h1').after('<p>Hello, my name is Raya</p>');     //After the opening tag of the selected element.
$('h1').prepend('<p>Hello, my name is Raya</p>');   //Just after the opening tag of the element.
$('h1').append('<p>Hello, my name is Raya</p>');    //Just before the closing tag of the element. i.e. after the content of the element.

//To remove an element
$('button').remove();


//USING ANIMATIONS with jQuery(https://api.jquery.com/category/effects/)
//Hide an element
$('button').on('click', function(){   
    $('h1').hide();
})

//Show an element
$('button').on('click', function(){
    $('h1').show();             
})

//Toogle an element
$('button').on('click', function(){
    $('h1').toggle();             
})

//Fade Out an element
$('button').on('click', function(){
    $('h1').fadeOut();             
})

//Fade In an element
$('button').on('click', function(){
    $('h1').fadeIn();             
})

//Fade In an element
$('button').on('click', function(){
    $('h1').fadeToggle();             
})

//FadeIn and Out
$('button').on('click', function(){
    $('h1').fadeOut();
    $('h1').fadeIn();
})

//Slide Up 
$('button').on('click', function(){
    $('h1').slideUp();
})

//Slide Down
$('button').on('click', function(){
    $('h1').slideDown();
})

//Slide Toggle
$('button').on('click', function(){
    $('h1').slideToggle();
})

//Custom Animation -ONLY ON NUMERIC VALUES
$('button').on('click', function(){
    $('h1').animate({
        opacity: 0.5,
        margin: '100px'
    });
})

//Chain on animations
$('button').on('click', function(){
    $('h1').slideUp().slideDown().animate({opacity: 0.5});
})
