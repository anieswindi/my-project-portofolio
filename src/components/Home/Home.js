import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { isMobile, isTablet } from "react-device-detect";

export default function H_Section1() {
  let content;

  if (isTablet) {
    console.log("masuk desktop");
    content = <Desktop />;
  } else if (isMobile) {
    console.log("masuk mobile");
    content = <Mobile />;
  } else {
    content = <Desktop />;
  }

  return <>{content}</>;
}
