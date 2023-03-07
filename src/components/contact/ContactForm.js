import { useState } from "react";
import FormInputValidated from "../form/FormInputValidated";
import validateEmail from "../../utils/validateEmail";

const ContactForm = () => {
  const [contactMessage, setContactMessage] = useState({
    fName: "",
    lName: "",
    email: "",
    subject: "",
    textmessage: "",
  });

  const [validState, setValidState] = useState({
    fName: { state: "initial", message: "Error Message" },
    lName: { state: "initial", message: "Error Message" },
    email: { state: "initial", message: "Error Message" },
    subject: { state: "initial", message: "Error Message" },
    textmessage: { state: "initial", message: "Error Message" },
  });

  const [formAlertStatus, setFormAlertStatus] = useState({
    text: "",
    classes: "displayNone",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setContactMessage((prev) => {
      return { ...prev, [name]: value };
    });
    if (validState[name].state !== "initial")
      setValidState({
        ...validState,
        [name]: { state: "initial", message: "Error Message" },
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = checkContents();
    if (errors === 0) {
      const myMessage = contactMessage;
      myMessage.timeSent = new Date();
      console.log(`Time Sent: ${myMessage.timeSent}
First Name: ${myMessage.fName}
Last Name: ${myMessage.lName}
Email: ${myMessage.email}
Subject: ${myMessage.subject}
Message: ${myMessage.textmessage}`);
      formAlert("success", "Your Message Was Sent Successfully");

      setContactMessage({
        fName: "",
        lName: "",
        email: "",
        subject: "",
        textmessage: "",
      });

      setValidState({
        fName: { state: "initial", message: "Error Message" },
        lName: { state: "initial", message: "Error Message" },
        email: { state: "initial", message: "Error Message" },
        subject: { state: "initial", message: "Error Message" },
        textmessage: { state: "initial", message: "Error Message" },
      });
    } else {
      formAlert(
        "error",
        `${errors} Field${errors > 1 ? "s Have Errors" : " Has an Error"} !`
      );
    }
  };

  function checkContents() {
    const { fName, lName, email, subject, textmessage } = contactMessage;
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
    if (subject.trim() === "") {
      newState.subject = {
        state: "error",
        message: "Please Write the Subject of your Message",
      };
      errorCount++;
    } else {
      newState.subject = { state: "success", message: "Error Message" };
    }
    if (textmessage.trim() === "") {
      newState.textmessage = {
        state: "error",
        message: "Please Write a Message",
      };
      errorCount++;
    } else if (textmessage.length > 2000) {
      newState.textmessage = {
        state: "error",
        message: "Your Message is too Long. Please Limit it to 1000 characters",
      };
      errorCount++;
    } else {
      newState.textmessage = { state: "success", message: "Error Message" };
    }
    setValidState({ ...newState });
    return errorCount;
  }

  function formAlert(state, text) {
    setFormAlertStatus({
      ...formAlertStatus,
      text: text,
      classes: `py-1 px-1 centered rounded ${state}`,
    });
    setTimeout(() => {
      setFormAlertStatus({
        ...formAlertStatus,
        text: "",
        classes: "displayNone",
      });
    }, 10000);
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
            value={contactMessage.fName}
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
            value={contactMessage.lName}
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
            value={contactMessage.email}
            validState={validState.email}
          />
        </div>
        <div>
          <FormInputValidated
            label="Subject"
            labelClassName="h6"
            name="subject"
            type="text"
            maxLength="100"
            autoComplete="off"
            placeholder="Subject of your Query"
            onChange={handleChange}
            value={contactMessage.subject}
            validState={validState.subject}
          />
          <FormInputValidated
            label="Message"
            labelClassName="h6"
            name="textmessage"
            type="textarea"
            maxLength="1000"
            autoComplete="off"
            placeholder="Write your message here"
            onChange={handleChange}
            value={contactMessage.textmessage}
            validState={validState.textmessage}
          />
        </div>
      </div>
      <FormInputValidated
        type="alert"
        name={formAlertStatus.text}
        className={formAlertStatus.classes}
      />
      <FormInputValidated
        type="submit"
        name="Send Message"
        className={
          "full-width bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded"
        }
      />
    </form>
  );
};

export default ContactForm;
