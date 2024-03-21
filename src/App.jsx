import "./App.css";
import Body from "./pages/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="bg-[#121212] text-white">
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
