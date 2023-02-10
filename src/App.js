import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BubbleChart from "./pages/BubbleChart";
import WorldHexagonMap from "./pages/WorldHexagonMap";
import WorldHexagonMap1 from "./pages/WorldHexagonMap1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/world-hexagon-map":
        title = "";
        metaDescription = "";
        break;
      case "/world-hexagon-map1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BubbleChart />} />

      <Route path="/world-hexagon-map" element={<WorldHexagonMap />} />

      <Route path="/world-hexagon-map1" element={<WorldHexagonMap1 />} />
    </Routes>
  );
}
export default App;
