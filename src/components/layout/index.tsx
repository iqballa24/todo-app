import React, { memo, Fragment } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Fragment>
      <main className="relative  bg-hero-pattern-mobile md:bg-hero-pattern bg-no-repeat bg-contain h-[100vh] flex justify-center items-center">
        {props.children}
      </main>
    </Fragment>
  );
};

export default memo(Layout);
