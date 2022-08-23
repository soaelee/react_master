import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const onDragEnd = () => {};
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="one">
            {(magic) => (
              <ul ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId="one_1" index={0}>
                  {(magic) => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                      <span {...magic.dragHandleProps}>❤</span>
                      HELLO_1
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId="one_2" index={1}>
                  {(magic) => (
                    <li
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      HELLO_2
                    </li>
                  )}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;
