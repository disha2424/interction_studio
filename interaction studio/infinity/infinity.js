const maze = document.getElementById('maze');
const message = document.getElementById('message');
const mazeSize = 10; // Size of the maze grid
let currentPosition = { x: 0, y: 0 };

// Generate the maze of letters
for (let i = 0; i < mazeSize; i++) {
  for (let j = 0; j < mazeSize; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = j;
    cell.dataset.y = i;
    maze.appendChild(cell);
  }
}

// Handle user navigation
maze.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('cell')) {
    const targetX = parseInt(target.dataset.x);
    const targetY = parseInt(target.dataset.y);
    if (Math.abs(targetX - currentPosition.x) <= 1 && Math.abs(targetY - currentPosition.y) <= 1) {
      currentPosition.x = targetX;
      currentPosition.y = targetY;
      target.style.backgroundColor = 'gray';
      checkEndOfMaze();
    }
  }
});

// Check if the user reached the end of the maze
function checkEndOfMaze() {
  if (currentPosition.x === mazeSize - 2 && currentPosition.y === mazeSize - 2) {
    message.innerHTML = "Congratulations! You've reached the end of the maze.";
    message.style.display = 'block';
  }
}
