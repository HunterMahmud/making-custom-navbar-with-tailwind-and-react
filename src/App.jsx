// import DaisyNav from './components/DaisyNav/DaisyNav'

import "./App.css";
import Charts from "./components/Charts/Charts";
import OurNav from "./components/OurNav/OurNav";

function App() {
  return (
    <>
     
      <OurNav></OurNav>

      <h1 className="text-4xl p-6 mb-6 text-center mt-20">Here is the Charts of Student Result</h1>
      <Charts/>
    </>
  );
}

export default App;
