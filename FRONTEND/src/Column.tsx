import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import '@atlaskit/css-reset';
interface Props {
  id: string;
  index: number;
  title: string;
  tasks: {
    id: string;
    title: string;
  }[];
}

function Column({ id, index, title, tasks }: Props) {
  console.log({ id, index, title, tasks })
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h2 {...provided.dragHandleProps}>{title}</h2>
          <Droppable droppableId={id}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    index={index}
                    title={task.title}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
