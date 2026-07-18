import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Gaming from "./components/Gaming";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <Gaming/>
      <Footer/>
    </main>
  );
};


export default App;
