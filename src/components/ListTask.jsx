import React from "react";

const ListTask = ({ task, index, toggleTask }) => {
  return (
    <div
      onClick={() => toggleTask(index)}
      className={
        task.completed
          ? "flex items-center line-through text-slate-500 bg-slate-50 w-full p-1 rounded-md"
          : "flex items-center bg-slate-50 w-full p-1 rounded-md"
      }
    >
      {task.text}
    </div>
  );
};

export default ListTask;
