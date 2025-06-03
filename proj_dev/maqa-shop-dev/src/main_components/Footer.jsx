import React from "react";
import logo from "./main_components_assets/logo.png";
import visa from "./main_components_assets/visa.svg";
import mastercard from "./main_components_assets/mastercard.svg";
import blik from "./main_components_assets/blik.svg";


import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col footer__brand">
          <img src={logo} alt="Maqa logo" className="footer__logo" />
          <div className="footer__brand-name">Maqa</div>
          <div className="footer__payments">
            <span>Płatności obsługuje:</span>
            <img src={blik} alt="Blik" />
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
          </div>
          <div className="footer__social">
            <span>Dołącz do nas</span>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Dane firmy</h4>
          <div>
            MAQA Sp. z o.o.<br />
            ul. Przykładowa 1, 00-000 Miasto<br />
            NIP 1234567890<br />
            REGON 0987654321
          </div>
          <div style={{ marginTop: 10 }}>
            Spółka wpisana do KRS pod numerem 0000000000<br />
            Kapitał zakładowy: 100 000 zł (opłacony w całości)
          </div>
        </div>
        <div className="footer__col">
          <h4>Sprzedaż detaliczna</h4>
          <div>
            <a href="mailto:sklep@maqa.pl">sklep@maqa.pl</a><br />
            +48 123 456 789
          </div>
          <h4 style={{ marginTop: 10 }}>Biuro</h4>
          <div>
            <a href="mailto:biuro@maqa.pl">biuro@maqa.pl</a><br />
            +48 987 654 321
          </div>
        </div>
        <div className="footer__col">
          <h4>Dla klienta</h4>
          <ul>
            <li><a href="/zwroty">Zwroty i reklamacje</a></li>
            <li><a href="/dostawa">Dostawa i płatności</a></li>
            <li><a href="/regulamin">Regulamin sklepu</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Informacje</h4>
          <ul>
            <li><a href="/doradztwo">Doradztwo</a></li>
            <li><a href="/media">Media o nas</a></li>
            <li><a href="/o-nas">O nas</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/relacje-inwestorskie">Relacje inwestorskie</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <span>English version</span>
        </div>
        <div className="footer__copyright">
          Copyright {new Date().getFullYear()} Maqa – All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
