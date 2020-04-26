console.log("Hello!!");
let cards = [
    {
        name: "hulk",
        img: "images/hulk.jpg"
    },
    {
        name: "deadpool",
        img: "images/deadpool.jpg"
    },
    {
        name: "thor",
        img: "images/thor.jpg",
    },
    
    {
        name: "captain",
        img: "images/captainAmerica.jpg",
    }
];

//randomizing array...
let randomCards = cards.slice();
randomCards.sort(() => 0.5 - Math.random());
console.log(randomCards);
console.log(cards);

let cover = "images/cover.jpg"
let result = 0;
let place = document.getElementsByClassName("box");
let placeId;
let placeClickedName;
let placeClickedId;
let questionCardName;
let queNum = 0;
let que = document.getElementById("question");

/**********************/


function initialShow(){
    // set src of all the img tag to show images
    for(let i=0; i<place.length; i++){
        placeId = place[i].getAttribute("id");
        console.log(place[i]);
        place[i].setAttribute("src",randomCards[placeId].img);
    }
    // start the game after 5 seconds
    document.getElementById("instruction").innerHTML = "You will have five seconds to remember all the images then you have to tell which image is where!"
    setTimeout(createGame,6000);
}

function createGame(){
    // show question card
    document.getElementById("instruction").innerHTML = "";
    showQuestionCard(0);
    console.log("game created!");
    // set event listener for all the option cards and cover them
    for(let i=0; i<place.length; i++){
        place[i].addEventListener("click",flipthecard);
        place[i].setAttribute("src",cover);
    }
}

function showQuestionCard(n){
    if(n<cards.length){
        que.setAttribute("src",cards[n].img);
        questionCardName = cards[n].name;
        queNum++;
    }
}


function flipthecard(e){

    // open the card which user clicks on
    placeId = e.target.getAttribute("id");
    e.target.setAttribute("src",randomCards[placeId].img);
    
    // get which card the user clicked on and store it in an array
    placeClickedId = placeId;
    placeClickedName = randomCards[placeId].name;

    // check with the image of the question card... & remove event from the card if correct
    if(questionCardName === placeClickedName){
        result++;
        document.getElementById("result").innerHTML = result;
        e.target.removeEventListener("click",flipthecard);
        console.log("you got " + placeClickedName + " right");
         // resetAll
        placeClickedId = -1;
        placeClickedName = "";
        showQuestionCard(queNum);
    }else{ // flip back if wrong
        setTimeout(function(){e.target.setAttribute("src",cover)},500);
        console.log("wrong you clicked " + placeClickedName);
    }
   
}
function reload(){
    location.reload();
}

initialShow();
