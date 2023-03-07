// This hook toggles dark-mode, detects if the user prefers dark mode, and stores the dark-mode state in the local storage
// THIS HOOK DEPENDS ON useMediaQuery CUSTOM HOOK, SO MAKE SURE TO INCLUDE IT IN YOUR FILES
// THIS HOOK DEPENDS ON useLocalStorage CUSTOM HOOK, SO MAKE SURE TO INCLUDE IT IN YOUR FILES

import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import useStorage from "./useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useStorage("DarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  function toggleDarkMode(setTo) {
    if (setTo === true || setTo === false) {
      setDarkMode(setTo);
    } else {
      setDarkMode((prev) => !prev);
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, toggleDarkMode];
}
