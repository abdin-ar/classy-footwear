const ContactCard = ({ icon, text }) => {
  return (
    <div className="contact-card">
      <i className={`fas fa-${icon}`}></i>
      <p>{text}</p>
    </div>
  );
};
export default ContactCard;
