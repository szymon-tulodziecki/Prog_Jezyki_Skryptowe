import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactInfoSection.css";

export default function ContactInfoSection() {
  return (
<section className="contact-section contact-info-section">
          <h2 className="contact-info-section__heading">Skontaktuj się z nami</h2>
      <div className="contact-info-section__grid">
        <div className="contact-info-card">
          <div className="contact-info-card__label">Biuro obsługi klienta</div>
          <div className="contact-info-card__value">
            <Phone size={20} style={{marginRight: 8, color: "#7ac36a"}} />
            <span>+48 22 123 45 67</span>
          </div>
        </div>
        <div className="contact-info-card">
          <div className="contact-info-card__label">E-mail do sklepu</div>
          <div className="contact-info-card__value">
            <Mail size={20} style={{marginRight: 8, color: "#7ac36a"}} />
            <a href="mailto:zamowienia@maqa.pl">zamowienia@maqa.pl</a>
          </div>
        </div>
        <div className="contact-info-card">
          <div className="contact-info-card__label">E-mail do marketingu</div>
          <div className="contact-info-card__value">
            <Mail size={20} style={{marginRight: 8, color: "#7ac36a"}} />
            <a href="mailto:marketing@maqa.pl">marketing@maqa.pl</a>
          </div>
        </div>
        <div className="contact-info-card">
          <div className="contact-info-card__label">Adres siedziby</div>
          <div className="contact-info-card__value">
            <MapPin size={20} style={{marginRight: 8, color: "#7ac36a"}} />
            <span>ul. Zbożowa 12, 01-234 Warszawa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
