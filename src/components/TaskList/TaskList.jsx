import React, { useState } from "react";
import { TaskItem, Icon, Button, HandleTaskModal } from "..";
import "./tasklist.scss";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  const date = new Date();
  const weekday = date.toLocaleString("en-en", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-en", { month: "long" });

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleAdd = (task) => {
    const newTasks = [...tasks];
    newTasks.push({ text: task, done: false });
    setTasks(newTasks);
    setModal(false);
  };

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleEdit = (index, text) => {
    const newTasks = [...tasks];
    newTasks[index].text = text;
    setTasks(newTasks);
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
    <div className="TaskList">
      <div className="TaskList-header">
        <div className="TaskList-completeDate">
          <p className="TaskList-shortDate">
            <span className="TaskList-weekday">{weekday}</span>,{" "}
            <span className="TaskList-weekNumber">
              {day}
              <span className="TaskList-ordinal">{getOrdinalNumber(day)}</span>
            </span>
          </p>
          <p className="TaskList-month">{month}</p>
        </div>
        <p>
          <span className="TaskList-tasksNumber">{tasks.length}</span> Task{tasks.length > 1 ? "s" : ""}
        </p>
      </div>
      <ul className="TaskList-list">
        {tasks.length ? (
          tasks.map((task, index) => (
            <TaskItem
              onDelete={() => handleDelete(index)}
              task={task}
              onRemove={() => handleDelete(index)}
              onDone={() => handleDone(index)}
              onEdit={(text) => handleEdit(index, text)}
              key={index}
            />
          ))
        ) : (
          <li className="TaskList-empty">
            <span>No tasks yet</span>
          </li>
        )}
      </ul>
      <Button
        onClick={() => {
          setModal(!modal);
        }}
        className={`TaskList-button ${modal ? "TaskList-button--active" : ""}`}
        aria-label="Add a new Task"
      >
        <Icon
          name="add"
          width="3.5rem"
        />
      </Button>
      {modal && (
        <HandleTaskModal
          onConfirm={handleAdd}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
};
