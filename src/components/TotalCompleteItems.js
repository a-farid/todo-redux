import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h3 className="mt-3"><b>Total complete items:</b> {todos.length}</h3>;
};

export default TotalCompleteItems;
