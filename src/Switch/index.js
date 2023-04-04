import "./Styles.css";
import { useTheme } from "../ThemeContext";

/* Step 3 switch component can then be connected to the toggleTheme function returned useTheme.
 Put toggleTheme next to the const {theme, ____here____} 
 -don't forget the onChange
*/

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
