let startBtn = document.querySelector("#startBtn");
let uCont = document.querySelector(".user");
let cCont = document.querySelector(".code");
let uImgs  = document.querySelectorAll(".user > .image");
let cImgs  = document.querySelectorAll(".code > .image");
let arr = ["stone" , "paper" , "scissor"] ;
let uScore = 0 ;
let cScore = 0 ;
userslect();

function userslect(){
    uScore = 0 ; 
    cScore = 0 ;
    document.querySelector(".userScore").innerText = uScore ;
    document.querySelector(".codeScore").innerText = cScore ;
    
}
for(let i = 0 ; i < 3 ; i++){
    uImgs[i].addEventListener("click",()=>{
        user =  uImgs[i].getAttribute("id") ;
        codeSelect(user);
    })
}

function userWin(user , code){
    uScore++ ;
    document.querySelector("h1").innerText = "Hurray ..  "+user+" beats "+code;
    document.querySelector("body").style.backgroundColor = "green";
    setTimeout(function(){
        document.querySelector("h1").innerText = "Let's Play";
        document.querySelector("body").style.backgroundColor = "greenyellow";
    },2000)
}

function codeWin(user , code){
    cScore++ ;
    document.querySelector("h1").innerText = "Arrayy ..  "+code+" beats "+user;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("h1").innerText = "Let's Play";
        document.querySelector("body").style.backgroundColor = "greenyellow";
    },2000)
}

function check(user , code){
    if(user === code){
        document.querySelector("h1").innerText = "It's Tie ";
        document.querySelector("body").style.backgroundColor = "white";
        setTimeout(function(){
            document.querySelector("h1").innerText = "Let's Play ";
            document.querySelector("body").style.backgroundColor = "greenyellow";
        },400)
    }
    if(user === "stone" && code === "scissor"){
        userWin(user , code);
    }
    if(user === "scissor" && code === "paper"){
        userWin(user , code);
    }
    if(user === "paper" && code === "stone"){
        userWin(user , code);
    }

    if(code === "stone" && user === "scissor"){
        codeWin(user , code);
    }
    if(code === "scissor" && user === "paper"){
        codeWin(user , code);
    }
    if(code === "paper" && user === "stone"){
        codeWin(user , code);
    }
}

function codeSelect(user){
    let selectedImage = arr[Math.floor(Math.random() * 3)] ;
    document.querySelector( ".code > #"+selectedImage).classList.add("pressed");
    setTimeout(function(){
        document.querySelector( ".code > #"+selectedImage).classList.remove("pressed");
        
    },1000)
    console.log(selectedImage +" selected by code");
    check(user , selectedImage);
    document.querySelector(".userScore").innerText = uScore ;
    document.querySelector(".codeScore").innerText = cScore ;
}
document.querySelector("#restart").addEventListener("click",()=>{
    userslect();
});
