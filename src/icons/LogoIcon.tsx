import { IIconProps } from "./types";
import logo from "./education.png";

export const LogoIcon: React.FC<IIconProps> = ({ size = 1 }) => {
  return (
    <img src={logo} width="85" height="85" />
  );
};
