import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { HiSun } from "react-icons/hi";

const SwitchToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkTheme]);

  const onClickSwitchTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const iconSwitch = isDarkTheme ? (
    <HiSun
      color="white"
      className="cursor-pointer"
      size={24}
      onClick={onClickSwitchTheme}
    />
  ) : (
    <IoMoonSharp
      color="white"
      className="cursor-pointer"
      size={24}
      onClick={onClickSwitchTheme}
    />
  );

  return iconSwitch;
};

export default SwitchToggler;
