import React, { useState } from "react";
import { Input, Modal, Button } from "../../..";
import "./handletaskmodal.scss";

export const HandleTaskModal = ({ value = "", onConfirm, onClose }) => {
  const [task, setTask] = useState(value);
  const [error, setError] = useState("");

  const handleValidate = () => {
    if (task.length === 0) {
      setError("You must enter a task");
      return false;
    }
    onClose();
    onConfirm(task);
  };

  return (
    <Modal onClose={onClose}>
      <div className="HandleTaskModal">
        <h2>{value ? "Update" : "Add"} Task</h2>
        <Input
          placeholder={value ? "Change the Task here" : "Add a Task here"}
          value={task}
          onChange={setTask}
          error={error}
          onEnter={handleValidate}
        />
        <Button
          className="HandleTaskModal-save"
          onClick={handleValidate}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
