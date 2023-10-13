import "./styles/app.scss";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Experience />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
