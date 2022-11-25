import React, { Fragment } from "react";
import ItemTodo from "./ItemTodo";
import ItemAction from "./ItemAction";
import TabButton from "../../TabButton";

import { Todos } from "../../../types";

const TodosBody: React.FC<Todos> = (props) => {
  const { data } = props;
  const tabList = { group: "tabButton2", list: ["All", "Active", "Complete"] };

  return (
    <Fragment>
      <ul className="rounded-md bg-white dark:bg-very-dark-desaturated-blue drop-shadow-2xl">
        {data.map((item) => (
          <ItemTodo
            key={item.id}
            title={item.title}
            id={item.id}
            isChecked={item.isChecked}
          />
        ))}
        <ItemAction itemTotal={data.length} />
      </ul>
      <TabButton
        tabList={tabList}
        className="bg-white dark:bg-very-dark-desaturated-blue mt-8 justify-center p-[1rem] shadow-2xl z-10 rounded-md md:hidden"
      />
    </Fragment>
  );
};

export default TodosBody;
