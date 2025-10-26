import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls the window to the top every time the route changes.
function ScrollToTop() {
  // Extracts the pathname from the current location object
  const { pathname } = useLocation();

  // useEffect hook runs after the component renders.
  // The [pathname] dependency array means it will only run when the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // This component does not render any visible UI, it just performs an action.
  return null;
}

export default ScrollToTop;