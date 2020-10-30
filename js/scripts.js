// Christy Eang
// Mini challenge #11 Random Name Generator
// 10/29/2020
// Using Javascript & Bootstrap, you will develop a Random Student Name Generator of all the students in the class. 
let wickedCss = [
    "floater",
    "barrelRoll",
    "rollerRight",
    "rollerLeft",
    "heartbeat",
    "pulse",
    "rotation",
    "sideToSide",
    "zoomer",
    "zoomerOut",
    "spinner",
    "wiggle",
    "shake",
    "pound",
    "slideUp",
    "slideDown",
    "slideRight",
    "slideLeft",
    "fadeIn",
    "fadeOut",
    "rotateInRight",
    "rotateInLeft",
    "rotateIn",
    "bounceIn",
];

let classNames = [
    "Adrian Segura",
    "Arthur Olmos",
    "Alex Ato",
    "Ann Chansey",
    "Bryan Stewart",
    "Carlos Gonzalez",
    "Christy Eang",
    "Demitrius Ovro",
    "Dylan McFarlin",
    "Hugo Mejia",
    "John Shamoon",
    "Jorge Lopez",
    "Joseph Racca",
    "Juan Morales",
    "Ken Martinez",
    "Leopoldo Manzo",
    "Matthew Mendoza",
    "Matthew Tyler Rose",
    "Sean Chandler",
    // "Shannon Robertson",
    "Trevor Womack",
    "Victor Maldonado",
];
let selectedWord = "";
let myNum = document.getElementById("myNum");
let submitNum = document.getElementById("submitNum").addEventListener("click", function(e){
    groupNum();
});

let displayWord = document.getElementById("displayWord");
let second=false;
let newName = document.getElementById("newName");
// This is the input box
let submitName = document.getElementById("submitName").addEventListener("click", function () {
    // This is my button for my input box!
    second=false;
    double();
    if(second==false){
        addingNames();
    };
});

let carlos = document.getElementById("carlos");
let carlosNum = 0;

let randomBtn = document.getElementById("randomBtn").addEventListener("click", function () {
    ranNameGen();
    let cssRandom = Math.floor(Math.random() * wickedCss.length);
    displayWord.className = wickedCss[cssRandom];
});

function ranNameGen() {
    selectedWord = classNames[Math.floor(Math.random() * classNames.length)];

    if (selectedWord == "Carlos Gonzalez") {
        displayWord.innerText = selectedWord;
        carlosNum++;
        carlos.innerText = "Carlos Counter: " + carlosNum;
        // credits to Mendoza for this idea. I made it happen though
    }
    else{
        displayWord.innerText = selectedWord;
    };
};

function addingNames() {
    // how would I make it so there is actually text in newName.value???
    if (newName.value == "" || newName.value == null) {
        alert("Please Enter A Name!");
    }
    else {
        classNames.push(newName.value);
        console.log(classNames);
        newName.value = "";
    };
};

function double() {
    // What about if they add the same name?
    // I keep breaking it if i put the addingNames to my if/else statement.   
    for( let i=0; i<classNames.length;i++){
        if (newName.value == classNames[i]) {
            alert("This Name Is Already In The List!");
            second=true;
            newName.value = "";
        };
    };
};

function groupNum(){
    alert(myNum.value);
    myNum.value="";
    // I am going to pull this many people from the list and throw it into a group! Another button press will make that group!
}

