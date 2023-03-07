// This hook helps in using media queries in react
// THIS HOOK DEPENDS ON useEventListener CUSTOM HOOK, SO MAKE SURE TO INCLUDE IT IN YOUR FILES

import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    "change",
    (e) => setIsMatch(e.matches),
    window.matchMedia(mediaQuery)
  );
  return isMatch;
}
