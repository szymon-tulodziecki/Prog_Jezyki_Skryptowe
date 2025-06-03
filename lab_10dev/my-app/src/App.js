import Hello from './Hello';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { ThemeProvider } from "./ThemeContext";
import LayoutEffectExample from './LayoutEffectExample';
import ThemeSwitcher from './ThemeSwitcher';
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Laboratorium 10</h1>
        <section>
          <ThemeSwitcher />
        </section>
        <section>
          <Hello />
        </section>
        <section>
          <ClickCounter />
        </section>
        <section>
          <PrimeCalculator />
        </section>
        <section>
          <FormReducer />
        </section>
        <section>
          <LayoutEffectExample />
        </section>
      </div>
    </ThemeProvider>
  );
}
