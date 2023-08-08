const ContactCard = ({ icon, name, text, clickToCopy, title }) => {
  return (
    <div className="contact-card">
      <i title={name} className={`fas fa-${icon}`}></i>
      <p
        title={title}
        onClick={clickToCopy ? () => navigator.clipboard.writeText(text) : null}
      >
        {text}
      </p>
    </div>
  );
};
export default ContactCard;
