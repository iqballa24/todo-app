import React, { memo, Fragment } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Fragment>
      <main className="relative flex justify-center items-center bg-hero-pattern-mobile md:bg-hero-pattern bg-no-repeat bg-contain dark:bg-hero-pattern-dark-mobile dark:md:bg-hero-pattern-dark">
        {props.children}
      </main>
    </Fragment>
  );
};

export default memo(Layout);
