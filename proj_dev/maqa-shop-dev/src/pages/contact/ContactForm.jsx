import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateName = (name) => {
    if (!name.trim()) return "Imię i nazwisko jest wymagane";
    const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+ [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/;
    if (!nameRegex.test(name.trim()))
      return "Podaj prawidłowe imię i nazwisko (min. imię i nazwisko)";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Adres e-mail jest wymagany";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Podaj prawidłowy adres e-mail";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Wiadomość jest wymagana";
    if (message.trim().length < 10)
      return "Wiadomość musi zawierać co najmniej 10 znaków";
    return "";
  };

  const validateConsent = (consent) => {
    if (!consent)
      return "Zgoda na przetwarzanie danych jest wymagana";
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    let error = "";
    if (name === "name") error = validateName(fieldValue);
    if (name === "email") error = validateEmail(fieldValue);
    if (name === "message") error = validateMessage(fieldValue);
    if (name === "consent") error = validateConsent(fieldValue);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const shouldShowError = (field) => touched[field] && errors[field];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
      consent: validateConsent(formData.consent),
    };
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      consent: true,
    });
    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (!hasErrors) {
      alert("Formularz został wysłany pomyślnie!");
       setFormData({ name: "", email: "", phone: "", message: "", consent: false });
       setTouched({});
       setErrors({});
    }
  };

  return (
    <section className="contact-section contact-form-section">
      <h2 className="contact-form-section__heading">
        Skorzystaj z formularza kontaktowego
      </h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <input
              type="text"
              name="name"
              placeholder="Twoje imię i nazwisko*"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={shouldShowError("name") ? "invalid" : ""}
              required
            />
            {shouldShowError("name") && (
              <span className="contact-form__error">{errors.name}</span>
            )}
          </div>
          <div className="contact-form__field">
            <input
              type="email"
              name="email"
              placeholder="Twój adres e-mail*"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={shouldShowError("email") ? "invalid" : ""}
              required
            />
            {shouldShowError("email") && (
              <span className="contact-form__error">{errors.email}</span>
            )}
          </div>
          <div className="contact-form__field">
            <input
              type="tel"
              name="phone"
              placeholder="Twój numer telefonu (opcjonalnie)"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="contact-form__row">
          <div className="contact-form__field" style={{ width: "100%" }}>
            <textarea
              name="message"
              placeholder="Wpisz swoją wiadomość..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={shouldShowError("message") ? "invalid" : ""}
              rows={5}
              required
            />
            {shouldShowError("message") && (
              <span className="contact-form__error">{errors.message}</span>
            )}
          </div>
        </div>
        <div className="contact-form__row contact-form__row--consent">
  <div className="contact-form__consent-checkbox">
    <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={handleChange}
      onBlur={handleBlur}
      required
      className={shouldShowError("consent") ? "invalid" : ""}
      id="consent-checkbox"
    />
  </div>
  <div className="contact-form__consent-text">
    <label htmlFor="consent-checkbox">
      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Maqa Sp. z o.o. w celu udzielenia odpowiedzi na zapytanie. Zapoznałem/am się z{" "}
      <a
        href="/polityka-prywatnosci"
        target="_blank"
        rel="noopener noreferrer"
      >
        polityką prywatności
      </a>
      .
    </label>
    {shouldShowError("consent") && (
      <span className="contact-form__error">{errors.consent}</span>
    )}
  </div>
</div>

        <div className="contact-form__row">
          <button type="submit">Wyślij wiadomość</button>
        </div>
        <div className="contact-form__info">
          <small>
            Administratorem danych osobowych jest Maqa Sp. z o.o., ul. Zbożowa
            12, 01-234 Warszawa, NIP: 123-456-78-90.
            <br />
            Dane przetwarzane są wyłącznie w celu odpowiedzi na Twoje zapytanie.
            Więcej informacji znajdziesz w{" "}
            <a
              href="/polityka-prywatnosci"
              target="_blank"
              rel="noopener noreferrer"
            >
              polityce prywatności
            </a>
            .
          </small>
        </div>
      </form>
    </section>
  );
}
