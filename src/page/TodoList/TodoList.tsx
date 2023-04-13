import { useState } from "react";
import { TodoItem } from "../../models/types";
import './TodoList.css'
const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: newTodoText,
      };
      setTodoList([...todoList, newTodo]);
      setNewTodoText("");
    }
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="todolist">
      <div className="header-todolist">
        To Do Lít
      </div>
      <div className="app-todolist">
      <input
        type="text"
        value={newTodoText}
        className="input-todolist"
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button className="button-todolist" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="body-todolist">
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input className="item-todolist" value={todo.text}/>
            <button  className="button-todolist" onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default TodoList;
