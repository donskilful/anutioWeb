import "./App.css";
import Routes from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import "swiper/css";
import "swiper/css/bundle";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Routes />
      </div>
    </HelmetProvider>
  );
}

export default App;
