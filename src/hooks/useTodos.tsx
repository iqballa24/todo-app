import { useCallback } from "react";
import { Todos } from "../types";

export default function useTodos(TODOS_KEY: string) {
  const storedTodosItems = localStorage.getItem(TODOS_KEY);

  if (!storedTodosItems) {
    const data = JSON.stringify([]);
    localStorage.setItem(TODOS_KEY, data);
  }

  const dataParse = JSON.parse(storedTodosItems ? storedTodosItems : "[]");
  const initialTodos = dataParse;

  const saveToLocalStorage = useCallback((data: Todos[]) => {
    const todosParse = JSON.stringify(data);
    localStorage.setItem(TODOS_KEY, todosParse);
  }, []);

  return { initialTodos, saveToLocalStorage };
}
