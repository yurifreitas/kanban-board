import { Draggable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
interface Props {
  id: string;
  index: number;
  title: string;
}

function Task({ id, index, title }: Props) {
   console.log({ id, index, title })
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="task" key={id}>{title}</div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
