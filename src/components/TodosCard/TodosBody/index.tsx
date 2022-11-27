import { Fragment, useContext, useState, useMemo } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import { LIST_TAB } from "../../../constant";
import TodosContext from "../../../store/todo-context";

import ItemTodo from "./ItemTodo";
import ItemAction from "./ItemAction";
import TabButton from "../../TabButton";
import { Todos } from "../../../types";

const TodosBody = () => {
  const todosCtx = useContext(TodosContext);
  const {
    items,
    filterType,
    checkTodoHandler,
    removeTodoHandler,
    clearTodoCompleteHandler,
  } = todosCtx;
  const [filterItems, setFilterItems] = useState<Todos[]>([]);
  const tabList = useMemo(() => ({ group: "tabButton2", list: LIST_TAB }), []);

  const filterTodos = (todo: Todos) => {
    switch (filterType) {
      case "All":
        return true;
      case "Active":
        return !todo.isChecked;
      case "Complete":
        return todo.isChecked;
    }
  };

  return (
    <Fragment>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={filterType === "All" ? todosCtx.setTodos : setFilterItems}
        className="rounded-md bg-white dark:bg-very-dark-desaturated-blue drop-shadow-2xl"
      >
        <AnimatePresence>
          {items.filter(filterTodos).map((item) => (
            <Reorder.Item
              key={item.id}
              value={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ItemTodo
                title={item.title}
                id={item.id}
                isChecked={item.isChecked}
                onRemoveHandler={removeTodoHandler.bind(null, item.id)}
                onCheckHandler={checkTodoHandler.bind(null, item.id)}
              />
            </Reorder.Item>
          ))}
        </AnimatePresence>
        <ItemAction
          itemTotal={items.filter(filterTodos).length}
          onCompleteHandler={clearTodoCompleteHandler}
        />
      </Reorder.Group>
      <TabButton
        tabList={tabList}
        className="bg-white dark:bg-very-dark-desaturated-blue mt-8 justify-center p-[1rem] shadow-2xl z-10 rounded-md md:hidden"
      />
    </Fragment>
  );
};

export default TodosBody;
