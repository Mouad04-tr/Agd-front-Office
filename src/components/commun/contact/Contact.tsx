import React from "react";
import "./Contact.css";
import phone_icon from '../../../assets/phone-icon.svg';
import location_icon from '../../../assets/location-icon.svg';
import mail_icon from '../../../assets/mail-icon.svg';

export const Contact = (): JSX.Element => {
    return (
        <div className="contact-us-container">
            <h1 className="title">Nous sommes là pour vous aider</h1>
            <p className="subtitle">Nous sommes disponibles pour répondre à toutes vos questions de manière rapide et personnalisée, par téléphone, e-mail ou chat</p>
            <div className="contact-content">
                <div className="contact-options">
                    <div className="contact-option">
                        <img src={location_icon} alt="Icône de localisation" className="icon" />
                        <div className="contact-option-content">
                            <h2 className="option-title-contact">Venez nous rendre visite</h2>
                            <p className="option-text-contact">140 Avenue Hassan II Casablanca</p>
                        </div>
                    </div>
                    <div className="contact-option">
                        <img src={phone_icon} alt="Icône de téléphone" className="icon" />
                        <div className="contact-option-content">
                            <h2 className="option-title-contact">Appelez-nous</h2>
                            <p className="option-text-contact">+212.5.20.39.30.30</p>
                        </div>
                    </div>
                    <div className="contact-option">
                        <img src={mail_icon} alt="Icône de courriel" className="icon" />
                        <div className="contact-option-content">
                            <h2 className="option-title-contact">Envoyez-nous un message</h2>
                            <p className="option-text-contact">agencedirecte@bankofafrica.ma</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2 className="form-header">Nos conseillers sont prêts à vous aider</h2>
                    <p className="form-sub-header">Vous pouvez contacter nos conseillers 7 jours sur 7, de 8h00 à 20h00 (heure marocaine). Nous sommes également disponibles par e-mail et chat.</p>
                    <form>
                        <div className="form-group half-width">
                            <input type="text" name="firstName" placeholder="Prénom" required />
                            <input type="text" name="lastName" placeholder="Nom" required />
                        </div>
                        <div className="form-group half-width">
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="tel" name="phoneNumber" placeholder="Numéro de téléphone" required />
                        </div>
                        <div className="form-group full-width">
                            <input type="text" name="subject" placeholder="Sujet" required />
                        </div>
                        <div className="form-group full-width">
                            <textarea name="message" placeholder="Dites-nous quelque chose..." required></textarea>
                        </div>
                        <button type="submit" className="submit-button-contact-form">Envoyer à BMCE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;
