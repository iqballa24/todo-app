import React, { useState, useEffect } from "react";
import { Todos, TodoContextObj } from "../types";
import useTodos from "../hooks/useTodos";
import TodosContext from "./todo-context";
import { TODOS_KEY } from "../constant";

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const { initialTodos, saveToLocalStorage } = useTodos(TODOS_KEY);
  const [todos, setTodos] = useState<Todos[]>(initialTodos);
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

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  const contextValue: TodoContextObj = {
    items: todos,
    filterType: filterType,
    addTodoHandler: addTodoHandler,
    removeTodoHandler: removeTodoHandler,
    clearTodoCompleteHandler: clearCompleteTodoHandler,
    checkTodoHandler: checkTodoHandler,
    changeTypeFilter: changeTypeFilter,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
