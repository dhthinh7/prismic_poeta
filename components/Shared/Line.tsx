import React from "react";

interface ILine {
  width?: string;
  height?: string;
  backgroundColor?: string;
}
export default function Line({width = '50px', height = '3px', backgroundColor = '#faa300'}: ILine) {
  const style: React.CSSProperties = {
    width: width,
    height: height,
    backgroundColor: backgroundColor
  }
  return <div style={style}></div>;
}
