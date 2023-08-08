import FormInputValidation from "./FormInputValidation";

const FormInput = ({
  validState,
  label,
  name,
  type,
  className,
  id,
  inputClassName,
  labelClassName,
  ...props
}) => {
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
          {...props}
        />
        <FormInputValidation validState={validState} />
      </div>
    );
  }
  if (type === "alert") {
    return (
      <div className="form-row">
        <div
          className={`form-alert ${className}`}
          id="contactUsFormAlert"
          {...props}
        >
          {name}
        </div>
      </div>
    );
  }
  if (type === "submit") {
    return (
      <div className="form-row">
        <button className={`btn ${className}`} type="submit" {...props}>
          {name}
        </button>
      </div>
    );
  }
  if (type === "submit-btn") {
    return (
      <button className={`btn ${className}`} type="submit" {...props}>
        {name}
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
        {...props}
      />
      <FormInputValidation validState={validState} />
    </div>
  );
};

export default FormInput;
