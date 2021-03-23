
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


  

//function to handle turning left
chevronOne.addEventListener('click', function (e) {
        e.preventDefault();
        turnstileCounter--;
        if (turnstileCounter === -1) {
            turnstileCounter = 2;
        }
        shownImage = turnstileItems[turnstileCounter];
    document.getElementById('tstImage').src = shownImage; 
})

//function to handle turning right
chevronTwo.addEventListener('click', function (e) {
    e.preventDefault();
    turnstileCounter++;
    if (turnstileCounter === 3) {
        turnstileCounter = 0;
    }
    shownImage = turnstileItems[turnstileCounter];
     document.getElementById('tstImage').src = shownImage; 



})  



const searchIcon = document.getElementById("magnifyingGlass");

searchIcon.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("clicked");
})
   
            const searchELementSwitch = 
                `<form>
                    <label for = "email" class = "visuallyHidden">Enter your email</label>
                    <input type = "email" id = "email" name = "email" placeholder="Enter your email">
                    <a href = "#"><i class="fas fa-search"></i></a>
                </form>`;

            const menuElementSwitch = 
                `<ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="contactPage.html">Contact</a></li>
                    <li><a id = magnifyingGlass href="#"><i class="fas fa-search"></i></a></li>
                    <li><a href="#"><i class="fas fa-lock"></i></a></li>
                </ul>`;

