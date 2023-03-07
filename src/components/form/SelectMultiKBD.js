import { useState, useEffect, useRef } from "react";

const SelectMultiKBD = ({
  multiple,
  value,
  onChange,
  options,
  title,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function valueIncludesOption(value, option) {
    return value.find((item) => item.value === option.value);
  }

  function selectOption(option) {
    if (multiple) {
      if (valueIncludesOption(value, option)) {
        onChange(value.filter((o) => o.value !== option.value));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option.value !== value?.value) {
        onChange(option);
      }
    }
  }

  function isOptionSelected(option) {
    return multiple
      ? valueIncludesOption(value, option)
      : option.value === value?.value;
  }

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) {
            selectOption(options[highlightedIndex]);
          }
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);
    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div>
      {title ? <h4 className="h6 label-padding">{title}</h4> : null}
      <div
        ref={containerRef}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        className={`select-multi-container ${className}`}
      >
        <span
          className={`select-multi-value ${
            (multiple && value.length === 0) || !value
              ? "select-multi-placeholder"
              : ""
          }`}
        >
          {multiple
            ? value.map((v) => {
                return (
                  <button
                    type="button"
                    key={v.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOption(v);
                    }}
                    className="select-multi-option-badge"
                  >
                    {v.label}
                    <span className="select-multi-remove-btn">&times;</span>
                  </button>
                );
              })
            : value?.label}
          {(multiple && value.length === 0) || !value ? placeholder : null}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className="select-multi-clear-btn"
        >
          &times;
        </button>
        <div className="select-multi-divider"></div>
        <div className="select-multi-caret"></div>
        <ul
          className={`select-multi-options ${
            isOpen ? "select-multi-show" : ""
          }`}
        >
          {options.map((option, index) => {
            return (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseMove={(e) => {
                  e.target.style = `--gradient-position: ${
                    e.clientX - e.target.getBoundingClientRect().left
                  }px; --gradient-position-Y: ${
                    e.clientY - e.target.getBoundingClientRect().top
                  }px;`;
                }}
                key={option.value}
                className={`select-multi-option linear-gradient filter-option-border ${
                  isOptionSelected(option) ? "active" : ""
                } ${index === highlightedIndex ? "highlighted" : ""}`}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SelectMultiKBD;
