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
    this.el.addEventListener('click', this.handleClick)
  }

  handleClick(e) {
    debugger 
  }

  makeMove(square) {
    this.game.playMove;
  }
  
  handleGameOver() {
  }
}

export default View;