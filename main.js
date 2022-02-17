//general thinks 
const place = document.querySelectorAll('.place');
const center = document.querySelectorAll('.center');

const test = document.querySelector('.test');

let moveCounter = 0;

// pieces 
const blackPieces = [
  rookA8 = {
    name: 'rookA8',
    place: 0,
    img: "black-rook.png"
  },
  knightB8 = {
    name: 'knightB8',
    place: 1,
    img: "black-horse.png"
  },
  bishopC8 = {
    name: 'bishopC8',
    place: 2,
    img: "black-bishop.png"
  },
  queenD8 = {
    name: 'queenD8',
    place: 3,
    img: "black-queen.png"
  },
  kingE8 = {
    name: 'kingE8',
    place: 4,
    img: "black-king.png"
  },
  
  bishopF8 = {
    name: 'bishopF8',
    place: 5,
    img: "black-bishop.png"
  },
  knightG8 = {
    name: 'knightG8',
    place: 6,
    img: "black-horse.png"
  },
  rookH8 = {
    name: 'rookH8',
    place: 7,
    img: "black-rook.png"
  },
  pawnA7 = {
    name: 'pawnA7',
    place: 8,
    img: "black-pawn.png"
  },
  pawnB7 = {
    name: 'pawnB7',
    place: 9,
    img: "black-pawn.png"
  },
  
  pawnC7 = {
    name: 'pawnC7',
    place: 10,
    img: "black-pawn.png"
  },
  pawnD7 = {
    name: 'pawnD7',
    place: 11,
    img: "black-pawn.png"
  },
  pawnE7 = {
    name: 'pawnE7',
    place: 12,
    img: "black-pawn.png"
  },
  pawnF7 = {
    name: 'pawnF7',
    place: 13,
    img: "black-pawn.png"
  },
  pawnG7 = {
    name: 'pawnG7',
    place: 14,
    img: "black-pawn.png"
  },
  pawnH7 = {
    name: 'pawnH7',
    place: 15,
    img: "black-pawn.png"
  },
]


// white 
const whitePieces = [
   rookA1 = {
    name: 'rookA8',
    place: 56,
    img: "white-rook.png"
  },
   knightB1 = {
    name: 'knightB8',
    place: 57,
    img: "white-horse.png"
  },
   bishopC1 = {
    name: 'bishopC8',
    place: 58,
    img: "white-bishop.png"
  },
   queenD1 = {
    name: 'queenD8',
    place: 59,
    img: "white-queen.png"
  },
   kingE1 = {
    name: 'kingE8',
    place: 60,
    img: "white-king.png"
  },
  
   bishopF1 = {
    name: 'bishopF8',
    place: 61,
    img: "white-bishop.png"
  },
   knightG1 = {
    name: 'knightG8',
    place: 62,
    img: "white-horse.png"
  },
   rookH1 = {
    name: 'rookH8',
    place: 63,
    img: "white-rook.png"
  },
   pawnA2 = {
    name: 'pawnA7',
    place: 48,
    img: "white-pawn.png"
  },
   pawnB2 = {
    name: 'pawnB7',
    place: 49,
    img: "white-pawn.png"
  },
  
   pawnC2 = {
    name: 'pawnC7',
    place: 50,
    img: "white-pawn.png"
  },
   pawnD2 = {
    name: 'pawnD7',
    place: 51,
    img: "white-pawn.png"
  },
   pawnE2 = {
    name: 'pawnE7',
    place: 52,
    img: "white-pawn.png"
  },
   pawnF2 = {
    name: 'pawnF7',
    place: 53,
    img: "white-pawn.png"
  },
   pawnG2 = {
    name: 'pawnG7',
    place: 54,
    img: "white-pawn.png"
  },
   pawnH2 = {
    name: 'pawnH7',
    place: 55,
    img: "white-pawn.png"
  }
]



newPiece()

function newPiece(){
  for (let i=0; i<64; i++) {
    place[i].innerHTML = '';
  }
  for (let i=0; i<16; i++){
    place[blackPieces[i].place].innerHTML = `<div id="${blackPieces[i].name}" class="center"> <img src=${blackPieces[i].img} width="50px">`;
  }
  for (let i=0; i<16; i++){
    place[whitePieces[i].place].innerHTML = `<div id="${whitePieces[i].name}" class="center"> <img src=${whitePieces[i].img} width="50px">`;
  }
  

}

 {
  const center2 = document.querySelectorAll('.center');

  center2.forEach(piece => {
    piece.addEventListener('click', ()  => {
        checkPosition();
       })
  })
  
  
  
  function checkPosition() {
    // golden script XDD
   
    for (let i = 0; i < place.length; i++) {
      place[i].addEventListener("click", () => {
            let newPosition = i;
            // console.log(newPosition)
            selectPawn(newPosition)
            console.log(newPosition)
           
          });
         
        }
  }
  
  let index = 0;
  function selectPawn(newPosition) {
    
    for (let j=0; j<16; j++) {
  
      if (whitePieces[j].place == newPosition) { index = j; break; }
     
    }
    whitePieces[index].place = newPosition;
    console.log( whitePieces[index])

    newPiece()
  }
  
}



