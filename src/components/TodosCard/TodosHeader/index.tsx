import React, { memo } from "react";
import SwitchToggler from "../../SwitchToggler";
import Input from "../../Input";

const TodosHeader = () => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-row justify-between items-center mb-9">
        <h1 className="uppercase text-white text-2xl sm:text-4xl tracking-[.30em] font-bold">
          todo
        </h1>
        <SwitchToggler />
      </div>
      <Input />
    </div>
  );
};

export default memo(TodosHeader);
