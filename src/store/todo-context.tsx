import React from "react";
import { TodoContextObj } from "../types";

const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodoHandler: (title: string) => {},
  removeTodoHandler: (id: number) => {},
  clearTodoCompleteHandler: (id: number[]) => {},
});

export default TodosContext;
