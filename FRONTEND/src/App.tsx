import React, { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface Board {
  id: number;
  title: string;
  tasks: Task[];
}

function App() {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: 1,
      title: 'To Do',
      tasks: [
        { id: 1, title: 'Task 1', description: 'Do this task' },
        { id: 2, title: 'Task 2', description: 'Do that task' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [{ id: 3, title: 'Task 3', description: 'Do this task' }],
    },
    {
      id: 3,
      title: 'Done',
      tasks: [{ id: 4, title: 'Task 4', description: 'Do this task' }],
    },
  ]);

  const [dragging, setDragging] = useState<boolean>(false);
  const [dragItem, setDragItem] = useState<Task | null>(null);
  const [dropId, setDropId] = useState<number | null>(null);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>, item: Task) {
    setDragging(true);
    setDragItem(item);
    e.dataTransfer.effectAllowed = 'move' ?? 'none';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
    e.dataTransfer?.setDragImage(e.currentTarget, 0, 0);
  }

  function handleDragEnd() {
    setDragging(false);
    setDragItem(null);
    if (dropId !== null) {
      const newBoards = [...boards];
      let sourceBoardId = -1;
      let targetBoardId = -1;
      let sourceTaskIndex = -1;
      newBoards.forEach((board, boardIndex) => {
        board.tasks.forEach((task, taskIndex) => {
          if (task.id === dragItem?.id) {
            sourceBoardId = board.id;
            sourceTaskIndex = taskIndex;
          }
          if (board.id === dropId) {
            targetBoardId = board.id;
          }
        });
      });
      if (sourceBoardId !== -1 && sourceTaskIndex !== -1 && targetBoardId !== -1) {
        const taskToMove = newBoards[sourceBoardId - 1].tasks.splice(sourceTaskIndex, 1)[0];
        newBoards[targetBoardId - 1].tasks.push(taskToMove);
        setBoards(newBoards);
      }
      setDropId(null);
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>, id: number) {
    e.preventDefault();
    setDropId(id);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, id: number) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="board-container">
        {boards.map((board) => (
          <div
            className="board"
            key={board.id}
            onDragOver={(e) => handleDragOver(e, board.id)}
            onDrop={(e) => handleDrop(e, board.id)}
          >
            <h2>{board.title}</h2>
            <div className="task-list">
              {board.tasks.map((task) => (
                <div
                  className="task"
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                  onDragEnd={handleDragEnd}
                >
                  {task.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;






