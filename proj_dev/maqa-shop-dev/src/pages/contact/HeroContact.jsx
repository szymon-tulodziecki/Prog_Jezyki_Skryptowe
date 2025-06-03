import Zboze from "../pages_asseets/zboze.png";
import "./HeroContact.css";


export default function HeroContact() {
  return (
<section className="contact-section hero-contact">
          <div className="hero-contact__content">
        <nav className="hero-contact__breadcrumbs">
          <a href="/">Strona główna</a> / Kontakt
        </nav>
        <h1>Skontaktuj się z nami</h1>
        <p>
          Rozumiemy, że czasem nie wszystko jest jasne jak słońce padające na polach zbóż.<br />
          Jeśli masz do nas jakiekolwiek pytania, przejdź na podstronę „Kontakt” i skontaktuj się z nami tak jak Ci wygodnie: mailem lub telefonicznie.
        </p>
      </div>
      <div className="hero-contact__img">
        <img src={Zboze} alt="Roślina Maqa" />
      </div>
    </section>
  );
}

