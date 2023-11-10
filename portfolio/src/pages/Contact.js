import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <article>
        <h1 className="contact-h1">Contact</h1>
        <div className="contact-introduction">
          <h4 className="contact-h4">
            Neem contact op via dit{" "}
            <span className="contact-span">formulier</span> of via mijn{" "}
            <span className="contact-span"> social media</span>{" "}
          </h4>
          <div className="contact-icons">
            <a href="https://github.com/maximiliaandeb">
              {" "}
              <AiFillGithub size={80} />
            </a>
            <a href="https://www.linkedin.com/in/maximiliaan-de-bruijn-835996269/b">
              {" "}
              <AiFillLinkedin size={80} />
            </a>
            <a href="mailto: maximiliaandebruijn@gmail.com">
              <AiFillMail size={80} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-div">
            <div className="contact-div-name">
              <p>Naam:</p>
              <input id="naam" className="contact-input" type="text" />
              <p>Bedrijfsnaam:</p>
              <input id="bedrijfsnaam" className="contact-input" type="text" />
            </div>
          </div>
          <div className="contact-div">
            <div className="contact-div-mailphone">
              <p>E-mail:</p>
              <input id="email" className="contact-input" type="email" />
              <label>Telefoonnummer:</label>
              <input
                id="telefoonnummer"
                className="contact-input"
                type="number"
              />
            </div>
          </div>
          <div className="contact-div">
            <div className="contact-div-message">
              <p>Bericht:</p>
              <input id="bericht" className="contact-input" type="text" />
            </div>
            <button className="contact-button">verzenden</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
