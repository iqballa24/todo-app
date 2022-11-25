import React, { memo } from "react";

const TodosCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className="absolute top-20 flex flex-col w-full max-w-xl">{props.children}</section>;
};

export default memo(TodosCard);
