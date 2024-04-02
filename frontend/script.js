document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
  
    // Sample data for boards and tasks
    const boards = [
      { name: 'To Do', tasks: ['Task 1', 'Task 2', 'Task 3'] },
      { name: 'In Progress', tasks: ['Task 4', 'Task 5'] },
      { name: 'Done', tasks: ['Task 6'] }
    ];
  
    function renderBoards() {
      app.innerHTML = '';
  
      boards.forEach(board => {
        const boardElem = document.createElement('div');
        boardElem.classList.add('container');
  
        const boardTitle = document.createElement('h2');
        boardTitle.textContent = board.name;
  
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('board');
  
        board.tasks.forEach(task => {
          const taskElem = document.createElement('div');
          taskElem.classList.add('column');
  
          const taskTitle = document.createElement('h3');
          taskTitle.textContent = task;
  
          taskElem.appendChild(taskTitle);
          tasksContainer.appendChild(taskElem);
        });
  
        boardElem.appendChild(boardTitle);
        boardElem.appendChild(tasksContainer);
        app.appendChild(boardElem);
      });
    }
  
    renderBoards();
  });
  