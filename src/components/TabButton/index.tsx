import React from "react";
import { TabAction } from "../../types";

const index: React.FC<TabAction> = (props) => {
  const className = ["flex flex-row space-x-4"];
  className.push(props.className ?? "");

  return (
    <div className={className.join(" ")}>
      {props.tabList.map((tab, index) => (
        <p key={index} className="text-sm font-normal text-dark-grayish-blue-light cursor-pointer hover:text-very-dark-grayish-blue-light">
          {tab}
        </p>
      ))}
    </div>
  );
};

export default index;
