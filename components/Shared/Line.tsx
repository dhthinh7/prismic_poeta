import React from "react";

interface ILine {
  width?: number;
  height?: number;
  backgroundColor?: string;
}
export default function Line({width = 50, height = 3, backgroundColor = '#faa300'}: ILine) {
  const style: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  }
  return <div style={style}></div>;
}
