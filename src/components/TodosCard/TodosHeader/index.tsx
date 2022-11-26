import { memo, useContext } from "react";
import TodosContext from "../../../store/todo-context";
import SwitchToggler from "../../SwitchToggler";
import Input from "../../Input";

const TodosHeader = () => {
  const todosCtx = useContext(TodosContext);

  const submitHandler = (title: string) => {
    todosCtx.addTodoHandler(title);
  };

  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-row justify-between items-center mb-9">
        <h1 className="uppercase text-white text-2xl sm:text-4xl tracking-[.30em] font-bold">
          todo
        </h1>
        <SwitchToggler />
      </div>
      <Input onAddHandler={submitHandler} />
    </div>
  );
};

export default memo(TodosHeader);
