import Header from "./components/header/Header";
import OurService from "./components/OurService/OurService";
import VirtualReality from "./components/VirtualReality/VirtualReality";
import WeComplete from "./components/WeComplete/WeComplete";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <VirtualReality />
        <OurService />
        <WeComplete />
      </div>
    </div>
  );
}

export default App;
