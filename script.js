
// turnstile click counter
turnstileCounter = 0;



// Array to hold the turnstile images
const turnstileItems = [
    "images/home-3.jpeg",
    "images/home-11.jpg",
    "images/home-12.jpg"
];




const chevronOne = document.getElementById('chevronOne');
const chevronTwo = document.getElementById('chevronTwo');

const searchIcon = document.getElementById('magnifyingGlass');

  

//function to handle turning left
chevronOne.addEventListener('click', function (e) {
   
    e.preventDefault();
    console.log(" left clicked");
    turnstileCounter--;
    if (turnstileCounter === -1) {
        turnstileCounter = 2;
    }
    shownImage = turnstileItems[turnstileCounter];
   document.getElementById('tstImage').src = shownImage; 
  console.log(shownImage);
})

//function to handle turning right
chevronTwo.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("right clicked");
    turnstileCounter++;
    if (turnstileCounter === 3) {
        turnstileCounter = 0;
    }
   
    
    shownImage = turnstileItems[turnstileCounter];
     document.getElementById('tstImage').src = shownImage; 
    console.log(shownImage);

    
})
