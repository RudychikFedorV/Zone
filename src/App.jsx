import Header from "./components/header/Header";
import OurService from "./components/OurService/OurService";
import VirtualReality from "./components/VirtualReality/VirtualReality";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <VirtualReality />
        <OurService />
      </div>
    </div>
  );
}

export default App;
