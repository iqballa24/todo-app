import { Fragment } from "react";
import TabButton from "../../TabButton";

const ItemAction:React.FC<{itemTotal: number}> = (props) => {
  const tabList = ["All", "Active", "Complete"];
  return (
    <Fragment>
      <div className="flex flex-row justify-between p-[1rem] ">
        <p className="text-sm font-normal text-dark-grayish-blue-light">
          {props.itemTotal} items left
        </p>
        <div className="flex flex-row space-x-4">
          <TabButton tabList={tabList} className='invisible md:visible'/>
        </div>
        <p className="text-sm font-normal text-dark-grayish-blue-light cursor-pointer hover:text-very-dark-grayish-blue-light">
          Clear Complete
        </p>
      </div>
    </Fragment>
  );
};

export default ItemAction;
