const FormInputValidation = ({ validState }) => {
  return (
    <>
      <i className="fas fa-check-circle"></i>
      <i className="fas fa-exclamation-circle"></i>
      <span>{validState.message}</span>
    </>
  );
};
export default FormInputValidation;
