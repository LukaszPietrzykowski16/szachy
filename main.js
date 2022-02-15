//general thinks 
const place = document.querySelectorAll('.place');
const center = document.querySelectorAll('.center');

const test = document.querySelector('.test');

let moveCounter = 0;

// i need to make object white pieces and black pieces

// pieces 
const rookA8 = {
  name: 'rookA8',
  place: 0,
  img: "black-rook.png"
}
const knightB8 = {
  name: 'knightB8',
  place: 1,
  img: "black-horse.png"
}
const bishopC8 = {
  name: 'bishopC8',
  place: 2,
  img: "black-bishop.png"
}
const queenD8 = {
  name: 'queenD8',
  place: 3,
  img: "black-queen.png"
}
const kingE8 = {
  name: 'kingE8',
  place: 4,
  img: "black-king.png"
}

const bishopF8 = {
  name: 'bishopF8',
  place: 5,
  img: "black-bishop.png"
}
const knightG8 = {
  name: 'knightG8',
  place: 6,
  img: "black-horse.png"
}
const rookH8 = {
  name: 'rookH8',
  place: 7,
  img: "black-rook.png"
}
const pawnA7 = {
  name: 'pawnA7',
  place: 8,
  img: "black-pawn.png"
}
const pawnB7 = {
  name: 'pawnB7',
  place: 9,
  img: "black-pawn.png"
}

const pawnC7 = {
  name: 'pawnC7',
  place: 10,
  img: "black-pawn.png"
}
const pawnD7 = {
  name: 'pawnD7',
  place: 11,
  img: "black-pawn.png"
}
const pawnE7 = {
  name: 'pawnE7',
  place: 12,
  img: "black-pawn.png"
}
const pawnF7 = {
  name: 'pawnF7',
  place: 13,
  img: "black-pawn.png"
}
const pawnG7 = {
  name: 'pawnG7',
  place: 14,
  img: "black-pawn.png"
}
const pawnH7 = {
  name: 'pawnH7',
  place: 15,
  img: "black-pawn.png"
}

// white 

const rookA1 = {
  name: 'rookA8',
  place: 56,
  img: "white-rook.png"
}
const knightB1 = {
  name: 'knightB8',
  place: 57,
  img: "white-horse.png"
}
const bishopC1 = {
  name: 'bishopC8',
  place: 58,
  img: "white-bishop.png"
}
const queenD1 = {
  name: 'queenD8',
  place: 59,
  img: "white-queen.png"
}
const kingE1 = {
  name: 'kingE8',
  place: 60,
  img: "white-king.png"
}

const bishopF1 = {
  name: 'bishopF8',
  place: 61,
  img: "white-bishop.png"
}
const knightG1 = {
  name: 'knightG8',
  place: 62,
  img: "white-horse.png"
}
const rookH1 = {
  name: 'rookH8',
  place: 63,
  img: "white-rook.png"
}
const pawnA2 = {
  name: 'pawnA7',
  place: 48,
  img: "white-pawn.png"
}
const pawnB2 = {
  name: 'pawnB7',
  place: 49,
  img: "white-pawn.png"
}

const pawnC2 = {
  name: 'pawnC7',
  place: 50,
  img: "white-pawn.png"
}
const pawnD2 = {
  name: 'pawnD7',
  place: 51,
  img: "white-pawn.png"
}
const pawnE2 = {
  name: 'pawnE7',
  place: 52,
  img: "white-pawn.png"
}
const pawnF2 = {
  name: 'pawnF7',
  place: 53,
  img: "white-pawn.png"
}
const pawnG2 = {
  name: 'pawnG7',
  place: 54,
  img: "white-pawn.png"
}
const pawnH2 = {
  name: 'pawnH7',
  place: 55,
  img: "white-pawn.png"
}


newPiece()

function newPiece(){
  place[rookA8.place].innerHTML = `<div id="${rookA8.name}" class="center"> <img src=${rookA8.img} width="50px">`;
  place[knightB8.place].innerHTML = `<div id="${knightB8.name}" class="center"> <img src=${knightB8.img} width="50px">`;
  place[bishopC8.place].innerHTML = `<div id="${bishopC8.name}" class="center"> <img src=${bishopC8.img} width="50px">`;
  place[queenD8.place].innerHTML = `<div id="${queenD8.name}" class="center"> <img src=${queenD8.img} width="50px">`;
  place[kingE8.place].innerHTML = `<div id="${kingE8.name}" class="center"> <img src=${kingE8.img} width="50px">`;
  place[bishopF8.place].innerHTML = `<div id="${bishopF8.name}" class="center"> <img src=${bishopF8.img} width="50px">`;
  place[knightG8.place].innerHTML = `<div id="${knightG8.name}" class="center"> <img src=${knightG8.img} width="50px">`;
  place[rookH8.place].innerHTML = `<div id="${rookH8.name}" class="center"> <img src=${rookH8.img} width="50px">`;
  place[pawnA7.place].innerHTML = `<div id="${pawnA7.name}" class="center"> <img src=${pawnA7.img} width="50px">`;
  place[pawnB7.place].innerHTML = `<div id="${pawnB7.name}" class="center"> <img src=${pawnB7.img} width="50px">`;
  place[pawnC7.place].innerHTML = `<div id="${pawnC7.name}" class="center"> <img src=${pawnC7.img} width="50px">`;
  place[pawnD7.place].innerHTML = `<div id="${pawnD7.name}" class="center"> <img src=${pawnD7.img} width="50px">`;
  place[pawnE7.place].innerHTML = `<div id="${pawnE7.name}" class="center"> <img src=${pawnE7.img} width="50px">`;
  place[pawnF7.place].innerHTML = `<div id="${pawnF7.name}" class="center"> <img src=${pawnF7.img} width="50px">`;
  place[pawnG7.place].innerHTML = `<div id="${pawnG7.name}" class="center"> <img src=${pawnG7.img} width="50px">`
  place[pawnH7.place].innerHTML = `<div id="${pawnH7.name}" class="center"> <img src=${pawnH7.img} width="50px">`;
  place[rookA1.place].innerHTML = `<div id="${rookA1.name}" class="center"> <img src=${rookA1.img} width="50px">`;
  place[knightB1.place].innerHTML = `<div id="${knightB1.name}" class="center"> <img src=${knightB1.img} width="50px">`;
  place[bishopC1.place].innerHTML = `<div id="${bishopC1.name}" class="center"> <img src=${bishopC1.img} width="50px">`;
  place[queenD1.place].innerHTML = `<div id="${queenD1.name}" class="center"> <img src=${queenD1.img} width="50px">`;
  place[kingE1.place].innerHTML = `<div id="${kingE1.name}" class="center"> <img src=${kingE1.img} width="50px">`;
  place[bishopF1.place].innerHTML = `<div id="${bishopF1.name}" class="center"> <img src=${bishopF1.img} width="50px">`;
  place[knightG1.place].innerHTML = `<div id="${knightG1.name}" class="center"> <img src=${knightG1.img} width="50px">`;
  place[rookH1.place].innerHTML = `<div id="${rookH1.name}" class="center"> <img src=${rookH1.img} width="50px">`;
  place[pawnA2.place].innerHTML = `<div id="${pawnA2.name}" class="center"> <img src=${pawnA2.img} width="50px">`;
  place[pawnB2.place].innerHTML = `<div id="${pawnB2.name}" class="center"> <img src=${pawnB2.img} width="50px">`;
  place[pawnC2.place].innerHTML = `<div id="${pawnC2.name}" class="center"> <img src=${pawnC2.img} width="50px">`;
  place[pawnD2.place].innerHTML = `<div id="${pawnD2.name}" class="center"> <img src=${pawnD2.img} width="50px">`;
  place[pawnE2.place].innerHTML = `<div id="${pawnE2.name}" class="center"> <img src=${pawnE2.img} width="50px">`;
  place[pawnF2.place].innerHTML = `<div id="${pawnF2.name}" class="center"> <img src=${pawnF2.img} width="50px">`;
  place[pawnG2.place].innerHTML = `<div id="${pawnG2.name}" class="center"> <img src=${pawnG2.img} width="50px">`
  place[pawnH2.place].innerHTML = `<div id="${pawnH2.name}" class="center"> <img src=${pawnH2.img} width="50px">`;
}

const bruh = document.querySelector('#rookA8');

const center2 = document.querySelectorAll('.center');

center2.forEach(piece => {
  piece.addEventListener('click', ()  => {
     
      console.log(piece);
      checkPosition();
      
     })
})



function checkPosition() {
  // golden script XDD
  for (let i = 0; i < place.length; i++) {
    place[i].addEventListener("click", () => {
          let newPosition = i;
          changePosition(newPosition)
          console.log(newPosition)
        });
      }
}

function changePosition(newPosition) {
  removePiece()
  // rookA8.place = newPosition;
  newPiece()
 
}

function removePiece() {
  place[rookA8.place].innerHTML = '';
  moveCounter++;
  console.log(moveCounter);
}


