import { useRef } from "react";

const ColorSizeButton = (props) => {
  const newProps = { ...props };
  for (const prop in newProps) {
    if (
      prop === "action" ||
      prop === "tabIndex" ||
      prop === "text" ||
      prop === "onClick" ||
      prop === "onKeyDown" ||
      prop === "ref" ||
      prop === "children"
    ) {
      delete newProps[prop];
    }
  }

  const btn = useRef();

  function runAction(e, action) {
    if (e.target !== btn.current) {
      return;
    }
    if (e.code === "Enter" || e.code === "Space") {
      action();
    }
  }

  return (
    <div
      ref={btn}
      tabIndex={0}
      onClick={props.action}
      onKeyDown={(e) => {
        e.stopPropagation();
        runAction(e, props.action);
      }}
      {...newProps}
    >
      {props.text}
    </div>
  );
};
export default ColorSizeButton;
