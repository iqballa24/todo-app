import { Fragment } from "react";
import TabButton from "../../TabButton";

const ItemAction: React.FC<{ itemTotal: number, onCompleteHandler: () => void }> = (props) => {
  const tabList = { group: "tabButton1", list: ["All", "Active", "Complete"] };
  return (
    <Fragment>
      <div className="flex flex-row justify-between p-[1rem] ">
        <p className="text-sm font-normal text-dark-grayish-blue-light">
          {props.itemTotal} items left
        </p>
        <div className="hidden flex-row space-x-4 md:flex">
          <TabButton tabList={tabList} />
        </div>
        <p onClick={props.onCompleteHandler}  className="text-sm font-normal text-dark-grayish-blue-light cursor-pointer hover:text-very-dark-grayish-blue-light dark:hover:text-light-grayish-blue-dark">
          Clear Complete
        </p>
      </div>
    </Fragment>
  );
};

export default ItemAction;
