import React from "react";
import { Truck, Package, Clock, Globe, Heart } from "lucide-react";
import "./BenefitsBar.css";

const benefits = [
  {
    icon: <Truck size={44} color="#7ac36a" />,
    text: "Darmowa dostawa od 200 zł dla wybranych opcji"
  },
  {
    icon: <Package size={44} color="#7ac36a" />,
    text: "Wysyłka kurierem i do paczkomatu"
  },
  {
    icon: <Clock size={44} color="#7ac36a" />,
    text: "Wysyłka w 1-2 dni robocze"
  },
  {
    icon: <Globe size={44} color="#7ac36a" />,
    text: "Wysyłamy za granicę"
  },
  {
    icon: <Heart size={44} color="#7ac36a" />,
    text: "Kochamy zboże :)"
  }
];

function BenefitsBar() {
  return (
    <section className="benefits-bar">
      <div className="benefits-bar__container">
        {benefits.map((item, idx) => (
          <div className="benefit" key={idx}>
            <div className="benefit__icon">{item.icon}</div>
            <div className="benefit__text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitsBar;
