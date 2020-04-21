console.log("Hello!!");
let cards = [
    {
        name: "hulk",
        img: "images/hulk.jpg"
    },
    {
        name: "hulk",
        img: "images/hulk.jpg"
    },
    {
        name: "deadpool",
        img: "images/deadpool.jpg"
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
        name: "thor",
        img: "images/thor.jpg",
    },
    {
        name: "captain",
        img: "images/captainAmerica.jpg",
    },
    {
        name: "captain",
        img: "images/captainAmerica.jpg",
    }
];

//randomizing array...
cards.sort(() => 0.5 - Math.random());

let cover = "images/cover.jpg"
let result = 0;
let place;
let placeId;
let placeClickedName = [];
let placeClickedId = [];

function createGame(){
    place = document.getElementsByClassName("box");
    console.log(place);
    for(let i=0; i<place.length; i++){
        place[i].addEventListener("click",flipthecard);
        place[i].setAttribute("src",cover);
    }
}

function checkMatch(){
    console.log("in checkmatch");
    let optionOneId = placeClickedId[0];
    console.log(optionOneId);
    let optionTwoId = placeClickedId[1];
    if(placeClickedName[0] === placeClickedName[1]){
        result++;
        document.getElementById("result").innerHTML = result;
        // alert("you got it");
        place[optionOneId].removeEventListener("click",flipthecard);
        place[optionTwoId].removeEventListener("click",flipthecard);
    } else{
        place[optionOneId].setAttribute("src",cover);
        place[optionTwoId].setAttribute("src",cover);
        placeClickedId = [];
        placeClickedName = [];
    }
    placeClickedId = [];
        placeClickedName = [];
}

function StartGame(){
    // set src of all the images

    // timeout function to cover image after 15 seconds

    // add eventlistener to all the boxes

    // check


    // for(let i=0; i<place.length; i++){
    //     console.log("Showing all");
    // }
    createGame();
}

function flipthecard(e){
    //console.log(e);
    placeId = e.target.getAttribute("id");
    console.log(placeId);
    placeClickedName.push(cards[placeId].name);
    console.log(placeClickedName);
    placeClickedId.push(placeId);
    console.log(placeClickedId);
    e.target.setAttribute("src",cards[placeId].img);

    if(placeClickedName.length === 2){
        console.log("RAAAAAAAAAAAAAJ");
        setTimeout(checkMatch,200);
    }
}
function reload(){
    location.reload();
}

StartGame();
