var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft      = function(){
  this._miner.dir = (this._miner.dir + 3) % 4;
};

Maze.prototype.turnRight     = function(){
  this._miner.dir = (this._miner.dir + 1) % 4;
};

Maze.prototype.isPathForward = function(){
   switch(this._miner.dir) {
     case 0:
       return this.checkIfPossible(this._miner.row - 1, this._miner.col);
     case 1:
       return this.checkIfPossible(this._miner.row, this._miner.col + 1);
     case 2:
       return this.checkIfPossible(this._miner.row + 1, this._miner.col);
     case 3:
       return this.checkIfPossible(this._miner.row, this._miner.col - 1);
     default:
       break;
   }
  };

  Maze.prototype.checkIfPossible = function(i, j) {
   if (i >= 0 && j >= 0 && i < this._maze.length && j < this._maze[i].length){
     return this._maze[i][j];
   }
   return false;
};


Maze.prototype.isPathLeft    = function(){
  switch(this._miner.dir) {
    case 0:
      return this.checkIfPossible(this._miner.row, this._miner.col - 1);
    case 1:
      return this.checkIfPossible(this._miner.row - 1, this._miner.col);
    case 2:
      return this.checkIfPossible(this._miner.row, this._miner.col + 1);
    case 3:
      return this.checkIfPossible(this._miner.row + 1, this._miner.col);
    default:
      break;
  }
};

Maze.prototype.isPathRight   = function(){
  switch(this._miner.dir) {
    case 0:
      return this.checkIfPossible(this._miner.row, this._miner.col + 1);
    case 1:
      return this.checkIfPossible(this._miner.row + 1, this._miner.col);
    case 2:
      return this.checkIfPossible(this._miner.row, this._miner.col - 1);
    case 3:
      return this.checkIfPossible(this._miner.row - 1, this._miner.col);
    default:
      break;
  }
};

Maze.prototype.moveForward   = function(){
  if (this.isPathForward()) {
    switch(this._miner.dir) {
      case 0:
        this._miner.row--;
        return true;
      case 1:
        this._miner.col++;
        return true;
      case 2:
        this._miner.row++;
        return true;
      case 3:
        this._miner.col--;
        return true;
    }
  } else {
    return false;
  }
};

Maze.prototype.notDone       = function(){
  if (this._miner.row === this._exit.row && this._miner.column === this._exit.column) {
    return true;
  } else {
    return false;
  }
};

module.exports = Maze;
