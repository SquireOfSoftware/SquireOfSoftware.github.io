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

  console.log({ modes, changeTheme });

  const buttons = Object.values(modes).map((mode) => {
    return (
      <Button
        key={mode.type}
        name={mode.type}
        icon={mode.icon}
        reference={mode}
        onClick={() => changeTheme(mode)}
      />
    );
  });

  return <div className={styles.container}>{buttons}</div>;
}

export const modes = {
  light: {
    type: "light",
    selectedCss: "light",
    inActiveCss: styles.inactive,
    icon: faSun,
  },
  dark: {
    type: "dark",
    selectedCss: "dark",
    inActiveCss: styles.inactive,
    icon: faMoon,
  },
  pink: {
    type: "pink",
    selectedCss: "pink",
    inActiveCss: styles.inactive,
    icon: faRibbon,
  },
};

function Button({ icon, onClick }) {
  return (
    <div className={[styles.button, styles.light].join(" ")} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
