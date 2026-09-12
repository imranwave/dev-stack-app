import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import TechnologySection from "./components/Technology/TechnologySection";
import type { Technology } from "./components/types/technology";

const technologyPromise = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const technologyData = technologyPromise();
function App() {
  const [stack, setStack] = useState([]);
  const handleAddToStack = (tech) => {
    setStack([...stack, tech]);
  };
  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((technology) => technology.id !== id));
  };
  const handleRemoveAll = () => {
    setStack([]);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>loading....</p>}>
        <TechnologySection
          technologyPromise={technologyData}
          handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
          stack={stack}
        ></TechnologySection>
      </Suspense>
    </>
  );
}

export default App;
