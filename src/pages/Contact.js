import NormalSection from "../components/common/NormalSection";
import ContactForm from "../components/contact/ContactForm";
import ContactCard from "../components/contact/ContactCard";

const Contact = () => {
  return (
    <NormalSection title="Contact Us" watermark={true} className="mt-4">
      <p>
        Thank you for being interested in our company. To contact us, please
        fill the form below. Our team will respond as soon as possible.
      </p>
      <ContactForm />
      <div className="mt-4 flexed between gap-2 wrap">
        <ContactCard
          icon="location-dot"
          name="Location"
          text="25 Shoes st., New-Shoes City, NS"
        />
        <ContactCard icon="phone" name="Phone Number" text="555-5555-5555" />
        <ContactCard
          icon="envelope"
          name="Email"
          text="support@classyfootwear.com"
          clickToCopy
          title="Copy to clipboard"
        />
      </div>
    </NormalSection>
  );
};

export default Contact;
