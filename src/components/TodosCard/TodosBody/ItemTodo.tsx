import { memo, useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import classes from "./ItemTodo.module.css";
import { TodoItem } from "../../../types";

const ItemTodo: React.FC<TodoItem> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const onClickItemTodo = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <li className={classes.item_todo}>
      <div className={classes.wrapper_input} onClick={onClickItemTodo}>
        <input
          type="checkbox"
          className={classes.input}
          checked={isChecked}
          onChange={onClickItemTodo}
        />
        <span className={classes.checkmark}></span>
        <span className={classes.item_name}>{props.title}</span>
      </div>
      <GiTireIronCross className={classes.item_delete} />
    </li>
  );
};

export default memo(ItemTodo);
