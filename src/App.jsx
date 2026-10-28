import "./App.css";
import InfoPerso from "./components/InfoPerso";
import Experiences from "./components/Experiences";
import Competences from "./components/Competences";

function App() {
  return (
    <div>
      <h1>Mon Curriculum Vitae</h1>

      <InfoPerso />
      <Experiences />
      <Competences />
    </div>
  );
}

export default App;