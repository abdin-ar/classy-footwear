const FormInput = ({
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
      <div className="form-row">
        <label className={`label ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
        <textarea
          className={`textarea ${inputClassName}`}
          type="text"
          name={name}
          id={name}
          {...props}
        />
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
        <button
          className={`btn full-width ${className}`}
          type="submit"
          {...props}
        >
          {name}
        </button>
      </div>
    );
  }
  return (
    <div className="form-row">
      <label className={`label ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`input ${inputClassName}`}
        type={type}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
};

export default FormInput;
