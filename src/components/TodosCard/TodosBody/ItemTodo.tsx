import { memo, useEffect, useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import classes from "./ItemTodo.module.css";

import { Todos } from "../../../types";

interface Props extends Todos {
  onRemoveHandler: () => void;
  onCheckHandler: () => void;
}

const ItemTodo: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const onClickItemTodo = () => {
    setIsChecked((prev) => !prev);
    props.onCheckHandler();
  };

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, []);

  return (
    <li className={classes.item_todo}>
      <div className={classes.wrapper_input} onClick={onClickItemTodo}>
        <input
          id={props.id.toString()}
          type="checkbox"
          className={classes.input}
          checked={isChecked}
          onChange={onClickItemTodo}
        />
        <span className={classes.checkmark}></span>
        <label className={classes.item_name} htmlFor={props.id.toString()}>
          {props.title}
        </label>
      </div>
      <GiTireIronCross
        className={classes.item_delete}
        onClick={props.onRemoveHandler}
      />
    </li>
  );
};

export default memo(ItemTodo);
