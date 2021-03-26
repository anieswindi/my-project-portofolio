import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { isMobile, isTablet } from "react-device-detect";

export default function H_Section1() {
  let content;

  if (isTablet) {
    content = <Desktop />;
  } else if (isMobile) {
    content = <Mobile />;
  } else {
    content = <Desktop />;
  }

  return <>{content}</>;
}
