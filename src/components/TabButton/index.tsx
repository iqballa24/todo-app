import { useState } from "react";
import { TabAction } from "../../types";
import classes from "./TabButton.module.css";

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
  const className = ["flex flex-row space-x-4"];
  className.push(props.className ?? "");

  const [selected, setSelected] = useState("All");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <ul className={className.join(" ")}>
      {props.tabList.list.map((tab, index) => (
        <RadioInput
          key={index}
          text={tab}
          groupName={props.tabList.group}
          selected={selected}
          onChange={onChangeHandler}
        />
      ))}
    </ul>
  );
};

export default index;
