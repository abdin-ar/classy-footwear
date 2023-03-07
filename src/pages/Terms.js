import NormalSection from "../components/common/NormalSection";

const Terms = () => {
  return (
    <NormalSection title="Terms of Service" watermark={true} className="mt-4">
      <p>
        This is a DEMO WEBSITE created to showcase a demonstration of an
        ecommerce website. All the content of this website is dummy content, and
        the business "Classy Footwear" is fictional. Any similarity to an actual
        brand name is purely coincidental.
      </p>
      <p>By using this website, you agree to our Terms of Service:</p>
      <ul className="ul">
        <li>
          Users cannot copy this website in whole or in part or use it for
          commercial purposes without the owner's explicit agreement.
        </li>
        <li>
          This demo website is not intended for making any actual purchases or
          payments. The website owner is not responsible for any kind of loss or
          damage that occurs to users as a result of using this website.
        </li>
        <li>
          Users' use of this website cannot have any legal consequences against
          the website owner, nor can it be invoked in lawsuits, fines or legal
          actions against the website owner.
        </li>
        <li>
          Users are not allowed to use this website to do anything that is
          against the law. In the event that the user does so, he/she bears full
          responsibility alone, and the website owner bears no responsibility.
        </li>
        <li>
          The user may not carry out any cyber-attack that harms the website,
          its owner, or its other users, and if he/she does so, he/she may be
          legally prosecuted.
        </li>
        <li>
          The website owner may update the Terms of Service at any time, and the
          updated version shall become effective immediately without prior
          notice.
        </li>
      </ul>
      <p>Last Updated: Feb 15th, 2023.</p>
    </NormalSection>
  );
};

export default Terms;
