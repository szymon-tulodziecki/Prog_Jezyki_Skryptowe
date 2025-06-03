import Header from '../../main_components/Header.jsx';
import Footer from '../../main_components/Footer.jsx';
import LoginPage from './LoginPage.jsx';

function Login() {
  return (
    <>
      <Header cartCount={3} />
      <main>

        <LoginPage />    

      </main>
            <Footer />

</>
  );
}
export default Login;