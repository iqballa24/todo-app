import { useState, useContext } from "react";
import { TabAction, Todos } from "../../types";
import classes from "./TabButton.module.css";

import TodosContext from "../../store/todo-context";

const RadioInput: React.FC<{
  text: string;
  groupName: string;
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <li>
      <input
        id={`${props.text}_${props.groupName}`}
        type="radio"
        name={props.groupName}
        value={props.text}
        className={classes.input}
        checked={props.text === props.selected}
        onChange={props.onChange}
      />
      <label
        htmlFor={`${props.text}_${props.groupName}`}
        className={classes.label}
      >
        {props.text}
      </label>
    </li>
  );
};

const index: React.FC<TabAction> = (props) => {
  const todosCtx = useContext(TodosContext);
  const className = ["flex flex-row space-x-4"];
  className.push(props.className ?? "");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    todosCtx.changeTypeFilter(e.target.value);
  };

  return (
    <ul className={className.join(" ")}>
      {props.tabList.list.map((tab, index) => (
        <RadioInput
          key={index}
          text={tab}
          groupName={props.tabList.group}
          selected={todosCtx.filterType}
          onChange={onChangeHandler}
        />
      ))}
    </ul>
  );
};

export default index;
