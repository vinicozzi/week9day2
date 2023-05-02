class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const grid = document.createElement('ul');
    grid.classList.add('ttt-grid');
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const cell = document.createElement('li');
        cell.dataset.rowIdx = rowIdx;
        cell.dataset.colIdx = colIdx;
        grid.appendChild(cell);
      }
    }
    this.el.appendChild(grid);
    this.el.addEventListener('click', this.handleClick.bind(this))
  }

  // handleClick(e) {
  //   const cell = e.target;
  //   const value = cell.value;
  //   const mark = { value: value }
  //   localStorage.setItem("mark", JSON.stringify(mark))
  // }
  handleClick(e) {
    // const cell = e.target;
    // const value = cell.value;
    // debugger
    // const mark = 'X'
    // debugger
    // localStorage.setItem("mark", JSON.stringify(mark));
    const cell = e.target;
    if (cell.tagName === 'LI') { // Only handle clicks on the grid cells
      const mark = this.game.currentPlayer
      cell.innerText = mark;
      // this.makeMove(mark);
      while (!this.game.isOver()) {
        this.game.swapTurn();
        // this.game.playMove(mark);
        // this.handleGameOver();
      }
    }
    // this.handleGameOver();
  }

  // e.preventDefault()

  //   let inputEl = document.querySelector("input[name='add-grocery']") // input element
  //   let value = inputEl.value // banana

  //   const item = { value: value } // { value: banana }
  //   lsItems.push(item)
  //   localStorage.setItem("items", JSON.stringify(lsItems))

  //   updateList();

  //   groceryForm.reset()

  makeMove(square) {
    this.game.playMove(square);
    
  }
  
  handleGameOver() {
    alert("You Lose!")
  }
}

export default View;