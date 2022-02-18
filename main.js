//general thinks 
const place = document.querySelectorAll('.place');
const center = document.querySelectorAll('.center');

const test = document.querySelector('.test');



// pieces 
const pieces = [
  rookA8 = {
    name: 'rookA8',
    place: 0,
    img: "black-rook.png",
    color: "black"
  },
  knightB8 = {
    name: 'knightB8',
    place: 1,
    img: "black-horse.png",
    color: "black"
  },
  bishopC8 = {
    name: 'bishopC8',
    place: 2,
    img: "black-bishop.png",
    color: "black"
  },
  queenD8 = {
    name: 'queenD8',
    place: 3,
    img: "black-queen.png",
    color: "black"
  },
  kingE8 = {
    name: 'kingE8',
    place: 4,
    img: "black-king.png",
    color: "black"
  },
  
  bishopF8 = {
    name: 'bishopF8',
    place: 5,
    img: "black-bishop.png",
    color: "black"
  },
  knightG8 = {
    name: 'knightG8',
    place: 6,
    img: "black-horse.png",
    color: "black"
  },
  rookH8 = {
    name: 'rookH8',
    place: 7,
    img: "black-rook.png",
    color: "black"
  },
  pawnA7 = {
    name: 'pawnA7',
    place: 8,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnB7 = {
    name: 'pawnB7',
    place: 9,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnC7 = {
    name: 'pawnC7',
    place: 10,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnD7 = {
    name: 'pawnD7',
    place: 11,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnE7 = {
    name: 'pawnE7',
    place: 12,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnF7 = {
    name: 'pawnF7',
    place: 13,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnG7 = {
    name: 'pawnG7',
    place: 14,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  pawnH7 = {
    name: 'pawnH7',
    place: 15,
    img: "black-pawn.png",
    color: "black",
    type: "pawn"
  },
  rookA1 = {
    name: 'rookA8',
    place: 56,
    img: "white-rook.png",
    color: "white"
  },
   knightB1 = {
    name: 'knightB8',
    place: 57,
    img: "white-horse.png",
    color: "white"
  },
   bishopC1 = {
    name: 'bishopC8',
    place: 58,
    img: "white-bishop.png",
    color: "white"
  },
   queenD1 = {
    name: 'queenD8',
    place: 59,
    img: "white-queen.png",
    color: "white"
  },
   kingE1 = {
    name: 'kingE8',
    place: 60,
    img: "white-king.png",
    color: "white"
  },
  
   bishopF1 = {
    name: 'bishopF8',
    place: 61,
    img: "white-bishop.png",
    color: "white"
  },
   knightG1 = {
    name: 'knightG8',
    place: 62,
    img: "white-horse.png",
    color: "white"
  },
   rookH1 = {
    name: 'rookH8',
    place: 63,
    img: "white-rook.png",
    color: "white"
  },
   pawnA2 = {
    name: 'pawnA7',
    place: 48,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnB2 = {
    name: 'pawnB7',
    place: 49,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
  
   pawnC2 = {
    name: 'pawnC7',
    place: 50,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnD2 = {
    name: 'pawnD7',
    place: 51,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnE2 = {
    name: 'pawnE7',
    place: 52,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnF2 = {
    name: 'pawnF7',
    place: 53,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnG2 = {
    name: 'pawnG7',
    place: 54,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  },
   pawnH2 = {
    name: 'pawnH7',
    place: 55,
    img: "white-pawn.png",
    color: "white",
    type: "pawn"
  }
]



let moveCounter = 1;
// i need to optimize game state




function newPiece(){
  for (let i=0; i<64; i++) {
    place[i].innerHTML = '';
  }
  for (let i=0; i<32; i++){
    place[pieces[i].place].innerHTML = `<div id="${pieces[i].name}" class="center"> <img src=${pieces[i].img} width="50px">`;
  }
  moveCounter++
  whiteTour()
}







function whiteTour() {
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
           
            selectPawn(newPosition)
            
           
          });
         
        }
  }
  
  let index = 0;
  function selectPawn(newPosition) {
    for (let j=0; j<32; j++) {
  
      if (pieces[j].place == newPosition) { index = j; break; }
     
    }
    /*
    if (pieces[index].type === 'pawn') {
      let viableMoves = index + 8;
      console.log(viableMoves)
    }
    */

    console.log(newPosition)
    pieces[index].place = newPosition;
    
    
    
    newPiece()
  }
 
 
}



 
newPiece()




