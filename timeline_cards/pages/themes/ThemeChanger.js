import React, { useState } from "react";
import styles from "../../styles/ThemeChanger.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faRibbon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton({ changeTheme }) {
  // three modes:
  // - light (faSun)
  // - dark (faMoon)
  // - pink (faRibbon)

  // search localstorage for previous value
  // if no value found, then default to light
  // otherwise use the found value
  // if the value does not exist then default to light
  const [selectedTheme, setSelectedTheme] = useState(modes.light);

  console.debug({ modes, changeTheme, selectedTheme });

  const buttons = Object.values(modes).map((mode) => {
    return (
      <Button
        key={mode.type}
        name={mode.type}
        icon={mode.icon}
        reference={mode}
        customClass={
          mode === selectedTheme
            ? styles[mode.activeCss]
            : styles[mode.inActiveCss]
        }
        onClick={() => {
          changeTheme(mode);
          setSelectedTheme(mode);
        }}
      />
    );
  });

  return (
    <div>
      <div className={styles.container}>{buttons}</div>
    </div>
  );
}

export const modes = {
  light: {
    type: "light",
    selectedCss: "light",
    activeCss: "active",
    inActiveCss: "inactive",
    icon: faSun,
  },
  dark: {
    type: "dark",
    selectedCss: "dark",
    activeCss: "active",
    inActiveCss: "inactive",
    icon: faMoon,
  },
  pink: {
    type: "pink",
    selectedCss: "pink",
    activeCss: "active",
    inActiveCss: "inactive",
    icon: faRibbon,
  },
};

function Button({ name, icon, onClick, customClass }) {
  return (
    <div
      className={[styles.button, styles.light, customClass].join(" ")}
      onClick={onClick}
      title={`Change to ${name} theme`}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
