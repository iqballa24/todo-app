import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { HiSun } from "react-icons/hi";

import useTheme from "../../hooks/useTheme";

const SwitchToggler = () => {
  const { isDark, changeTheme } = useTheme();

  const iconSwitch = isDark ? (
    <HiSun
      color="white"
      className="cursor-pointer"
      size={28}
      onClick={changeTheme}
    />
  ) : (
    <IoMoonSharp
      color="white"
      className="cursor-pointer"
      size={28}
      onClick={changeTheme}
    />
  );

  return iconSwitch;
};

export default SwitchToggler;
