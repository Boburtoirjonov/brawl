import "./App.css";
import Brawlers from "./brawlers";
import { data } from "./data";

function App() {
  return (
    <>
      <Brawlers data={data} />
  </>
  );
}

export default App;
