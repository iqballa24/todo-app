import React, { Fragment } from "react";
import ItemTodo from "./ItemTodo";
import ItemAction from "./ItemAction";
import TabButton from "../../TabButton";

import { Todos } from "../../../types";

const TodosBody: React.FC<Todos> = (props) => {
  const { data } = props;
  const tabList = ["All", "Active", "Complete"];

  return (
    <Fragment>
      <ul className="rounded-md bg-white drop-shadow-2xl">
        {data.map((item) => (
          <ItemTodo key={item.id} title={item.title} id={item.id} />
        ))}
        <ItemAction itemTotal={data.length}/>
      </ul>
      <TabButton
        tabList={tabList}
        className="bg-white mt-8 justify-center p-[1rem] shadow-2xl z-10 rounded-md md:hidden"
      />
    </Fragment>
  );
};

export default TodosBody;
