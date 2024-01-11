import Header from "./components/header/Header";
import MetOurTeam from "./components/MetOurTeam/MetOurTeam";
import OurService from "./components/OurService/OurService";
import VirtualReality from "./components/VirtualReality/VirtualReality";
import WeComplete from "./components/WeComplete/WeComplete";
import WeProjects from "./components/WeProjects/WeProjects";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <VirtualReality />
        <OurService />
        <WeComplete />
        <WeProjects />
        <MetOurTeam />
      </div>
    </div>
  );
}

export default App;
