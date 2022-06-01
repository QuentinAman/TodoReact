import React from "react";
import { Button, Icon, Modal } from "..";
import { HandleTaskModal } from "../Modal/ModalModels";
import "./todoitem.scss";

export const TodoItem = ({ todo, onDone, onDelete, onEdit }) => {
  const [modal, setModal] = React.useState(false);

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
      <div className="TodoItem-actions">
        <div className="TodoItem-editDelete">
          <Button
            className="TodoItem-action"
            aria-label="Edit todo"
            onClick={() => setModal(true)}
          >
            <Icon name="edit" />
          </Button>
          <Button
            className="TodoItem-action"
            aria-label="Delete todo"
            onClick={onDelete}
          >
            <Icon name="remove" />
          </Button>
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
      </div>
      {modal && (
        <HandleTaskModal
          onClose={() => setModal(false)}
          onConfirm={onEdit}
          value={todo.text}
        />
      )}
    </li>
  );
};
