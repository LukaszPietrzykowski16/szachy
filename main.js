//general thinks 
const place = document.querySelectorAll('.place');
const center = document.querySelectorAll('.center');

const test = document.querySelector('#test');


// pieces 
const rookA8 = {
  name: 'rookA8',
  place: 0,
  img: "black-rook.png"
}


newPiece()

function newPiece(){
  place[rookA8.place].innerHTML = `<div id="${rookA8.name}" class="center"> <img src=${rookA8.img} width="50px">`;
}


const bruh = document.querySelector('#rookA8');

bruh.addEventListener('click', () => {
  bruh.classList.add('red');
  checkPosition()
 
})


function checkPosition() {
  // golden script XDD
  for (let i = 0; i < place.length; i++) {
    place[i].addEventListener("click", function() {
          let newPosition = i;
          changePosition(newPosition)
        });
      }
  




}

function changePosition(newPosition) {
  removePiece()
  rookA8.place = newPosition;
  console.log(rookA8.place);
  newPiece()
  
}

function removePiece() {
  place[rookA8.place].innerHTML = '';
}


