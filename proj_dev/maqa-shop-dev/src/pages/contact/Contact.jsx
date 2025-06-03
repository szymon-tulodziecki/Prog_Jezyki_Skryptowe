import Header from '../../main_components/Header.jsx';
import Footer from '../../main_components/Footer.jsx';
import HeroContact from './HeroContact.jsx';
import ContactInfoSection from './ContactInfoSection.jsx';
import ContactForm from './ContactForm.jsx';
import './Contact.css';

function Contact() {
  return (
    <>
      <Header cartCount={3} />
      <main className='contact-main'>
      <HeroContact />
      <ContactInfoSection/>
      <ContactForm />
      </main>
      <Footer />

</>
  );
}
export default Contact;