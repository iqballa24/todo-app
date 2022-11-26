import { memo, useEffect, useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import classes from "./ItemTodo.module.css";

import { Todos } from "../../../types";

interface Props extends Todos {
  onRemoveHandler: () => void;
  onCheckHandler: () => void;
}

const ItemTodo: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClickItemTodo = () => {
    setIsChecked((prev) => !prev);
    props.onCheckHandler();
  };

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, []);

  return (
    <div className={classes.item_todo}>
      <div className={classes.wrapper_input}>
        <input
          id={props.id.toString()}
          type="checkbox"
          className={classes.input}
          checked={isChecked}
          onChange={() => false}
        />
        <span className={classes.checkmark} onClick={onClickItemTodo}></span>
        <label className={classes.item_name} htmlFor={props.id.toString()}>
          {props.title}
        </label>
      </div>
      <GiTireIronCross
        className={classes.item_delete}
        onClick={props.onRemoveHandler}
      />
    </div>
  );
};

export default memo(ItemTodo);
