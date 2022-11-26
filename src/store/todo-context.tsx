import React from "react";
import { TodoContextObj } from "../types";

const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  filterType: "",
  setTodos: (e: any) => {},
  addTodoHandler: (title: string) => {},
  removeTodoHandler: (id: number) => {},
  clearTodoCompleteHandler: () => {},
  checkTodoHandler: (id: number) => {},
  changeTypeFilter: (type: string) => {},
});

export default TodosContext;
