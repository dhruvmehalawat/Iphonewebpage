import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
    </main>
  );
};


export default App;
