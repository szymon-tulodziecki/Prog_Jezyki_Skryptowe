import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div className="button-row">
      <button onClick={toggleTheme}>
        {dark ? "Przełącz na jasny" : "Przełącz na ciemny"}
      </button>
      <p>Aktualny motyw: {dark ? "Ciemny" : "Jasny"}</p>
    </div>
  );
}
