import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgMore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
    {...props}
  >
    <Circle cx={12} cy={12} r={1} />
    <Circle cx={19} cy={12} r={1} />
    <Circle cx={5} cy={12} r={1} />
  </Svg>
);
export default SvgMore;
