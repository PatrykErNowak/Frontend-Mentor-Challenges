import Task from './Task';
import TasksFooter from './TasksFooter';
import { filterTasks } from '../utils/filterTasks';
import { useAppDispatch, useAppSelector } from '../App/store';
import Message from './Message';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { newOrder } from '../features/todos/tasksSlice';

function TasksContainer() {
  const dispatch = useAppDispatch();
  const { show, todos } = useAppSelector((store) => store.tasks);
  const tasks = filterTasks(todos, show);

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }
    dispatch(newOrder({ source: result.source.index, destination: result.destination.index }));
  }

  return (
    <div className="rounded-md overflow-hidden shadow-custom">
      {todos.length > 0 && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} aria-label="Tasks list">
                {tasks.map((task, index) => (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Task id={task.id} isComplete={task.isComplete} title={task.title} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {todos.length > 0 && tasks.length === 0 && <Message>No results found ❌</Message>}
      {todos.length === 0 && <Message>It's look like you don't have nothing to do 👌</Message>}
      <TasksFooter />
    </div>
  );
}

export default TasksContainer;
