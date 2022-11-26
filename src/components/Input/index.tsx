import { useRef } from "react";
import classes from "./Input.module.css";

const Input: React.FC<{ onAddHandler: (e: string) => void }> = (props) => {
  const enteredTodo = useRef<HTMLInputElement>(null);
  const { onAddHandler } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // enteredTodo.current.value = e.target.value;
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAddHandler(enteredTodo.current!.value);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={onSubmitHandler}>
        <input
          ref={enteredTodo}
          type="text"
          placeholder="Create a new todo..."
          className={classes.input}
          onChange={onChangeHandler}
          required
        />
        <span className={classes.icon_bullet}></span>
      </form>
    </div>
  );
};

export default Input;
