import React, { memo } from "react";

const TodosCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className="mt-20 flex flex-col w-full max-w-md md:max-w-xl px-5">{props.children}</section>;
};

export default memo(TodosCard);
