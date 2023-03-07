import { useState } from "react";
import { Link } from "react-router-dom";
import FormInputValidated from "../form/FormInputValidated";
import validateEmail from "../../utils/validateEmail";
import SelectMultiKBDValidated from "../form/SelectMultiKBDValidated";
import countries from "../../data/countries";
import useGlobalContext from "../../context/context";

const countryOptions = countries.map((country) => {
  return { label: country.country, value: country.country };
});

const CheckoutForm = ({
  setStep,
  checkoutForm,
  setCheckoutForm,
  citiesList,
  setCitiesList,
}) => {
  const { dispatch } = useGlobalContext();

  const [validState, setValidState] = useState({
    fName: { state: "initial", message: "Error Message" },
    lName: { state: "initial", message: "Error Message" },
    email: { state: "initial", message: "Error Message" },
    other: { state: "initial", message: "Error Message" },
    country: { state: "initial", message: "Error Message" },
    city: { state: "initial", message: "Error Message" },
    address: { state: "initial", message: "Error Message" },
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCheckoutForm((prev) => {
      return { ...prev, [name]: value };
    });
    if (validState[name].state !== "initial")
      setValidState({
        ...validState,
        [name]: { state: "initial", message: "Error Message" },
      });
  };

  const handleCountryChange = (e) => {
    if (e && checkoutForm.country?.value === e.value) {
      return;
    }
    if (!e) {
      setCheckoutForm((prev) => {
        return { ...prev, country: undefined, city: undefined };
      });
      setCitiesList([]);
    } else {
      setCheckoutForm((prev) => {
        return { ...prev, country: e, city: undefined };
      });

      const selectedCountry = countries.find(
        (country) => country.country === e.value
      );

      const cityOptions = selectedCountry.cities.map((city) => {
        return {
          label: `${city.city} ($${city.deliveryCosts})`,
          value: city.city,
        };
      });

      setCitiesList(cityOptions);
    }
    if (validState.country.state !== "initial")
      setValidState({
        ...validState,
        country: { state: "initial", message: "Error Message" },
        city: { state: "initial", message: "Error Message" },
      });
  };

  const handleCityChange = (e) => {
    if (e && e.value === checkoutForm.city?.value) {
      return;
    }

    setCheckoutForm((prev) => {
      return { ...prev, city: e };
    });
    if (validState.city.state !== "initial")
      setValidState({
        ...validState,
        city: { state: "initial", message: "Error Message" },
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = checkContents();
    if (errors === 0) {
      dispatch({
        type: "SET_PURCHASE_DATA",
        payload: { ...checkoutForm },
      });
      const myMessage = checkoutForm;
      myMessage.timeSent = new Date();

      setValidState({
        fName: { state: "initial", message: "Error Message" },
        lName: { state: "initial", message: "Error Message" },
        email: { state: "initial", message: "Error Message" },
        other: { state: "initial", message: "Error Message" },
        country: { state: "initial", message: "Error Message" },
        city: { state: "initial", message: "Error Message" },
        address: { state: "initial", message: "Error Message" },
      });

      setStep(2);
    }
  };

  function checkContents() {
    const { fName, lName, email, country, city, address } = checkoutForm;
    let errorCount = 0;
    let newState = { ...validState };
    if (fName.trim() === "") {
      newState.fName = {
        state: "error",
        message: "Please Enter Your First Name",
      };

      errorCount++;
    } else {
      newState.fName = { state: "success", message: "Error Message" };
    }
    if (lName.trim() === "") {
      newState.lName = {
        state: "error",
        message: "Please Enter Your Last Name",
      };
      errorCount++;
    } else {
      newState.lName = { state: "success", message: "Error Message" };
    }
    if (email.trim() === "") {
      newState.email = { state: "error", message: "Please Enter Your Email" };
      errorCount++;
    } else if (validateEmail(email) === false) {
      newState.email = { state: "error", message: "This Email is not Valid" };
      errorCount++;
    } else {
      newState.email = { state: "success", message: "Error Message" };
    }
    if (!country?.value) {
      newState.country = {
        state: "error",
        message: "Please Select your Country",
      };
      errorCount++;
    } else {
      newState.country = { state: "success", message: "Error Message" };
    }
    if (!city?.value) {
      newState.city = {
        state: "error",
        message: "Please Select your City",
      };
      errorCount++;
    } else {
      newState.city = { state: "success", message: "Error Message" };
    }
    if (address.trim() === "") {
      newState.address = {
        state: "error",
        message: "Please Write your Address",
      };
      errorCount++;
    } else {
      newState.address = { state: "success", message: "Error Message" };
    }

    setValidState({ ...newState });
    return errorCount;
  }

  return (
    <form className="form wide-form" onSubmit={handleSubmit}>
      <p>Please note that all the fields are required.</p>
      <div className="form-columns">
        <div>
          <FormInputValidated
            label="First Name"
            labelClassName="h6"
            name="fName"
            type="text"
            maxLength="30"
            autoComplete="off"
            placeholder="John"
            onChange={handleChange}
            value={checkoutForm.fName}
            validState={validState.fName}
          />
          <FormInputValidated
            label="Last Name"
            labelClassName="h6"
            name="lName"
            type="text"
            maxLength="30"
            autoComplete="off"
            placeholder="Doe"
            onChange={handleChange}
            value={checkoutForm.lName}
            validState={validState.lName}
          />
          <FormInputValidated
            label="Email"
            labelClassName="h6"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="example@email.com"
            onChange={handleChange}
            value={checkoutForm.email}
            validState={validState.email}
          />
          <FormInputValidated
            label="Other Contact Info (optional)"
            labelClassName="h6"
            name="other"
            type="text"
            autoComplete="off"
            placeholder="Any additional contact info (optional)"
            onChange={handleChange}
            value={checkoutForm.other}
            validState={validState.other}
          />
        </div>
        <div>
          <SelectMultiKBDValidated
            value={checkoutForm.country}
            onChange={handleCountryChange}
            options={countryOptions}
            title="Country"
            placeholder="Your Country"
            validState={validState.country}
          />
          <SelectMultiKBDValidated
            value={checkoutForm.city}
            onChange={handleCityChange}
            options={citiesList}
            title="City ($ Delivery Costs)"
            placeholder={
              citiesList.length === 0 ? "Select Country First" : "Your City"
            }
            validState={validState.city}
          />
          <FormInputValidated
            label="Address"
            labelClassName="h6"
            name="address"
            type="textarea"
            maxLength="500"
            autoComplete="off"
            placeholder="Address of your Query"
            onChange={handleChange}
            value={checkoutForm.address}
            validState={validState.address}
          />
        </div>
      </div>
      <div className="flexed end gap-2 full-width">
        <Link
          to="/cart"
          className={
            "btn bg-transparent h-txt-error h-txt-50 rounded px-2 py-2"
          }
        >
          Back to Cart
        </Link>
        <FormInputValidated
          type="submit-btn"
          name="Next"
          className={
            "btn bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded px-2 py-2"
          }
        />
      </div>
    </form>
  );
};

export default CheckoutForm;
