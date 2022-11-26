import { Fragment, useContext } from "react";
import { LIST_TAB } from "../../../constant";
import TodosContext from "../../../store/todo-context";

import ItemTodo from "./ItemTodo";
import ItemAction from "./ItemAction";
import TabButton from "../../TabButton";

const TodosBody = () => {
  const todosCtx = useContext(TodosContext);
  const { items, filterType } = todosCtx;
  const tabList = { group: "tabButton2", list: LIST_TAB };

  const onRemoveHandler = (id: number) => {
    todosCtx.removeTodoHandler(id);
  };

  const onClearCompleteTodoHandler = () => {
    todosCtx.clearTodoCompleteHandler();
  };

  const onCheckTodoHandler = (id: number) => {
    todosCtx.checkTodoHandler(id);
  };

  let filterItems = [];

  if (filterType === "Active") {
    filterItems = items.filter((item) => !item.isChecked);
  } else if (filterType === "Complete") {
    filterItems = items.filter((item) => item.isChecked);
  } else {
    filterItems = [...items];
  }

  return (
    <Fragment>
      <ul className="rounded-md bg-white dark:bg-very-dark-desaturated-blue drop-shadow-2xl">
        {filterItems.map((item) => (
          <ItemTodo
            key={item.id}
            title={item.title}
            id={item.id}
            isChecked={item.isChecked}
            onRemoveHandler={onRemoveHandler.bind(null, item.id)}
            onCheckHandler={onCheckTodoHandler.bind(null, item.id)}
          />
        ))}
        <ItemAction
          itemTotal={filterItems.length}
          onCompleteHandler={onClearCompleteTodoHandler}
        />
      </ul>
      <TabButton
        tabList={tabList}
        className="bg-white dark:bg-very-dark-desaturated-blue mt-8 justify-center p-[1rem] shadow-2xl z-10 rounded-md md:hidden"
      />
    </Fragment>
  );
};

export default TodosBody;
