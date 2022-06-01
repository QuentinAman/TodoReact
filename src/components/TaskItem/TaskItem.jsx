import React from "react";
import { Button, Icon, HandleTaskModal } from "..";
import "./taskitem.scss";

export const TaskItem = ({ task, onDone, onDelete, onEdit }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <li className="TaskItem">
      <div
        onClick={onDone}
        className={`TaskItem-desc`}
      >
        <div className={`TaskItem-line ${task.done ? "TaskItem-extend" : ""}`} />
        <span className={`TaskItem-text${task.done ? " TaskItem-done" : ""}`}>{task.text}</span>
      </div>
      <div className="TaskItem-actions">
        <div className="TaskItem-editDelete">
          <Button
            className="TaskItem-action"
            aria-label="Edit task"
            onClick={() => setModal(true)}
          >
            <Icon name="edit" />
          </Button>
          <Button
            className="TaskItem-action"
            aria-label="Delete task"
            onClick={onDelete}
          >
            <Icon name="remove" />
          </Button>
        </div>
        <div className="TaskItem-checkbox">
          <input
            className="TaskItem-box"
            type="checkbox"
            onChange={onDone}
            checked={task.done}
          />
          {task.done && (
            <Icon
              name="checked"
              className="TaskItem-check"
            />
          )}
        </div>
      </div>
      {modal && (
        <HandleTaskModal
          onClose={() => setModal(false)}
          onConfirm={onEdit}
          value={task.text}
        />
      )}
    </li>
  );
};
