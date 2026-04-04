const board = document.querySelector('#board');
const blockheight = 50
const blockwidth = 50

const cols = Math.floor(board.clientWidth / blockwidth);
const rows = Math.floor(board.clientHeight / blockheight);

for(let row = 0; row<rows; row++){
    for(let col = 0; col<cols; col++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
    }
}