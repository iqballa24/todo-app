import React, { useState } from "react";
import TodosContext from "./todo-context";
import { Todos, TodoContextObj } from "../types";

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: 1,
      title: "Membersihkan tempat tidur",
      isChecked: true,
    },
    {
      id: 2,
      title: "Menyapu kamar",
      isChecked: false,
    },
    {
      id: 3,
      title: "Tidur malam selama 8 jam",
      isChecked: false,
    },
    {
      id: 4,
      title: "Ngopi dulu jangan lupa",
      isChecked: true,
    },
  ]);
  const [filterType, setFilterType] = useState("All");

  const addTodoHandler = (title: string) => {
    const newTodo = new Todos(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  const findIndexTodos = (id: number) => {
    return todos.findIndex((item) => item.id === id);
  };

  const checkTodoHandler = (id: number) => {
    const index = findIndexTodos(id);
    const newTodo = [...todos];
    newTodo[index].isChecked = !newTodo[index].isChecked;
    setTodos(newTodo);
  };

  const removeTodoHandler = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCompleteTodoHandler = () => {
    setTodos((prev) => prev.filter((item) => !item.isChecked));
  };

  const changeTypeFilter = (type: string) => {
    setFilterType(type);
  };

  const contextValue: TodoContextObj = {
    items: todos,
    filterType: filterType,
    addTodoHandler: addTodoHandler,
    removeTodoHandler: removeTodoHandler,
    clearTodoCompleteHandler: clearCompleteTodoHandler,
    checkTodoHandler: checkTodoHandler,
    changeTypeFilter: changeTypeFilter
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
