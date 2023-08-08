import { useRef } from "react";

const ColorSizeButton = ({
  action,
  tabIndex,
  text,
  onClick,
  onKeyDown,
  ref,
  children,
  ...props
}) => {
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
      onClick={action}
      onKeyDown={(e) => {
        e.stopPropagation();
        runAction(e, action);
      }}
      {...props}
    >
      {text}
    </div>
  );
};
export default ColorSizeButton;
