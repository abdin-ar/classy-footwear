import { useEffect } from "react";

export default function useScrollTo(
  scrollToX = 0,
  scrollToY = 0,
  dependencies = []
) {
  useEffect(() => {
    window.scrollTo(scrollToX, scrollToY);
  }, dependencies);
}
