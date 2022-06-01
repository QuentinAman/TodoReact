import react, { useState } from "react";
import { TodoItem, Icon, Button, Modal, Input } from "..";
import "./todolist.scss";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");

  const date = new Date();
  const weekday = date.toLocaleString("en-en", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-en", { month: "long" });

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (todo.length === 0) {
      setError("You must enter a todo");
      return;
    }

    const newTodos = [...todos];
    newTodos.push({ text: todo, done: false });
    setTodos(newTodos);
    setTodo("");
    setModal(false);
    setError("");
  };

  const handleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const getOrdinalNumber = (date) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <div className="TodoList-completeDate">
          <p className="TodoList-shortDate">
            <span className="TodoList-weekday">{weekday}</span>,{" "}
            <span className="TodoList-weekNumber">
              {day}
              <span className="TodoList-ordinal">{getOrdinalNumber(day)}</span>
            </span>
          </p>
          <p className="TodoList-month">{month}</p>
        </div>
        <p>
          <span className="TodoList-tasksNumber">{todos.length}</span> Task{todos.length > 1 ? "s" : ""}
        </p>
      </div>
      <ul className="TodoList-list">
        {todos.length ? (
          todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              onRemove={() => handleDelete(index)}
              onDone={() => handleDone(index)}
              key={index}
            />
          ))
        ) : (
          <li className="TodoList-empty">
            <span>No todos yet</span>
          </li>
        )}
      </ul>
      <Button
        onClick={() => {
          setTodo("");
          setError("");
          setModal(!modal);
        }}
        className={`TodoList-button ${modal ? "TodoList-button--active" : ""}`}
        aria-label="Add a new todo"
      >
        <Icon
          name="add"
          width="3.5rem"
        />
      </Button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <div className="TodoList-modal">
            <h2>Add Task</h2>
            <Input
              placeholder="Add a Task here"
              value={todo}
              onChange={setTodo}
              error={error}
              onEnter={handleAdd}
            />
            <Button
              className="TodoList-save"
              onClick={handleAdd}
            >
              Save
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
