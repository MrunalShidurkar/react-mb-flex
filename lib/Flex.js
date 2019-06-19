import React, { useContext } from "react";
import { ResponsiveLayout } from "./ResponsiveLayout";
import {getStyle} from './styleFactory'
export default function Flex({ flexIf = true, ...props }) {
  const { dimensions } = useContext(ResponsiveLayout);
  if (typeof flexIf === "boolean" && !flexIf) return "";
  let style= getStyle(props,dimensions)
  return <div style={{...style}}>{props.children}</div>;
}
