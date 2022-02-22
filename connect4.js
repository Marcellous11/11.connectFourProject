const box1 = document.querySelector(".header1");
const box2 = document.querySelector(".header2");
const box3 = document.querySelector(".header3");
const box4 = document.querySelector(".header4");
const box5 = document.querySelector(".header5");
const box6 = document.querySelector(".header6");
const box7 = document.querySelector(".header7");



const column1 = document.querySelectorAll(".column1");
const column2 = document.querySelectorAll(".column2");
const column3 = document.querySelectorAll(".column3");
const column4 = document.querySelectorAll(".column4");
const column5 = document.querySelectorAll(".column5");
const column6 = document.querySelectorAll(".column6");
const column7 = document.querySelectorAll(".column7");

box1.addEventListener('click',addingPiece)
box2.addEventListener('click',addingPiece2)


function addingPiece(e) {
  let redPiece = document.createElement('div');
      redPiece.classList.add('red');

    column1.forEach(function(box){
        if(box.childElementCount < 1){
            box.appendChild(redPiece);
        }
        else{  
        }
    })     
}



function addingPiece2(e) {
  let redPiece = document.createElement('div');
      redPiece.classList.add('blue');

    column2.forEach(function(box){
        if(box.childElementCount < 1){
            box.appendChild(redPiece);
        }
        else{  
        }
    })     
}





