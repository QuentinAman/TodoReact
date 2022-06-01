import React from "react";
import { Icon } from "../Icon/Icon";
import "./todoitem.scss";

export const TodoItem = ({ todo, onDone }) => {
  return (
    <li className="TodoItem">
      <div className={`TodoItem-desc`}>
        <div className={`TodoItem-line ${todo.done ? "TodoItem-extend" : ""}`} />
        <span
          onClick={onDone}
          className={`TodoItem-text${todo.done ? " TodoItem-done" : ""}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="TodoItem-checkbox">
        <input
          className="TodoItem-box"
          type="checkbox"
          onChange={onDone}
          checked={todo.done}
        />
        {todo.done && (
          <Icon
            name="checked"
            className="TodoItem-check"
          />
        )}
      </div>
    </li>
  );
};
