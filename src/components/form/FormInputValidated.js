import FormInputValidation from "./FormInputValidation";

const FormInput = (props) => {
  const { label, name, type, inputClassName, labelClassName, validState } =
    props;

  const newProps = { ...props };
  for (const prop in newProps) {
    if (
      prop === "validState" ||
      prop === "label" ||
      prop === "name" ||
      prop === "type" ||
      prop === "className" ||
      prop === "id" ||
      prop === "inputClassName" ||
      prop === "labelClassName"
    ) {
      delete newProps[prop];
    }
  }

  if (type === "textarea") {
    return (
      <div
        className={`form-row validated ${
          validState.state === "initial" ? "" : validState.state
        }`}
      >
        <label
          className={`label label-padding ${labelClassName}`}
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          className={`textarea ${inputClassName}`}
          type="text"
          name={name}
          id={name}
          {...newProps}
        />
        <FormInputValidation validState={validState} />
      </div>
    );
  }
  if (type === "alert") {
    return (
      <div className="form-row">
        <div
          className={`form-alert ${props.className}`}
          id="contactUsFormAlert"
          {...newProps}
        >
          {props.name}
        </div>
      </div>
    );
  }
  if (type === "submit") {
    return (
      <div className="form-row">
        <button
          className={`btn ${props.className}`}
          type="submit"
          {...newProps}
        >
          {props.name}
        </button>
      </div>
    );
  }
  if (type === "submit-btn") {
    return (
      <button className={`btn ${props.className}`} type="submit" {...newProps}>
        {props.name}
      </button>
    );
  }
  return (
    <div
      className={`form-row validated ${
        validState.state === "initial" ? "" : validState.state
      }`}
    >
      <label className={`label label-padding ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`input ${inputClassName}`}
        type={type}
        name={name}
        id={name}
        {...newProps}
      />
      <FormInputValidation validState={validState} />
    </div>
  );
};

export default FormInput;
