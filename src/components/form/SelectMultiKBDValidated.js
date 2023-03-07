import SelectMultiKBD from "./SelectMultiKBD";
import FormInputValidation from "./FormInputValidation";

const SelectMultiKBDValidated = (props) => {
  return (
    <div
      className={`form-row validated-select-multi ${
        props.validState.state === "initial" ? "" : props.validState.state
      }`}
    >
      <SelectMultiKBD {...props} className="select-multi" />
      <FormInputValidation validState={props.validState} />
    </div>
  );
};
export default SelectMultiKBDValidated;
