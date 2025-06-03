import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="login-page-bg">
            <div className="login-section">
                <nav className="login-breadcrumbs">
                    <Link to="/">Strona główna</Link> / Logowanie
                </nav>
                <div className="login-content-row">
                    <div className="login-column">
                        <h2>Logowanie</h2>
                        <form className="login-form">
                            <label>
                                Nazwa użytkownika lub adres e-mail
                                <input type="text" placeholder="np. jan@maqa.pl" required />
                            </label>
                            <label>
                                Hasło *
                                <input type="password" placeholder="Hasło" required />
                            </label>
                            <div className="login-form__extras">
                                <label>
                                    <input type="checkbox" /> Zapamiętaj mnie
                                </label>
                                <a href="#" className="login-link">Nie pamiętasz hasła?</a>
                            </div>
                            <button type="submit" className="login-btn">Zaloguj się</button>
                            <div className="login-socials">
                                <button type="button" className="login-social-btn fb">Facebook</button>
                                <button type="button" className="login-social-btn google">Google</button>
                            </div>
                        </form>
                    </div>
                    <div className="login-divider"></div>
                    <div className="login-column">
                        <h2>Zarejestruj się</h2>
                        <form className="login-form">
                            <label>
                                Adres e-mail *
                                <input type="email" placeholder="np. jan@maqa.pl" required />
                            </label>
                            <label>
                                Hasło *
                                <input type="password" placeholder="Hasło" required />
                            </label>
                            <p className="login-info">
                                Twoje dane osobowe zostaną użyte do obsługi Twojej wizyty na naszej stronie, zarządzania dostępem do Twojego konta i do innych celów opisanych w naszej <a href="/polityka-prywatnosci">polityce prywatności</a>.
                            </p>
                            <button type="submit" className="login-btn">Zarejestruj się</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}