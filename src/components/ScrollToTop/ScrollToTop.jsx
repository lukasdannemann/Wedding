import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Varje gång sökvägen (t.ex. från / till /contact) ändras...
    window.scrollTo(0, 0); // ...skrolla till absolut högsta punkten
  }, [pathname]);

  return null; // Denna komponent behöver inte rendera någonting visuellt
}