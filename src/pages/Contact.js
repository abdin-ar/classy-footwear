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
          text="25 Shoes st., New-Shoes City, NS"
        />
        <ContactCard icon="phone" text="555-5555-5555" />
        <ContactCard icon="envelope" text="support@classyfootwear.com" />
      </div>
    </NormalSection>
  );
};

export default Contact;
