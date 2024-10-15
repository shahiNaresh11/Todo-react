import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../TodoContext/TodoContext";


function TodoList() {

  const { list, setList } = useContext(TodoContext);
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              const updateLists = list.map(t => {
                if (t.id === todo.id) {
                  todo.finished = isFinished
                }
                return t;
              })
              setList(updateLists)


            }}
            onDelete={() => {
              const updateList = list.filter(t => t.id !== todo.id)
              setList(updateList);

            }}

            onEdit={(todoText) => {
              const updateLists = list.map(t => {
                if (t.id === todo.id) {
                  todo.todoData = todoText;  // Correcting the field to 'todoData'
                }
                return t;
              })
              setList(updateLists)
            }}




          />
        ))}
    </div>
  );
}
export default TodoList;
